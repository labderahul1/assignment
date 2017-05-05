"use strict";
var expect = require('chai').expect;
var assert = require('chai').assert;

const { rowInterval } = require('../site/public/js/row_interval.js');

const sObject = { eurjpy: [122.20621554852096, 125.65290308291993] }
const sIntervals = { eurjpy: 0 }

describe('Each row Interval test case for function', function() {
    describe('rowInterval()', function() {
        it('should return sIntervals object', function() {
          expect(rowInterval(sObject, sIntervals)).to.deep.equal({ eurjpy: 1 });
        });
    });
});
