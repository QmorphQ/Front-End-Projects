//------------
"use strickt";
//------------
//=================================================
//Imports:
const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concatCss = require('gulp-concat-css');
//=================================================
//Declarations:
function createStyles(){
    return src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("styles.css"))
    .pipe(dest('./dist/'));
};
function watchSCSS(){
    watch('./**/*.scss', createStyles);
}
exports.createStyles = createStyles;
exports.watchSCSS = watchSCSS;
