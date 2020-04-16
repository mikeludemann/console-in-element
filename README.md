# console-in-element

Console informations and all types in an element

## Example

```JS
// Call the function

consoleInElement("#log");

// All console types with examples

var x = 1;

console.log(x);

console.time('abc'); 

	let test = testction(){ 

		console.log('test is running'); 

	} 

	let test2 = testction(){ 

		console.log('test2 is running..'); 

	} 

	test();
	test2();

console.timeEnd('abc');

console.table(JSON.stringify({'a':1, 'b':2})); 

console.warn("Warning Status");

console.error("Error Status");

for(let i=0;i<5;i++){ 

	console.count(i); 

} 

console.group('simple'); 

	console.warn('warning!'); 

	console.error('error here'); 

	console.log('hi'); 

console.groupEnd('simple'); 

console.log('new log');
```
