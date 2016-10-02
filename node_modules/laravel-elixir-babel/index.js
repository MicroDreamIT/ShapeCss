var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    _ = require('underscore'),
    elixir = require('laravel-elixir'),
    utilities = require('laravel-elixir/ingredients/commands/Utilities'),
    notification = require('laravel-elixir/ingredients/commands/Notification');

elixir.extend('babel', function (src, options) {

    var config = this,
        babelOpts,
        defaultOptions = {
            debug:         ! config.production,
            srcDir:        config.assetsDir + 'js',
            output:        config.jsOutput,
            sourceMaps: false
        };

    options = _.extend(defaultOptions, options);
    babelOpts = _.omit(options, ['srcDir', 'output', 'sourceMaps', 'debug']);
    src = "./" + utilities.buildGulpSrc(src, options.srcDir);

    gulp.task('babel', function () {

        var onError = function(e) {
            new notification().error(e, 'Babel Compilation Failed!');
            this.emit('end');
        };

        return gulp.src(src)
            .pipe(gulpIf(options.sourceMaps, sourcemaps.init()))
            .pipe(babel(babelOpts)).on('error', onError)
            .pipe(gulpIf(! options.debug, uglify()))
            .pipe(gulpIf(options.sourceMaps, sourcemaps.write()))
            .pipe(gulp.dest(options.output))
            .pipe(new notification().message('Babel Compilation Finished!'));
    });

    this.registerWatcher('babel', options.srcDir + '/**/*.js');

    return this.queueTask('babel');

});