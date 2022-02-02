import {optionsFade} from './animations.js';
import {observingScroll} from './observer.js';
import styles from './../scss/main.scss';

export function start (threshold = 0.25) {
  observingScroll(optionsFade,threshold);
}

/*
  export function start (threshold = 0.25, oggettoOpzioniNonObbligatorio) {
    if(oggettoOpzioniNonObbligatorio |== null) {
      opzioni = oggettoOpzioniNonObbligatorio
    } else {
      opzioni = optionsFade
    }
    
    observingScroll(optionsFade,threshold);
  }
*/