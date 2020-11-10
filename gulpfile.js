const gulp = require('gulp');
const sass = require('gulp-sass');

// パーシャルを一括管理
const sassGlob = require('gulp-sass-glob');

// エラーがでても監視を続行
const plumber = require('gulp-plumber');

// エラー時に通知
const notify = require('gulp-notify');

// ベンダープレフィックスを自動付与
const autoprefixer = require('gulp-autoprefixer');

// 書き出したファイル名をリネームする
const rename = require('gulp-rename');

// jsの圧縮
const babel = require('gulp-babel');

// htmlの圧縮
const htmlmin = require('gulp-htmlmin');

// 画像の圧縮
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const imageminJpg = require('imagemin-jpeg-recompress');
const imageminPng = require('imagemin-pngquant');
const imageminGif = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

const { src, dest, watch } = require('gulp');


// sassコンパイル
const cssTask = () => {
    return src('./src/sass/**/*.scss', {sourcemaps: true})
        .pipe(sassGlob())
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(autoprefixer({cascade:false}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(dest('./css', {sourcemaps: true}))
}

// jsコンパイル
const jsTask = () => {
    return src('./src/js/**/**', {sourcemaps: true})
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(dest('./js', {sourcemaps: true}))
}

// 画像のコンパイル
const imgTask = () => {
    src('./src/images/**')
        .pipe(changed('dist/images'))
        .pipe(imagemin([
            imageminPng(),
            imageminJpg(),
            imageminGif({
                interlaced: false,
                optimizationLevel: 3,
                colors: 180
            }),
            imagemin.svgo()
        ]))
        .pipe(dest('./images'))
}

//htmlのコンパイル
const htmlTask = () => {
    return src('./src/html/**')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('./html'))
}

const keiryoWatch = () => {
    watch('./src/sass/**/*.scss', cssTask)
    watch('./src/js/**', jsTask)
    watch('./src/images/**', imgTask)
    watch('./src/html/**', htmlTask)
}
exports.keiryoWatch = keiryoWatch;
