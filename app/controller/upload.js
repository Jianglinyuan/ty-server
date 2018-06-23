'use strict';

const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;

class uploadCtr extends Controller {
  async uploadImg() {
    const ctx = this.ctx;
    const parts = ctx.multipart();
    let part;
    while ((part = await parts()) != null) {
      if (part.length) {
        // arrays are busboy fields
        console.log('field: ' + part[0]);
        console.log('value: ' + part[1]);
        console.log('valueTruncated: ' + part[2]);
        console.log('fieldnameTruncated: ' + part[3]);
      } else {
        if (!part.filename) {
          // user click `upload` before choose a file,
          // `part` will be file stream, but `part.filename` is empty
          // must handler this, such as log error.
          return;
        }
        // otherwise, it's a stream
        console.log('field: ' + part.fieldname);
        console.log('filename: ' + part.filename);
        console.log('encoding: ' + part.encoding);
        console.log('mime: ' + part.mime);
        let result;
        try {
          // result = await ctx.oss.put('egg-multipart-test/' + part.filename, part);
          result = await this.app.qiniu.upload(part, part.filename);
        } catch (err) {
          await sendToWormhole(part);
          this.ctx.body = {
            status: 0,
            msg: err.message,
          };
          throw err;
        }
        this.ctx.body = {
          status: 1,
          url: result.url,
        };
      }
    }
    console.log('and we are done parsing the form!');
  }
}

module.exports = uploadCtr;
