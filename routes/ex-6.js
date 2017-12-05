var express = require('express');
var router = express.Router();

var schemaRefs = {
  "cd":{
    "type":"object",
    "properties": {
      "name": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": ["string"]
          }
        },
        "required":["type"]
      },
      "release_year" : {
        "type":"object",
        "properties": {
          "type": {
            "type": "string",
            "enum": ["integer", "number"]
          }
        },
        "required":["type"]
      },
      "label": {
        "type":"object",
        "properties":{
          "type":{
            "type":"string",
            "enum":["string"]
          }
        },
        "required":["type"]
      }
    },
    "required":["name","release_year","label"]
  },
  "artist": {
    "type": "object",
    "properties": {
      "name": {
        "type": "object",
        "properties":{
          "type":{
            "type":"string",
            "enum": ["string"]
          }
        },
        "required":["type"]
      },

      "founded_in": {
        "type":"object",
        "properties":{
          "type:":{
            "type":"string",
            "enum":["number","integer"]
          }
        },
        "required":["type"]
      },
      "biography":{
        "type":"object",
        "properties":{
          "type":{
            "type:":"string",
            "enum":["string"]
          }
        },
        "required":["type"]
      }
    },
    "required":["name","founded_in","biography"]
  },
  "definitions":{
    "type":"object",
    "properties":{
      "cd":{
        "$ref":"cd"
      }
    },
    "required":["cd"]
}
};

var schema = {
  "type":"object",
  "properties" : {
    "$schema": {
      "type":"string"
    },
    "id":{
      "type":"string"
    },
    "title":{
      "type":"string"
    },
    "type":{
      "type":"string"
    },
    "definitions":{
      "$ref": "definitions"
    },
    "properties": { "$ref": "artist" }
  },
  "required":["$schema","$id","title","type","definitions","properties"]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ex-6',
    { title: 'Aufgabe 6',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
      'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ' +
      'et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ' +
      'dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ' +
      'invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      schema:schema,
      schemaRefs:schemaRefs
    });
});

module.exports = router;
