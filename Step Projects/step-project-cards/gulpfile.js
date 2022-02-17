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
        html: "./index.html",
        css: project_folder + "/style/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        css: source_folder + "/style/style.css",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: "./index.html",
        css: source_folder + "/style/**/*.css",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
    },
    clean: "./" + project_folder + "/"
}

//Imports:
//=====================================================
const { gulp, src, dest, watch, series } = require("gulp"),
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
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest(path.build.css))
    .pipe(browserSync.stream());
}

//--------------------------------------------
//Scripts (gulp-concat, gulp-uglify):
function scripts() {
  return src(path.src.js)
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
//Lunch and watch:
function Watch() {
  watch(path.watch.css, createCSS);
  watch(path.watch.js, scripts);
  watch(path.watch.html);
}
//=====================================================

//Exports (Work Tasks):
exports.build = series(cleanDist, createCSS, scripts, addImages);
exports.dev = Watch;
exports.default = series(cleanDist, createCSS, scripts, addImages, Watch);
