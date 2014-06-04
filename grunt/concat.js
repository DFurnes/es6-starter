module.exports = function(grunt, options) {
  return {
    amd: {
      src: "tmp/**/*.amd.js",
      dest: "dist/ferret.amd.js"
    },
    license: {
      options: {
        stripBanners: true,
        banner: grunt.file.read("lib/banner.js") + "\n"
      },
      files: {
        "dist/<%= package.name %>.js": "dist/<%= package.name %>.js",
        "dist/<%= package.name %>.amd.js": "dist/<%= package.name %>.amd.js",
        "dist/commonjs/main.js": "dist/commonjs/main.js"
      }
    }
  }
}
