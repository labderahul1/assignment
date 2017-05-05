/**
 * Controller .
 *
 * @constructor
 * @this {Controller}
 * @param model - instanceof model, view - instanceof table view
 */

class TableController {
  constructor(model, view){
    this.model = model;
    this.view = view;
    this.model.addObserver(this);
  }
  // When notifies by the modal send the request of update
  notify(jData) {
    this.model.dataObj = jData;
    this.view.renderTable();
  }
}

exports.TableController = TableController;
