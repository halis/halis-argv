'use strict';

let args = process.argv;

const command = args.join( ' ' );
const program = args.shift( );
const file = args.shift( );
const directory = __dirname;

let result = {
	args,
	directory,
	file,
	program,
	command,
};

module.exports = result;
