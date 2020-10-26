module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-env'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      'transform-class-properties',
    ]
  ]
};