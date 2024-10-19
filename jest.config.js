module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./src/configs/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation|redux-persist|)',
  ],
};
