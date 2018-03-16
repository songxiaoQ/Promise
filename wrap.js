/*
 * 把回调包装成 Promise
 */

const fs = require('./FileSystem');

fs.readFile('./README.md', 'utf-8')
  .then( content => {
  	console.log(content);
  });
