# GSTV FE Coding Exercise
[![Build Status](https://travis-ci.org/GasStationTV/angular-coding-exercise.svg?branch=feature%2Ftravis-ci-integration)](https://travis-ci.org/GasStationTV/angular-coding-exercise)

1. [Exercise Overview](#exercise-overview)
1. [System Requirements](#system-requirements)
1. [Getting Started](#getting-started)
1. [Version Control](#version-control)
1. [Build System](#build-system)
1. [Application Architecture](#application-architecture)
1. [Jade](#jade)
1. [Sass](#sass)
1. [JavaScript](#javascript)
1. [Troubleshooting](#troubleshooting)

## Exercise Overview
Build us anything you want using the Marvel Comics API. Seriously, that is the only direction. However, we do have a few guidelines around submitting your assignment and some suggestions so continue reading.

## System Requirements
* Node.js `^0.10.36` _or_ IO.js `^2.0.1`

## Getting Started
Sign up for a [Marvel API Key](https://developer.marvel.com/pleasesignin) to get a public key. You only need the private key if you plan to proxy requests from a custom server.

You'll then need to add `localhost` to the list of authorized referrers in your Marvel developer account. To do this, head to `https://developer.marvel.com/account`. Here you'll see your public and private keys, rate limit, and authorized referrers.

<p align="center">
  <a href="https://developer.marvel.com/account">
    <img src="https://github.com/GasStationTV/angular-coding-exercise/blob/master/docs/images/authorized-referrers.png" style="width:75%;">
  </a>
</p>

Now for the actual application. We've created a sample service in the Angular application - `~/app/services/marvel` - that will automatically handle requests to the Marvel API, but it needs access to your public authentication keys. With your recently-acquired keys, create a file `marvel.auth.js` in `~/app/config/marvel.auth.js` and insert the following:

```js
const AUTH_KEYS = new Map();

AUTH_KEYS.set('public', '<YOUR_PUBLIC_KEY_HERE>');

export default AUTH_KEYS;
```

**Note:** This file is .gitignored so you don't have to worry about accidentally committing it.

Next, install the project dependencies with npm and bower to get the sandbox running. You can either run our `npm run setup` wrapper or do this manually with:

``` shell
npm install
```

Once these are complete, you should have everything you need to run the application. Run `npm run dev` to spin up the Webpack development server at `http://localhost:3000`. We recommend that you check out the rest of the documentation before diving into the exercise.

## Version Control
### GitFlow and GithubFlow
We use [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow/) on a daily basis - this allows us to build quality control into our development, QA and deployment process.

We are asking that you use a modified [Github Flow](https://guides.github.com/introduction/flow/) - sometimes referred to as a [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) - methodology instead of GitFlow. Conceptually, GitFlow and Github flow are similar.

Please fork our repository and use a feature branch workflow while developing your functionality. When you are ready to submit your work make a [pull request against our repository](https://help.github.com/articles/using-pull-requests/).

## Build System
We choose [Webpack](http://webpack.github.io/) as the build system because it provides a lot of built-in functionality that would require more boilerplate with something like [Browserify](http://browserify.org/). Some key features we use include:

* **Bundle splitting.** Vendor dependencies are compiled to a separate file.
* **Non-JS imports.** You can directly require `.jade` or `.scss`!
* **Live reloading with hot module replacement.** Webpack enables watchers for all file types so you don't have to go through the extra effort yourself.
* **Convenient development server**. This also provided an iframe option - known as "inlining" - that displays the status of your bundle directly in the browser.
* **Angular Annotate ([ng-annotate](https://github.com/olov/ng-annotate)).** Use `/* @ngInject */` to enable automatic injection annotations.
* **ES6 support.** Thanks Babel.

So how do you use it? While you can directly run it from the CLI via `webpack`, it's recommended to use one of our npm scripts:

#### `npm run build`
Runs the webpack build system with your current node environment. This will compile your application and write it to disk (into `~/dist`).

#### `npm run build:prod`
Runs the production webpack build with `NODE_ENV=production`. This will enable functionality such as minification and dead/unused code removal.

#### `npm run dev`
Runs the webpack development server at `http://localhost:3000` (inlined at `http://localhost:3000/webpack-dev-server/`). The application is served from memory and file watchers are automatically enabled for livereload.

**Note**: If you don't know which of these you should be using, it's probably `npm run dev`.

#### `npm run dev:quiet`
Same as `npm run dev`, but hides verbose debugging information.

## Application Structure
Our goal is to give you a working application out of the box without restricting you to a specific architecture. However, there are some key design decisions to note:

* The Webpack development server will point to `~/app/index.html`. This is compiled on the fly - or to disk if you use the non-development build script. This is important because bundled files append a dynamic query string hash for cache busting.
* The application entry point is in `~/app/index.js`, and contains all core vendor dependencies. Please reference that file for additional documentation.

## Jade
Our templates are all written in [Jade](http://jade-lang.com/) - we find the [syntax](http://naltatis.github.io/jade-syntax-docs/#basics) easier to read, especially with Angular templates. We would rather be eating obscene amounts of [Chicken Shack](http://www.chickenshack.com/) than hunting down a missing closing tag. That is why Jade is our friend.

While Jade does not require a `div` prior to a class or ID declaration we add the `div` for the sake of clarity.

**Original Jade Template**
``` jade
doctype html
html
  head
    title my jade template
  body
    h1 Hello #{name}
    div#content
      div.block
        input#bar.foo1.foo2
```

**Compiled HTML**
``` html
<!DOCTYPE html>
<html>
  <head>
    <title>my jade template</title>
  </head>
  <body>
    <h1>Hello Bob</h1>
    <div id="content">
      <div class="block">
        <input id="bar" class="foo1 foo2">
      </div>
    </div>
  </body>
</html>
```

## Sass
### On Node Sass
We rely on Node Sass to compile our stylesheets because of its speed. However, because there is not currently feature parity between Ruby Sass and LibSass not all documented features are supported. Hugo Giraudel's [Sass Compatibility](http://sass-compatibility.github.io/) project is the best way to identify these differences. @acolson spends way too much time following this.

### Sass Standards
We loosely follow Hugo Giraudel's [Sass Guidelines](http://sass-guidelin.es/) - particularly his thoughts on code clarity and avoiding [nesting selectors](http://sass-guidelin.es/#selector-nesting) unless absolutely necessary.

### Class Naming Conventions
Our styles are written using [OOCSS](http://appendto.com/2014/04/oocss/) principles - specifically   [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) methodology. This promotes a separation of content from context leading to highly reusable styles and hopefully prevents us from using ```!important``` which is the work of the devil.

**BEM naming conventions**
``` sass
.block {}
.block__element {}
.block__element--modifier {}
.block--modifier {}

.media {}
.media__img {}
.media__img--rev {}
.media__body {}
```

**BEM naming conventions used in markup**
``` jade
div.media
  img.media__img--rev(src='logo.png' alt='Foo Corp logo')
    div.media__body
      h3.alpha Welcome to Foo Corp
      p.lede Foo Corp is the best, seriously!
```

## JavaScript
### Standards
We have a work in progress [style guide](https://github.com/davezuko/gstv-javascript-standards) that you can refer to. We don't expect you to strictly adhere to these standards, but they may help provide insight into how our JavaScript is generally structured.

The Webpack build system will run [JSHint](http://jshint.com/docs/) against your code before it's compiled. This will help spot common syntactical errors and will also enforce certain code standards - i.e., it will spot unused variables, missed semi-colons, and more. You should only commit your code once all lint errors have been resolved.

## Troubleshooting
### Build error: `libsass` bindings not found
This error is generally caused by an out-of date (or non-existent) node-sass library. Check your global node-sass version if you already have it installed and make sure it satisfies version `^3.1.0`. If your global version meets this requirement and you're still having issues, try to install the package locally with `npm install node-sass`.

### Cannot find inlined Webpack development server
In order to access the inlined version of the development server, make sure you're including the trailing slash after "webpack-dev-server" in the url: `http://localhost:3000/webpack-dev-server/`.

### Build error: Error in ./app/services/marvel/interceptor.js
This is a compile time error, and is most likely because you didn't create a `marvel.auth.js` file in `~/app/config` or named it incorrectly. Please refer to [Getting Started](#getting-started) for more information on what to include in this file.
