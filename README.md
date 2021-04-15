# Mental-Health
## preproccesor hw:
*Use npm to manage packages
We need the packages to compile pug to html and sass to css.
```
npm i init -y
npm i jquery
npm i pug-cli --save-dev
npm i node-sass --save-dev
```
*Compile pug to html  
Use command
```
path/to/node_modules/.bin/pug path/to/somefile.pug -o path/to/output.html
```
*Compile sass to css  
Similary, use command
```
path/to/node_modules/.bin/node-sass path/to/somefile.sass -o path/to/output.css
```
  
In our case we compile those files and put them in preproccesor_hw/dist


