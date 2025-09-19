"use strict";
// ©2025 Quinn A Michaels; All rights reserved.  
// Legal Signature Required For Lawful Use.  
// Distributed under VLA:37362958274919455262 LICENSE.md

// Networks Deva test file

const {expect} = require('chai')
const DefenseDeva = require('./index.js');

describe(DefenseDeva.me.name, () => {
  beforeEach(() => {
    return DefenseDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(DefenseDeva).to.be.an('object');
    expect(DefenseDeva).to.have.property('agent');
    expect(DefenseDeva).to.have.property('vars');
    expect(DefenseDeva).to.have.property('listeners');
    expect(DefenseDeva).to.have.property('methods');
    expect(DefenseDeva).to.have.property('modules');
  });
})
