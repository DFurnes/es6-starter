module.exports = function(grunt, options) {
  return {
    compile: {
      files: grunt.file.expandMapping(['lib/**/*.scss'], 'dist/', {
        rename: function (dest, matched) {
            console.log(matched);
            return dest + matched.replace(/lib\//, "").replace(/\.scss$/, '.css');
        }
      }),
      options: {
        outputStyle: "compressed",
        sourceComments: "map"
      }
    }
  }
}
