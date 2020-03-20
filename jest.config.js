module.exports = {
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|gif|ttf|woff|woff2)(\\?inline)?$': '<rootDir>/test/unit/mocks/transform.js',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/infrastructure/**/*.js',
    '<rootDir>/store/**/*.js'
  ],
  testMatch: [
    '**/test/unit/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  setupFilesAfterEnv: ['<rootDir>/test/unit/setup.js']
}
