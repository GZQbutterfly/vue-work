 # test-ant-react


   ## 构建项目
    npm init --yes

    npm i -S react react-dom
    npm i -S react-router react-router-dom react-router-native react-router-redux


    npm i -D webpack webpack-cli webpack-merge

    npm i -D html-webpack-plugin 
    npm i -D clean-webpack-plugin copy-webpack-plugin webpack-dev-server
    
    npm i -D extract-text-webpack-plugin@next 

   ## babel
    npm i -D babel-loader babel-core    babel-preset-env                                           
    npm i -D babel-polyfill babel-runtime  babel-plugin-transform-runtime             
    npm i -D babel-plugin-transform-decorators-legacy babel-plugin-transform-decorators       
    npm i -D babel-plugin-add-module-exports  babel-plugin-transform-class-properties  babel-plugin-transform-object-rest-spread         

    npm i -D babel-preset-react    


   ## dva [api](https://dvajs.com/guide/)
    npm i -S dva 

   ## ant
    npm i -S antd-mobile  [api](https://mobile.ant.design/docs/react/use-with-create-react-app-cn)

   ## 移动端需要引入  fastclick
    npm i -S fastclick

   ## postcss
    npm i -D postcss-loader postcss-px2rem autoprefixer

   ## css
    npm i -D  url-loader raw-loader css-loader  style-loader
    npm i -D  sass sass-loader node-sass  
    npm i -D  stylus stylus-loader  
    npm i -D html-withimg-loader

   ## other plugs
    npm i -S react-iscroll 

    npm i -S crypto-js