//--------------+
"use strict";//+
//--------------+

//=====================================================
//Pressets:
const source_folder = "src",
      project_folder = "dist";

//----------------------------
//Pathes Map:
const path = {
    build: {
        html: "./indx.html",
        css: project_folder + "/style/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: "./index.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
    },
    clean: "./" + project_folder + "/"
}

//Imports:
//=====================================================
const { src, dest, watch, series } = require("gulp"),
      gulp = require("gulp"),
//-----
      clean = require("gulp-clean"),
//-----
      browserSync = require("browser-sync").create(),
//-----
      sass = require("gulp-sass")(require("sass")),
      autoprefixer = require("gulp-autoprefixer"),
      cleanCSS = require("gulp-clean-css"),
//-----
      concat = require("gulp-concat"),
      uglify = require("gulp-uglify"),
//-----
      rename = require("gulp-rename"),
      imagemin = require("gulp-imagemin");
//=====================================================

//Declarations:

//--------------------------------------------
//Clean:
function cleanDist() {
  return src(path.clean, {allowEmpty:true, read: false }).pipe(clean());
}

//--------------------------------------------
//Sass, Gulp-autoprefixer:
function createCSS() {
  return src(path.src.css)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
  //.pipe(rename("style/styles.min.css"))
    .pipe(dest(path.build.css))
    .pipe(browserSync.stream());
}

//--------------------------------------------
//Scripts (gulp-concat, gulp-uglify):
function scripts() {
  return src(path.src.js)
    //.pipe(concat("main.js"))
    .pipe(uglify())
  //.pipe(rename("js/scripts.min.js"))
    .pipe(dest(path.build.js))
    .pipe(browserSync.stream());
}

//--------------------------------------------
//Gulp-imagemin:
function addImages() {
  return src(path.src.img)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interplaced: true,
        optimizationlevel: 3,
      })
    )
    .pipe(dest(path.build.img));
}
//--------------------------------------------
//:Browse-sync:
//Server:
function server() {
  return browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 3000,
    notify: false,
  });
}
//Lunch and watch:
function lunchAndWatch() {
  server();
  watch(path.watch.css, createCSS);
  watch(path.watch.js, scripts);
  watch(path.watch.html).on("change", browserSync.reload);
}
//=====================================================

//Exports (Work Tasks):
exports.build = series(cleanDist, createCSS, scripts, addImages);
exports.dev = lunchAndWatch;
exports.default = series(cleanDist, createCSS, scripts, addImages, lunchAndWatch);
