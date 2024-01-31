/*
 * grunt
 * http://gruntjs.com/
 * Licensed under the MIT license.
 */

// This is the default port that livereload listens on;
// change it if you configure livereload to use another port.
var lrSnippet = require('connect-livereload')({
	port: LIVERELOAD_PORT
});
// All the middleware necessary to serve static files.
var livereloadMiddleware = function(connect, options) {
	return [
		// Inject a livereloading script into static files.
		lrSnippet,
		// Serve static files.
		connect.static(options.base[0]),
		// Make empty directories browsable.
		connect.directory(options.base[0])
	];
};

// The first part is the "wrapper" function, which encapsulates your Grunt configuration
module.exports = function(grunt) {

	'use strict';

	// Load grunt tasks automatically
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var plugins = ['karma-mocha'];
	var browsers = [];

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Project settings
		jsb: {
			// Configurable paths
			app: 'src',
			dist: 'dist',
			test: 'test'
		},
		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= jsb.dist %>/*',
						'!<%= jsb.dist %>/.git*'
					]
				}]

        // Part-1
        // DELTA{github

			},
			server: '.tmp'
		},

		// Compare CSS output's
		compare_size: {
			files: [
				'<%= jsb.app %>/css/**',

	grunt.registerTask('test', [
		'jshint',
		'jasmine'
	]);

	// grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	// });

};
