/*
 * 错误处理
 * Promise 会自动捕获内部异常，并交给 rejected 响应函数处理 
 */

console.log('here we go');

new Promise( resolve => {
	setTimeout(() => {
		throw new Error('bye');
	}, 2000);
})
  .then( vlaue => {
  	console.log(value + ' world');
  })
  .catch( error => {
  	console.error('Error: ', error.message);
  })
