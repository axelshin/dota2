"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import pug from "gulp-pug";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

const fs = require("fs");
const path = require("path");
const data = {};

// const text = __dirname;
// const match = text.match(/\\(fl_[^\\]+)(?=\\|$)/);
// const result = match[1];

// const path = require("path");
const parts = __dirname.split(path.sep);
const result = parts.find(p => p.startsWith("fl_")) || null;

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("views", () => {
    const modules = fs.readdirSync("src/data/");
    modules.forEach(json => { 
        const name = path.basename(json, path.extname(json));
        const file = path.join("./src/data", json);
        data[name] = JSON.parse(fs.readFileSync(file));
    });
    return gulp.src(paths.views.src,  {base: "./src/views/"})
        .pipe(pug({
            pretty: true,
            locals : {
                data: data
            }
        }))
        .pipe(gulpif(production, replace(".css", ".min.css")))
        .pipe(gulpif(production, replace("http://faberlic.com/", "/")))
        .pipe(gulpif(production, replace("https://faberlic.com/", "/")))
        .pipe(gulpif(production, replace("./img/", `https://static.faberlic.com/${result}/img/`)))
        .pipe(gulpif(production, replace(".js", ".min.js")))
        .pipe( replace("#[br]", "<br />" ))
        .pipe(gulp.dest(paths.views.dist))
        .pipe(browsersync.stream());
});