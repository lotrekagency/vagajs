import {options} from './animations.js';
import {observingScroll} from './observer.js';
import styles from './../scss/vaga.scss';

export function start (customOptions) {

  if(customOptions !== undefined) {
    const finalOptions = Object.assign(options, customOptions);
    observingScroll(finalOptions);
  } else {
    observingScroll(options);
  }
}