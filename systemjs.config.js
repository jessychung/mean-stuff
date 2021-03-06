(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            // other libraries
            'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-bootstrap': 'npm:ng2-bootstrap',
            'moment': 'npm:moment',
            //kendo
            '@progress': 'npm:@progress',
            '@telerik': 'npm:@telerik',
            'ng2-auto-complete': 'node_modules/ng2-auto-complete/dist'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            "@progress/kendo-angular-dropdowns": { main: './dist/npm/js/main.js', defaultExtension: 'js' },
            "@progress/kendo-angular-buttons": { main: './dist/npm/main.js', defaultExtension: 'js' },
            "@progress/kendo-angular-popup": { main: './dist/npm/js/main.js', defaultExtension: 'js' },
            "@progress/kendo-angular-grid": { main: './dist/npm/main.js', defaultExtension: 'js' },
            "@progress/kendo-data-query": { main: './dist/npm/main.js', defaultExtension: 'js' },
            "@progress/kendo-angular-intl": { main: './dist/npm/main.js', defaultExtension: 'js' },
            "@progress/kendo-angular-dialog": { main: './dist/npm/main.js', defaultExtension: 'js' },
            "@telerik/kendo-intl": { main: './dist/npm/main.js', defaultExtension: 'js' },
            "@telerik/kendo-dropdowns-common": { main: './dist/npm/js/main.js', defaultExtension: 'js' },
            "@progress/kendo-popup-common": { main: './dist/npm/js/main.js', defaultExtension: 'js' },
            'ng2-bootstrap': { main: 'bundles/ng2-bootstrap.umd.js', defaultExtension: 'js' },
            'moment': { main: './moment.js', defaultExtension: 'js' },
            'ng2-auto-complete': { main: 'ng2-auto-complete.umd.js', defaultExtension: 'js' }
        }
    });
})(this);
