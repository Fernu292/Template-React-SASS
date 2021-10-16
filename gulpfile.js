const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const Webp = require('gulp-webp');


const paths = {
    scss : 'src/SCSS/**/*.scss',
    css : 'src/',
    img : 'src/img/*',
    Webp : 'src/Webp'
}

const Web = ()=>{
    return(src(paths.img))
    .pipe( Webp() )
    .pipe( dest (paths.Webp));
}

const CSS = ()=>{
    return src(paths.scss)
    .pipe( sass() )
    .pipe( dest(paths.css) );
}

const SeeArchive = () =>{
    watch(paths.scss, CSS);
}


exports.CSS = CSS;
exports.SeeArchive = SeeArchive;
exports.Web = Web;

exports.default = series(CSS, Web, SeeArchive);