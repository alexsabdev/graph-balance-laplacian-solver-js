module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true,
                interval: 3007
            },
            scripts: {
                files: 'demo/scripts/**/*.js',
                tasks: ''
            },
            styles: {
                files: 'demo/styles/**/*.css',
                tasks: ''
            },
            html: {
                files: 'demo/*.html',
                tasks: ''
            }
        },
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    bases: ['./demo/'],
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');

    grunt.registerTask('default', ['express', 'watch']);
};