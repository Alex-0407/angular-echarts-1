/**
 * Created by 烬云 on 2014/9/13.
 */
module.exports = function (grunt) {
  var path = require('path');

  require('load-grunt-config')(grunt, {
    // path to task.js files, defaults to grunt dir
    configPath: path.join(process.cwd(), 'grunt'),

    // auto grunt.initConfig
    init: true,

    // data passed into config.  Can use with <%= test %>
    data: {
      jsTarget: 'dist'
    },

    // can optionally pass options to load-grunt-tasks.
    // If you set to false, it will disable auto loading tasks.
    loadGruntTasks: {
      pattern: 'grunt-*',
      config: require('./package.json'),
      scope: 'devDependencies'
    },

    //can post process config object before it gets passed to grunt
    postProcess: function (config) {
    }
  });

  grunt.registerTask('default', ['ngtemplates', 'concat', 'uglify']);
  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('doc', ['loopback_sdk_angular', 'ngdocs']);
};
