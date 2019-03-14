module.exports = {
  presets: [
    '@babel/env',
    '@babel/react',
  ].filter(Boolean),
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-spread',
  ],
};
