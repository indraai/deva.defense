// Copyright (c)2025 Quinn Michaels
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
