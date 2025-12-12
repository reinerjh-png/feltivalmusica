import { src, dest, watch } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

// Compilar SASS
export function css(done) {
    src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'))
    done()
}

// Watch para desarrollo
export function dev() {
    watch('src/scss/**/*.scss', css)
}
