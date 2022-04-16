Vue3ViteWordpressThemeTemplate
-------

Template for wordpress theme creation using vue3 and vite

* Node.js v16.14.0
* npm 8.3.1
* Vue.js 3.2.31
* vite 2.9.1
* WordPress 5.9


### Setup

1. Replace {YourThemeName} in package.json.
```
"build": "vite build --base=/wp-content/themes/{YourThemeName}/",
"watch": "vite build --base=/wp-content/themes/{YourThemeName}/ --watch"
```

2. Build project.
```
% npm install
% npm run build
```

3. Download WordPress and extract.
```
% curl -O https://wordpress.org/latest.tar.gz
% tar xzf latest.tar.gz
% rm latest.tar.gz
```

4. Create symbolic link to theme folder.
```
% ln -s ../../../dist wordpress/wp-content/themes/{YourThemeName}
```

5. Launch WordPress and select your theme.
```
% cd wordpress
% php -S localhost:8000
```


### Develop
```
% npm run watch
```


### Build for production
```
% npm run build
```
