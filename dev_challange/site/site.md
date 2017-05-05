### Sort Table and Sparkline Dev Challenge

This module contains a development challenge for Sort Table and Sparkline.

### Node modules
Chai and Mocha node modules installed for testing

Test directory have test files below:
  - row_interval.js
### Command to run test
    npm test


##### Modularize each function should reside in separate folder below are :

- ##### main.js
  In main.js the this.client.subscribe method have callback which return updated object after every 1 secound and Instantiate views and controllers

  ## Model
  - ##### model.js
  In Model set the data updated object.filter them accordingly with observer methos.

  ## Views
  - ##### table_view.js
   - In this view it display the sorted table with last row as sparkline and value for each row except sparkline will display till 8 decimal point.

   - sparlines will display for each row if each row  sparline is empty it will not show any sparkline and if only one value in array it will show dot.

  ## Controllers
  - ##### table_controller.js
  In table controller will update table view whenever object change and notify method call respective method.

  ## public/js
    - ##### row_interval.js
  It will return each intervals objects.

  - ##### sparkline_generator.js
It will generate sparkline and reset sparkline every 30 sec.
