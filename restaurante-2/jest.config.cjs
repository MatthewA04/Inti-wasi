// jest.config.cjs
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
moduleNameMapper: {
  "^../env.js$": "<rootDir>/src/env.js", // Ayuda a localizar el archivo desde los componentes
  "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "<rootDir>/fileMocks.js",
},
};