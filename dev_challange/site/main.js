/**
 * Main
 * @constructor
 * @this {Main}
 */

// Importing the modules
const { model } = require('./model/model.js');
const { TableView } = require('./views/table_view.js');
const { TableController } = require('./controllers/table_controller.js');
// const { SparklineController } = require('./controllers/sparkline_controller.js');
// const { Sparklines } = require('./views/sparklines.js');

class Main {
  /**
 * initialize of Main.
 * @param client - which have Stomp refrence
 * @method initialize - This method have subcribe method call from Stomp
 */
  initialize(client) {
    const subscription = client.subscribe("/fx/prices", function(message){
      const jData = JSON.parse(message.body);
      model.setData(jData);
    });

    const tableView = new TableView(model); // Instantiate TableView
    const tableController = new TableController(model, tableView); // Instantiate TableController
    // const sparklineController = new SparklineController(model, sparkline); // Instantiate sparklineCcontroller
  }
}

exports.main = new Main();
