let meraPromise = new Promise(function(resolve,reject){
    setTimeout(function(){console.log('i am inside promise');},5000);
    // resolve(2233);
    reject(new Error("errro aaye hai"))
});

console.log('pehla');