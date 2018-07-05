# TestAngular6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## ==>
npm install -g @angular/cli

ng new test-ng-pwa

ng serve --open

ng add @angular/pwa


因为@angular/cli内置的Server在–prod 编译的时候还不支持service-worker，所以上面装了一个第三方的lite-server，它的官方文档在这里：https://npmjs.com/package/lite-server ，请执行：

npm install lite-server --save-dev
npm install lite-server --global