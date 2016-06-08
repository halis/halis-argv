'use strict';

const argv = require( '../src/argv.js' );
const args = argv.args;
const expect = require( 'chai' ).expect;

describe( 'argv', () => {

	it( 'should get the correct args (which are passed to mocha in this case)', () => {
		expect( args.length ).to.equal( 1 );
		expect( args[ 0 ] ).to.equal( 'test/**/*.js' );
	});

	it( 'gets the directory', () => {
		expect( argv.directory == null ).to.equal( false );
	});

	it( 'gets the file', () => {
		expect( argv.file == null ).to.equal( false );
	});

	it( 'gets the program', () => {
		expect( argv.program == null ).to.equal( false );
	});

	it( 'gets the full command', () => {
		expect( argv.command == null ).to.equal( false );
	});

});
