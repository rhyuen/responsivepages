"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const del = require("del");
const imagemin = require("imagemin");
const eslint = require("gulp-eslint");

gulp.task("lint", () => {
  return gulp.src(["**/*.js", "!node_modules/**", "!bower_components/**"])
    .pipe(eslint({
      "rules": {
        "quotes": [1, "double"],
        "semi": [1, "always"]
      },
      "extends": "eslint:recommended",
      "parserOptions": {
        "ecmaVersion": 6
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});


gulp.task("browserSync", () => {
  browserSync.init({
    server: {
      baseDir: "./public/views"
    }
  });
});

gulp.task("watch", ["lint", "browserSync"], () => {
  gulp.watch("./public/**/*.js").on("change", browserSync.reload);
  gulp.watch("./public/**/*.css").on("change", browserSync.reload);
  gulp.watch("./public/**/*.html").on("change", browserSync.reload);
});

gulp.task("default", ["browserSync", "watch"]);
