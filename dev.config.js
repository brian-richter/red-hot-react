module.exports = {
    // Location of js/jsx
    scripts: 'scripts',
    // Main script
    entry: './scripts/app',
    // Location of stylesheets
    styles: {
        scss: 'styles/scss',
        sass: 'styles/sass',
        less: 'styles/less',
        css: 'styles/css'
    },
    // Location of specs.
    tests: '__tests__',
    // Output for compiled.
    bin: 'bin',
    // File extensions to look for
    ext: {
        js: ['js', 'jsx', 'react'],
        spec: ['js', 'jsx', 'react']
    },
    // Port on which we will serve the dev server (along with intermediate files generated by webpack)
    port: 3000,
    webPack: {
        // (this is the actual port that runs the dev server, but webpack sort of hijacks it to serve intermediate files)
        port: 3001,
        // stfu webpack, you're noisy
        silent: true
    },
    // Open browser on watch?
    open: true,
    // Name of uglifed bundle as generated by gulp compile
    compiled: 'bundle.min.js',
    // Name of generated bundle as generated by gulp build
    built: 'bundle.js'
};