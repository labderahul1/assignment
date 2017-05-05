/**
 * SparklineGenerator .
 *
 * @constructor
 * @this {SparklineGenerator}
 * @param model - instanceof model
 */

class SparklineGenerator {
  constructor(domElementId, model) {
    this.model = model;
    this.domElementId = domElementId;
    this.persistArray = [];
    this.sparkline = null;
    this.model.addObserver(this);
    this.generate();
  }

  generate() {
    if(this.sparkline == null) {
      this.sparkline = new Sparkline(this.domElementId); // create instance of sparkline
    }
    this.drawSparkline();
  }

  drawSparkline(){
    this.sparkline.draw(this.persistArray); // draw sparkline with persistArray
  }

  // set Interval
  setIntervals(){
    const self = this;
    let intervalCounts = 0;
    this.interval = setInterval(function () {
      if(intervalCounts == 30){
        self.restartOnEvery30Sec();
        intervalCounts = 0;
        self.clearIntervals()
      } else {
        intervalCounts++;
      }
    }, 1000);
  }

  // Clear Interval
  clearIntervals(){
    clearInterval(this.interval);
  }

  restartOnEvery30Sec(){
    this.persistArray = [];
    this.generate();
  };

  // When notifies by the modal send the request of update
  notify(data) {
    if("spark_"+data.name == this.domElementId.id) {
      this.persistArray.push((data.bestBid + data.bestAsk) / 2);
      if(this.persistArray.length == 1) {
        this.setIntervals();
      }
    }
    this.drawSparkline();
  };
}

exports.SparklineGenerator = SparklineGenerator;
