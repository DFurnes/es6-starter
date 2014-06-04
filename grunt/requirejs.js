module.exports = function(grunt, options) {
  return {
    browser: {
      options: {
        baseUrl: "dist/commonjs",
        include: "main",
        insertRequire: ["main"],
        out: "dist/<%= pkg.name %>.js",
        optimize: "uglify2",
        cjsTranslate: true,
        findNestedDependencies: true,
        preserveLicenseComments: false,
        onModuleBundleComplete: function(data) {
          var fs = require("fs");
          var amdclean = require("amdclean");
          var outputFile = data.path;
          var package = grunt.file.readJSON("package.json");
          var chalk = require("chalk");

          console.log("Attaching to window using namespace " + chalk.cyan(package.namespace) + ".");

          fs.writeFileSync(outputFile, "!(function() {" + amdclean.clean({
            filePath: outputFile,
            globalObject: true,
            rememberGlobalObject: false,
          }) + " window." + package.namespace + " = main; } )();" );
        }
      }
    }
  }
}
