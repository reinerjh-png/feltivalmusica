import { src, dest, watch } from 'gulp'
//extraer la dependencia
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)
//compilar sass
export function css(done) {
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))
        .pipe()
    done()
}
export function dev() {
    watch('src/scss/app.scss', css)
}
