---
layout: default
title: jQuery DOM Elements Creator | jquery-domec | RaYell's GitHub
---

[![Build Status](https://travis-ci.org/RaYell/jquery-domec.svg?branch=master)](https://travis-ci.org/RaYell/jquery-domec)
[![Coverage Status](https://coveralls.io/repos/RaYell/jquery-domec/badge.png?branch=master)](https://coveralls.io/r/RaYell/jquery-domec?branch=master)

# Requirements

jQuery library is required to use this extension. It can be downloaded from [jQuery Web Page](http://jquery.com).

# Setup

Install the library using Bower

{% highlight bash %}
bower install jquery-domec --save
{% endhighlight %}

Import plugin file after importing the jQuery library.

{% highlight html %}
<script src="bower_components/jquery-domec/dist/jquery-domec.min.js"></script>
{% endhighlight %}


# Syntax
{% highlight js %}
$.create(name[, options]);
{% endhighlight %}

## Parameters
* `name` (`string`) -  name of the element to create
* `options` (`object`) - element options, default: `{}`

## Options
* `attributes` (`object`) - element properties to be set, default: `{}`
* `events` (`object`) - event handlers to be bind with created element, object keys should be strings matching event names and values should be valid event handlers (functions), default: `{}`
* `children` (`string|array`) - child elements (could also contain text value), passed value will be cast to `string` type if it's not of `object` type, default: `''`
* `root` (`object`) - document root element on which new DOM elements should be created, i.e. when the site is using iFrames DOM elements must be created using iFrame's document object if they are to be used inside an `iframe`, default: `document`

# Examples
## #1 Basic example
{% highlight js %}
$.create('div', {attributes: {id: 'myId'}, children: 'myText'}).appendTo('#myElem');
{% endhighlight %}

Create new `<div>` element with `myId` id value and `myText` text and append it to `#myElem` element.

## #2 iFrame example
{% highlight js %}
$.create('div', {attributes: {id: 'myId'}, children: 'myText', root: $('#myIFrame').get(0).contentDocument});
{% endhighlight %}

Create new `<div>` element with `myId` id value and `myText` text on a iFrame with `myIFrame` id.

## #3 Event handler example
{% highlight js %}
function clickEventHandler() {
    alert('test');
}
$.create('div', {attributes: {id: 'myId'}, events: {click: clickEventHandler}});
{% endhighlight %}

Create new `<div>` element with `myId` id value and bind click event handler `clickEventHandler` to it.

# Links
* [Incompatible Changes](https://github.com/RaYell/jquery-domec/wiki/Incompatible-Changes)
* [Changelog](https://github.com/RaYell/jquery-domec/wiki/Changelog)