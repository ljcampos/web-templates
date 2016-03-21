module.exports= function(grunt) {
	// Proyect configuration, task and proyect config.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// uglify
		uglify: {
			option: {
				mangle: false,
				compress: {
					drop_console: true
				}
			},
			js:{
				files:[{
					cwd:'js/src', //
					expand:true, //
					src:'*.js', //
					dest:'js/min' //
				}]
			}
		},
		less: {
			dev: {
				options: {
					//paths: ['app/webroot/css/'],
					//compress:true,
					//yuicompress:true,
					//optimization:2
					outputStyle: 'expanded'
				},
				/*src: {
					expand: true,
					cwd: 'app/webroot/css/private/site/',
					src: '*.less',
					dest: 'app/webroot/css/public/site/',
					ext: '.css'
				}
				files: {
					'app/webroot/css/public/site/*.css' : 'app/webroot/css/private/site/*.less'
				}*/
				files:[{
					expand: true,
					cwd: 'less',
					src: '*.less',
					dest: 'css',
					ext: '.css'
				}]
			}
		},
		watch: {
			css: {
				options: {
					spawn:false,
					event:['added', 'deleted', 'changed']
				},
				files: ['less/*.less'],
				tasks: ['less:dev']
			}
		}
	});
	// loadNpmTasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	// Run default task(s).
	grunt.registerTask('default', ['less:dev']);
};