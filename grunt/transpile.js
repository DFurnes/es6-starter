module.exports = {
  amd: {
    type: 'amd',
    files: [{
      expand: true,
      cwd: 'lib/',
      src: ['**/*.js', '!**/banner.js'],
      dest: 'tmp/',
      ext: '.amd.js'
    }]
  },

  commonjs: {
    type: 'cjs',
    files: [{
      expand: true,
      cwd: 'lib/',
      src: ['**/*.js'],
      dest: 'dist/commonjs/',
      ext: '.js'
    },
    {
      src: ['lib/<%= pkg.name %>.js'],
      dest: 'dist/commonjs/main.js'
    }]
  }

}
