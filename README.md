# halis-argv
> Get the argv args for node and all the other info like filename, etc 
> (and that's it...no other extensible, pluggable frameworks or unicorns)

## Install

``` bash
npm install halis-argv --save
```

## Unit Tests

``` bash
npm run test
```

## Usage

Minimal usage:

```js
const argv = require( 'halis-argv' );

// if you run a command like: "node ./src/argv.js hello world"
// here is the output you will get in argv
/*
	{ 
		args: [ 'hello', 'world' ],
		directory: '......./halis-argv/src',
		file: ''......./halis-argv/src/argv.js',
		program: '/usr/local/bin/node',
		command: '/usr/local/bin/node ......./halis-argv/src/argv.js hello world' 
	}
*/

```
