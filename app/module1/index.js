module.exports = {
  path: 'module1',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./module1.jsx'))
    })
  }
}
