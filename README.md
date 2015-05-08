# GSTV FE Coding Exercise

- [ ] System Requirements
- [ ] Current Tech Stack Outline
- [ ] Exercise Overview

## Jade
Our templates are all written in [Jade](http://jade-lang.com/) - the [syntax](http://naltatis.github.io/jade-syntax-docs/#basics) is easier to read - especially with Angular templates - and it reduces the likelihood of destroying a layout by simply not including a closing tag.

While Jade does not require a div tag prior to a class or ID declaration we add the div tag for the sake of clarity.

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
We rely on Node Sass to compile our stylesheets because of its speed. However, because there is not currently feature parity between Ruby Sass and LibSass so not all documented features are supported. Hugo Giraudel's [Sass Compatibility](http://sass-compatibility.github.io/) project is the best way to identify these differences.

### Sass Standards
We loosely follow Hugo Giraudel's [Sass Guidelines](http://sass-guidelin.es/) - particularly his thoughts on code clarity and avoiding [nesting selectors](http://sass-guidelin.es/#selector-nesting) unless absolutely necessary.

### Class Naming Conventions
Our styles are written using [OOCSS](http://appendto.com/2014/04/oocss/) principles specifically using  [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) methodology. This promotes a separation of content from context leading to highly reusable styles.

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
  img.media__img--rev(src='logo.png" alt='Foo Corp logo')
    div.media__body
      h3.alpha Welcome to Foo Corp
      p.lede Foo Corp is the best, seriously!
```

## Version Control
### GitFlow and GithubFlow
We use [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow/) as a way to build quality control in to our development, QA and deployment process.

For this exercise we are asking that you use a modified [Github Flow](https://guides.github.com/introduction/flow/) or sometimes referred to as a [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) methodology instead of GitFlow - conceptually GitFlow and Github flow are similar.

Please fork our angular-coding-exercise and use a feature branch workflow while developing your functionality. When you are ready to submit your work make a pull request against our angular-coding-exercise repository.
