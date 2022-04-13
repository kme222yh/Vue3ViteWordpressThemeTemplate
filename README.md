Vue3ViteWordpressThemeTemplate
-------

Template for wordpress theme creation using vue3 and vite

* Node.js v16.14.0
* npm 8.3.1
* Vue.js 3.x
* WordPress 5.9


### Setup
```
npm install
npm run build

# Download wordpress
curl -O https://wordpress.org/latest.tar.gz
tar xzf latest.tar.gz
rm latest.tar.gz
ln -s ../../../dist wordpress/wp-content/themes/{Theme Name}
```


### Develop
```
npm run watch
```


### Build for production
```
npm run build
```


### Launch Wordpress
```
cd wordpress
php -S localhost:8000
```
