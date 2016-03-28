Package.describe({
    name: 'eupton:moment-timezone',
    summary: 'Server-side only timezone support for moment.js',
    version: '0.5.3',
    git: 'https://github.com/littledata/meteor-moment-timezone'
});

Package.on_use(function (api) {
    var where = "server";
    var momentPackageName = !!Package.onUse ? "momentjs:moment@2.11.1" : "moment"
    
    api.use(momentPackageName, where);
    
    if (api.imply) {
        api.imply(momentPackageName, where);
    }
    
    api.add_files('pre.js', where);
    api.add_files('lib/moment-timezone-with-data.js', where);
    api.add_files('post.js', where);
});