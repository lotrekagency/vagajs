# VagaJS

**WIP~**

A simple and straightforward animation library to enable CSS based animations on scroll, as soon as the elements become visible by the user.

### https://lotrekagency.github.io/vagajs/

---
## Table of contents

[Getting started](#getting-started)

[Documentation](#documentation)

[Built with and how does it work](#built-with-and-how-does-it-work)

[Options and how to customize them](#options-and-how-to-customize-them)

[Browser support](#browser-support)

[Copyright and license](#copyright-and-license)

[TODO](#todo)

---
### Getting started

Install VagaJS via a packet manager, such as npm:

`npm install vagajs`

Then import it in your javascript build:

`import * as vaga from "vagajs/build/vaga.min.js";`

and the CSS aswell:

`import "vagajs/build/vaga.min.css"; //or add it in your CSS workflow`

Now to run it simply start VagaJS somewhere in your javascript build:

`vaga.start();`

VagaJS has a set of default options to make it work right off the bat, however you can customize the options easily, more info in the documentation section.

---
### Documentation

VagaJS can work by simply adding its CSS classes on HTML elements once you've installed, imported it in your web project and started it.

Let's say you want to play a fade in animation on an element, here's how it works:

`<div class="vaga-fade-in" style="background:lime;">Hello there!</div>`

Here's how the VagaJS CSS classes work:

`.vaga-<property>-<direction>`

*property*: there are currently 3 properties, which are *fade*, *move* and *opacity*.

*direction*: there are 4 directions, which are *in*, *out*, *left* and *right*. 
(The opacity property has no directions!)

---
#### Animation classes

**fade-in**: `.vaga-fade-in`

**fade-out**: `.vaga-fade-out`

**fade-left**: `.vaga-fade-left`

**fade-right**: `.vaga-fade-right`


**move-in**: `.vaga-move-in`

**move-out**: `.vaga-move-out`

**move-left**: `.vaga-move-left`

**move-right**: `.vaga-move-right`


**opacity**: `.vaga-opacity`

---
#### Custom length/size

Both *fade* and *fade* animations have a default transform length of 40px (20px on mobile), to customize this option you need to add a *dataset*, with *vsize* as the datataset property and an integer number as the value.

example: `<div class="vaga-move-right" data-vsize="60"></div>`

---
#### Responsive util classes

However you may want to have different animations on different viewports: that's why there are responsive utils in VagaJS.

Want to have a fade-in on an element when it's viewed in a mobile device and then replacing that animation with a fade-left when viewed on bigger viewports?

`<div class="vaga-fade-in vaga-fade-left--md" style="background:lime;">Fade-in on mobile, fade-left on tablet and desktop</div>`

These responsive util classes are mobile-first and work as follow:

`.vaga-<property>-<direction>--<breakpoint>`

Breakpoints are *md* (min-width: 992px) and *lg* (min-width: 1400px), here's another example:

`.vaga-move-right--lg`

---
#### Unload util

To unload animations after the element is no longer visible.

`.vaga-unload`

---
#### Delay util classes

Sometimes you want to have a bit of delay between animations, and for this issue VagaJS comes with a delay util:

`.vaga-delay-<value>`

This util will apply a delay based on its value, where the values are *1*, *2*, *3* and *4*.

`.vaga-delay-0-5` - will apply a delay of *duration* * 0.5. *duration* is an option, and its default is 0.375s, so this util will apply a delay of half of that value.

`.vaga-delay-1` - will apply a delay of *duration* * 1 (which would be 0.375s).

`.vaga-delay-1-5` - will apply a delay of *duration* * 1.5 (which would be 0.375s * 1.5).

`.vaga-delay-2` - will apply a delay of *duration* * 2 (which would be 0.375s * 2).

And so on, up to `.vaga-delay-6`, which is *duration* * 6.

---
#### Various util classes

`.vaga-will` - applies will-change: transform; for smoother animations, [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change).

`.vaga-block` - trick to have smooth animations and transitions only when the window is loaded, add this to the parent/grandparent element such as the body.

---
### Built with and how does it work

This library is built on [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), which detects when an element is being viewed by the user. 

By adding the VagaJS classes to your HTML elements, you assign an observer to them, detecting when they are visible, enabling and kicking off the animations.

---
### Options and how to customize them

VagaJS has a set of default options, which are the following:

`root` - default value is *null*, this is an [IntersectionObserver's parameter](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#parameters).

`rootMargin` - default value is *0px*, this is an [IntersectionObserver's parameter](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#parameters).

`threshold` - default value is *0.25*, this is an [IntersectionObserver's parameter](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#parameters).

`targets` - default value is `document.querySelectorAll("[class*='vaga-'")`, this is an [IntersectionObserver's parameter](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#parameters).

`duration` - default is *0.375s*, CSS transition-duration.

`timingFunction` - default is *ease-in*, CSS transition-timing-function (can accept cubic-bezier() functions).

To customize these options, simply do like this:

`var options = {
  threshold: 0.15,
  duration: 0.75,
  timingFunction: "linear"
}`

`vaga.start(options)`

---
### Browser support

VagaJS works on the latest versions of Chrome, Firefox, Edge and Safari.

---
### Copyright and license

lotrekagency/vagajs is licensed under the MIT License.

---
### TODO

Check the repo's issues tab