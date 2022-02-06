//Imports:
//Gulp:
const { src, dest, series, watch } = require("gulp");
//------------
//SCSS:
const sass = require("gulp-sass")(require("sass"));
const clean = require("gulp-clean");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
//------------
//Images:
const image = require("gulp-image");
//------------
//JS scripts:
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
//Rename:
const rename = require("gulp-rename");
//======================================================
//Declarations:
//---------------------
//Clean:
function cleanDist() {
  return src("./dist", { read: false }).pipe(clean());
}
//---------------------
//Scss
//Sass, Autoprefixer, gulp-clean-css, gulp-concat-css, css-minify (no reason, gulp-clean-css do the same) :
function createCss() {
  return src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(rename("styles.min.css"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/"));
}
//---------------------
//JS scripts
//Gulp-concat, gulp-uglify, gulp-minify(no reason, uglify do the same):
function scripts() {
  return src("src/js/*.js")
    .pipe(concat("js.js"))
    .pipe(rename("scripts.min.js"))
    .pipe(uglify())
    .pipe(dest("dist/"));
}
//---------------------
//Images
//gulp-image:
function minifyImg() {
  return src("src/img/*")
  .pipe(image())
  .pipe(dest("dist/img"));
}
//---------------------
//Broeser-sync
//browser-sync (static server):
function server() {
  return browserSync.init({
    server: "./",
  });
}
//Lunch and watch:
function lunch() {
  server();
  watch("src/SCSS/*.scss", createCss).on("change", browserSync.reload);
  watch("src/js/*.js", scripts).on("change", browserSync.reload);
  watch("index.html").on("change", browserSync.reload);
}
//===============================================================
//Tasks:
exports.build = series(cleanDist, createCss, minifyImg, scripts);
exports.dev = lunch;
//===============================================================
