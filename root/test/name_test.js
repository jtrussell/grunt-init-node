/*global describe, beforeEach, it */
'use strict';

var {%= js_test_safe_name %} = require('../lib/{%= name %}.js')
  , expect = require('chai').expect;

/*
 * http://chaijs.com/api/bdd/
 */

describe('awesome', function() {
  
  beforeEach(function() {
    // setup here
  });

  describe('no args', function() {
    it('should be awesome', function() {
      expect({%= js_test_safe_name %}.awesome()).to.equal('awesome');
    });
  });

});
