'user strict';

const mocha = require('mocha');
const should = require('should');
const supertest = require('supertest');
const app = require('../server.js');

describe('GET /', function(){
  var route;
  beforeEach(function() {
    route = supertest(app)
      .get('/');
  });

  it('returns an html format', function(done){
    route.expect('Content-Type', /html/, done);
  });

  it('returns a body with the word "annihilation" in it', function(done){
    route.expect(/annihilation/i, done);
  });
});
