const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function videos() { // <<< NOVA FUNÇÃO
    return gulp.src('./src/videos/*')
        .pipe(gulp.dest('./dist/videos'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}



// ATUALIZE AQUI 👇 para incluir 'videos'
exports.default = gulp.parallel(styles, images, scripts, videos);

// ATUALIZE AQUI 👇 para incluir 'videos'
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
    gulp.watch('./src/videos/*', gulp.parallel(videos)); 
}
