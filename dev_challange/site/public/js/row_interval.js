/**
* rowInterval.
* @param sObject, sInterval - get sparkline objects and interval for each row
* @return {object} return the sIntervals.
*/

function rowInterval(sObject, sIntervals) {
  for(var i = 0;i<Object.keys(sObject).length;i++) {
    const inArray = Object.keys(sIntervals).indexOf(Object.keys(sObject)[i]);
    if(inArray !== -1) {
      sIntervals[Object.keys(sObject)[i]] = sIntervals[Object.keys(sObject)[i]] + 1;
    } else {
      sIntervals = Object.assign({}, sIntervals, {
        [Object.keys(sObject)[i]]: 0
      });
    }
  }
  return sIntervals;
}

exports.rowInterval = rowInterval;
