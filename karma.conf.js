// Karma configuration
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            // 'challenges/computer-science-in-4-semesters/**/*.js'
            // 'challenges/functional-light-javascript/challenge 7 - data structures/*.js'
            'challenges/a-practical-guide-to-algorithms-with-javascript/exercise-15-bubble-sort/*.js'
        ],
        exclude: [
        ],
        preprocessors: {},
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};