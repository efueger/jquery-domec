/*jslint indent: 4, maxlen: 120 */
/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-blanket');
    grunt.loadNpmTasks('grunt-blanket-mocha');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        copy: {
            dist: {
                expand: true,
                flatten: true,
                src: 'src/*',
                dest: 'dist/'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'dist/jquery-domec.min.js': ['dist/jquery-domec.js']
                }
            }
        },
        mocha: {
            all: {
                src: [
                    'test/testrunner-jquery1.html',
                    'test/testrunner-jquery2.html'
                ]
            },
            options: {
                run: true
            }
        },
        blanket: {
            options: {},
            all: {
                files: {
                    'src-cov/': ['src']
                }
            }
        },
        blanket_mocha: {
            all: {
                src: [
                    'test/testrunner-jquery1.html',
                    'test/testrunner-jquery2.html'
                ],
                options: {
                    threshold: 100,
                    run: true
                }
            }
        },
        jslint: {
            all: {
                src: [
                    'src/*.js',
                    'test/*.js',
                    'Gruntfile.js'
                ]
            }
        },
        jshint: {
            all: [
                'src/*.js',
                'test/*.js',
                'Gruntfile.js'
            ]
        }
    });

    grunt.registerTask('build', ['copy', 'uglify']);
    grunt.registerTask('test', ['jslint', 'jshint', 'mocha']);
    grunt.registerTask('cover', ['blanket_mocha']);
    grunt.registerTask('default', ['build', 'test', 'cover']);
};