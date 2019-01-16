// Karma configuration
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'challenges/computer-science-in-4-semesters/challenge-4-merge-sort/challenge-4.js',
            'challenges/computer-science-in-4-semesters/**/*.spec.js'
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