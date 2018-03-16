/*
 * Promise.reject()
 */

let promise = Promise.reject('something wrong');

promise
    .then( () => {
    	console.log('it\'s ok');
    })
    .catch( () => {
    	console.log('no, it\' not ok');

    	return Promise.reject({
    		then() {
    			console.log('it will be ok');
    		},
    		catch() {
    			console.log('not yet');
    		}
    	});
    });