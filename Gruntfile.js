/*global module:false*/
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		watch: {
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'  //监听前面声明的端口  35729
				},
				files: '*.*'
			}
		},
		connect: {
			options: {
				port: 9001,
				hostname: 'localhost', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
				livereload: 35730  //声明给 watch 监听的端口
			},
			server: {
				options: {
					open: true, //自动打开网页 http://
					base: [
					'./'  //主目录
					]
				}
			}
		}
	});


  grunt.registerTask('server', ['connect', 'watch']);

};
