module.exports = {
  path: 'module2',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./module2'))
    })
  }
}
