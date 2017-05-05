/**
 * Modal .
 *
 * @constructor
 * @this {Model}
 * @param
 */
// const { rowInterval } = require('../public/js/row_interval.js');

class Model {
  constructor(){
    this.dataObj = {};
    this.listeners = [];
    this.sGenerator = [];
  }
  /**
 * Creates a setData for Model
 * @param {obj} set dataObj and sparkLineObj
 */
  setData(jData) {
    this.notifyAllObservers(jData);
  }

  // Notifies all observers
  notifyAllObservers(jData){
    let i;
    for(i = 0; i < this.listeners.length; i++){
        this.listeners[i].notify(jData, this.listeners[i]);
    }
  }

  // Requires to register all observers
  addObserver(listener){
      this.listeners.push(listener);
  };
}

exports.model = new Model();
