module.exports = {
  options: {
    jshintrc: true,
    reporter: require("jshint-stylish")
  },
  all: [
    "lib/**/*.js",
    "tests/**/*.js",
  ]
}
