import {options} from './animations.js';
import {observingScroll} from './observer.js';
import styles from './../scss/main.scss';

export function start (customOptions) {

  if(customOptions !== undefined) {
    const finalOptions = Object.assign(options, customOptions);

    console.log(finalOptions)

    observingScroll(finalOptions);
  } else {

    console.log(options)

    observingScroll(options);
  }
}