'use strict';

export default function (string) {
    if(string.indexOf('-') === -1) {
      return true;
    } else {
      return false;
    }
}
