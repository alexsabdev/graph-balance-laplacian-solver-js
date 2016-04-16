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
        },
        copy: {
            task0: {
                src: 'demo/scripts/gblsolvr.js',
                dest: 'dist/gblsolvr.js'
            }
        },
        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dist/gblsolvr.js',
                dest: 'dist/gblsolvr.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['express', 'watch']);
    grunt.registerTask('dist', ['copy:task0', 'uglify']);
};
