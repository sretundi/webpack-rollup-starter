
// rollups
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import globals from 'rollup-plugin-node-globals';
import livereload from 'rollup-plugin-livereload';
import multiEntry from 'rollup-plugin-multi-entry';

import css from 'rollup-plugin-css-only';
// import css from '@modular-css-rollup';
// import embedCss from 'rollup-plugin-embed-css';
import postCss from 'rollup-plugin-postcss';
import cssModules from 'postcss-modules';
// turn on for production build
import { uglify } from 'rollup-plugin-uglify';

// todo ignore snapshots if necessary
// todo watch does not work with babel css 

export default {
    input: ['src/index.js'],
    output: {
        sourcemap: true,
        file: 'dist/bundle.js',
        format: 'iife',
    },
    external: [
        /\.css$/
    ],
    // watch: {
    //     include: 'src/**'
    // },
    plugins: [
        multiEntry(),
        livereload({
            watch: 'dist'
        }),
        // css({output: 'dist/bundle.css'}),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        resolve({
            browser: true,
            main: true
        }),
        commonjs({
            include: [
                'node_modules/**'
            ],
            namedExports: {
                'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
                'node_modules/react-dom/index.js': ['render'],
            },
        }),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [ ['es2015', {modules: false} ], 'stage-1', 'react'],
            plugins: [
                'react-css-modules',
                'external-helpers', 
                [
                    'css-modules-transform',
                    { 
                        // preprocessCss: () => css({output: './tmp/index.css'}),
                        'extractCss': "./dist/bundle.css"
                    }
                ]
            ]
        }),
        globals()
    ]
  };




   // embedCss({
        //     output: 'dist/bundle.css'
        // }),
        // css(),
        // postCss({
        //     extract: true,
        //     plugins: [
        //         cssModules({
        //             getJSON(id, exportTokens){
        //                 cssExportMap[id] = exportTokens;
        //             }
        //         })
        //     ],
        //     getExportNamed: false,
        //     getExport(id) {
        //         return cssExportMap[id];
        //     },
        // }),
  
