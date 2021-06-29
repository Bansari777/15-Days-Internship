//program that shows the delay in execution
function greet() {
    console.log('hello world');
}
function sayName(name) {
    console.log('Hello' + ' ' + name);
}
// calling the function
setTimeout(greet, 2000);

// 2000ms waiting for the next function i.e. sayName
sayName('Bansari');