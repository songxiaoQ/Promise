/* .then() 里有 .then() 的情况 */

console.log('start');

new Promise( resove => {
	console.log('step 1');
	setTimeout(() => {
		resove(100);
	}, 1000);
})
	.then( value => {
		return new Promise( resolve => {
			console.log('step 1-1');
			setTimeout(() => {
				resolve(110);
			}, 1000);
		})
		
	})
	.then( value => {
		console.log('step 1-2');
		return value;
	})
	.then( value => {
		console.log('step 1-3');
		return value;
	})
	.then(value => {
		console.log(value);
		console.log('step 2');
	});