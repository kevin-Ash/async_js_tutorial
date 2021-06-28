/* 
What is a callback?
- calling a function inside another function
- e.g.
function someFunction(theCallback){
    execute something
};

function theCallback(){
    execute a different something
}

*/

function one(callBack){
    console.log("step 1");
    callBack();
}

function two(){
    console.log("step 2")
}

one(two);
