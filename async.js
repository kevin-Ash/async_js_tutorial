/* 
what is sync & async?
- sync code is executed consecutively i.e one after the other
- async is executed simultaneously
*/

// synchronous
console.log("this ");
console.log("is ");
console.log("executed");
console.log("synchronously");

// async
console.log("this ");
console.log("is ");
setTimeout(() => {
    console.log("executed ");
}, 10000); // executed outside the scope of this 'thread'
console.log("asynchronously");

