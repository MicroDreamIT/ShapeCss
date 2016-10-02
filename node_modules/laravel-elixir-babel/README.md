# laravel-elixir-babel

A Laravel Elixir extension for compiling ES6 javascript in your project to ES5 using the Babel transpiler with optional sourcemap support


# Installation

`npm install laravel-elixir-babel --save-dev `

# Usage

`mix.babel(srcFile, options)`

## Gulpfile

### Basic

	var elixir = require("laravel-elixir");

	require("laravel-elixir-babel");

	elixir(function(mix) {
   		mix.babel("app.js");
	});


### Advanced

	var elixir = require("laravel-elixir");

	require("laravel-elixir-babel");

	elixir(function(mix) {
   		mix.babel("app.js", {
   			srcDir: "resources/js",
   			output: "public/js",
   			sourceMaps: true
   		});
	});


### Transpiler Options

Please see the official Babel documention for the full list of options here: [Babel Options](https://babeljs.io/docs/usage/options/)