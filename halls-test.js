
/*
 * 题目出处： 
 * wo have a problem with promise.
 * http://fex.baidu.com/blog/2015/07/we-have-a-problem-with-promises/
 */
// 下面 4 中 Promise 的区别是什么

// #1
doSomething().then(function () {
	return doSomethingElse();
});

// #2
doSomething().then(function () {
	doSomethingElse();
});

// #3
doSomething().then(doSomethingElse());

// 4#
doSomething().then(doSomethingElse);


// 答案

// #1
doSomething()
  .then(function () {
	  return doSomethingElse();
})
  .then(finalHandler);

doSomething
|---------------|
                doSomethingElse(undefined)
                |---------------|
                                finalHandler(resultOfDoSomethingElse)
                                 |---------------|



// #2
doSomething()
  .then(function () {
	  doSomethingElse();
  })
  .then(finalHandler);

doSomething
|---------------|
                doSomethingElse(undefined)
                |---------------|
	            finalHandler(resultOfDoSomethingElse)
	            |---------------|


// #3
doSomething()
  .then(doSomethingElse())
  .then(finalHandler);	

doSomething
|--------------------|
doSomethingElse(undefined)
|-------------------------------------|
	                 finalHandler(resultOfDoSomethingElse)
	                 |--------------------|	 


// 4#
doSomething()
  .then(doSomethingElse)
  .then(finalHandler);

doSomething
|--------------|
                doSomethingElse(undefined)
                |---------------|
                                finalHandler(resultOfDoSomethingElse)
                                |---------------|		