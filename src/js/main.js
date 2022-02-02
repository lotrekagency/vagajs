import {optionsFade} from './animations.js';
import {observingScroll} from './observer.js';
import styles from './../scss/main.scss';

export function start (threshold = 0.25) {
  observingScroll(optionsFade,threshold);
}