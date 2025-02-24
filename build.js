const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');
const { copy } = require('esbuild-plugin-copy');

// Función para minificar HTML
async function minifyHTML(sourcePath, destinationPath) {
    try {
        const html = fs.readFileSync(sourcePath, 'utf8');
        const minifiedHtml = await minify(html, {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            minifyCSS: true,
            minifyJS: true
        });
        fs.writeFileSync(destinationPath, minifiedHtml, 'utf8');
        console.log(`✅ Minificado: ${destinationPath}`);
    } catch (error) {
        console.error(`❌ Error minificando ${sourcePath}:`, error);
    }
}

// Ejecutar la minificación para cada HTML en src/
const htmlFiles = ['index.html', 'formulario.html'];
htmlFiles.forEach(file => {
    minifyHTML(`src/${file}`, `dist/${file}`);
});

// Ejecutar el bundler de esbuild
esbuild.build({
    entryPoints: ['src/scripts/main.js', 'src/styles/styles.css'],
    bundle: true,
    minify: true,
    outdir: 'dist',
    sourcemap: false,
    platform: 'browser',
    format: 'iife',
    target: ['es6'],
    loader: {
        '.png': 'file',
        '.jpg': 'file',
        '.mp4': 'file'
    },
    define: { 'process.env.NODE_ENV': '"production"' },
    plugins: [
        copy({
            resolveFrom: 'cwd',
            assets: {
                from: ['./src/assets//*'],
                to: ['./dist/assets']
            }
        })
    ]
}).then(() => {
    console.log('⚡ Build completo');
}).catch(() => process.exit(1));