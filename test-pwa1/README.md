  ## 动画
  npm i -S move-js
  npm i -S animo-animate


  sass
  npm i -D node-sass sass sass-loader

  
  babel
   npm i -D @vue/babel-preset-app

    npm i -D babel-loader babel-core    babel-preset-env                                           
    npm i -D babel-polyfill babel-runtime  babel-plugin-transform-runtime             
    npm i -D babel-plugin-transform-decorators-legacy babel-plugin-transform-decorators       
    npm i -D babel-plugin-add-module-exports  babel-plugin-transform-class-properties  babel-plugin-transform-object-rest-spread   




    "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "@vue/prettier"
    ],
    "rules": {},
    "parserOptions": {
      "parser": "babel-eslint"
    }
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]