var dirdist      = './dist/', // HTML��?发目��?
    dirbuild     = './build/', // HTML预览目录
    dirless      = dirdist + '**/*.less',
    dirsass      = dirdist + '**/*.scss';

var gulp         = require('gulp'),
    less         = require('gulp-less'),
    sass		     = require('gulp-sass'),
    path         = require('path'),
    clean        = require('gulp-clean'),
    connect      = require('gulp-connect'),
    watch        = require('gulp-watch'),
    rnStylesheet = require('gulp-react-native-stylesheet-css'),
    runSequence  = require('gulp-run-sequence');


var replaceSass =  function(replacePath){

        console.log(replacePath);

        gulp.task('replace-sass', function(){

            var sysPath     = process.platform == "win32"?replacePath.replace(/\\/g, '/'):replacePath,
                todistPath  = sysPath,
                toBuildPath = sysPath.replace(/dist/g, 'build')
                                     .replace(/sass\/[^(\/)]*.scss$/g, 'sass/');


            console.log(todistPath);
            console.log(toBuildPath);

            return gulp.src(replacePath)
                   .pipe(sass().on('error', sass.logError))
                   .pipe(rnStylesheet())
                   .pipe(gulp.dest(replacePath))
                   .pipe(connect.reload());

        });

        gulp.run('replace-sass');

        console.log('replace sass ok!');
};

var replaceLess =  function(replacePath){

        console.log(replacePath);

        gulp.task('replace-less', function(){

            if (process.platform == "win32") {
                var todistPath  = replacePath.replace(/\\/g, '/'),
                    toBuildPath = replacePath.replace(/\\/g, '/')
                                             .replace(/dist/g, 'build');



            } else if (process.platform == "darwin"){
                var todistPath  = replacePath,
                    toBuildPath = replacePath.replace(/dist/g, 'build')
                                             .replace(/less\/[^(\/)]*.less$/g, 'less/');
            }

            console.log(todistPath);
            console.log(toBuildPath);

            return gulp.src(todistPath)
                   .pipe(less({
                            paths: [ path.join(__dirname, 'less', 'includes') ]
                        }))
                   .pipe(rnStylesheet())
                   .pipe(gulp.dest(toBuildPath))
                   .pipe(connect.reload());

        });

        gulp.run('replace-less');

        console.log('replace less ok!');
};

//severs
gulp.task('connect', function(){
    connect.server({
        root: 'build',
        port: 5555,
        livereload: true
    });
});

//clean
gulp.task('clean', function(){
    return gulp.src('./build', {read: false})
    .pipe(clean());
});

//less
gulp.task('less', function(){
    return gulp.src(dirless)
               .pipe(less({
                        paths: [ path.join(__dirname, 'less', 'includes') ]
                    }))
               .pipe(rnStylesheet())
               .pipe(gulp.dest(dirbuild));
});

//sass
gulp.task('sass', function(){
	return gulp.src(dirsass)
				.pipe(sass().on('error', sass.logError))
        .pipe(rnStylesheet())
				.pipe(gulp.dest(dirbuild));
});

//watch
gulp.task('watch', function(){

    gulp.watch(dirless, function(file){
        //console.log(file.path);
        //connect.server.changed(file.path);
        replaceLess(file.path);
    });

    gulp.watch(dirsass, function(file){
        //console.log(file.path);
        //connect.server.changed(file.path);
        replaceSass(file.path);
    });

});

//default
gulp.task('default', function(){
    gulp.run('run');
});

gulp.task('run', function(cb) {
    runSequence('clean','connect',['less','sass'],['watch'], cb);
});
