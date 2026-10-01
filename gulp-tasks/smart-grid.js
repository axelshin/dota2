"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "styl",
        filename: "smart-grid",
        columns: 12, // number of grid columns
        offset: "1.875rem", // gutter width - 30px
        mobileFirst: true,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "0.9375rem" // side fields - 15px
        },
        breakPoints: {
            xs: {
                width: "20rem" // 320px
            },
            sm: {
                width: "36rem" // 576px
            },
            md: {
                width: "30rem" // 480px
            },
            lg: {
                width: "60rem" // 960px
            },
            lgg: {
                width: "100rem" // 1600px
            },
            xl: {
                width: "75rem" // 1200px
            },
            xxl: {
                width: "100rem" // 1600px
            },
            xxxl: {
                width: "120rem" // 1920px
            }
        }
    });
    cb();
});
