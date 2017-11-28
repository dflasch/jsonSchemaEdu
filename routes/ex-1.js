var express = require('express');
var router = express.Router();
var jsonFormat = require('json-format');
var jsonFormatConfig = {
  type: 'space',
  size: 2
};

var schema = {
  "title": "Person",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "age": {
      "description": "Age in years",
      "type": "integer",
      "minimum": 0
    },
    "sex": {
      "type": "string",
      "enum": ["male", "female"]
    }
  },
  "required": ["firstName", "lastName","age","sex"]
};

var schemaFormatted = [];
schemaFormatted.push(jsonFormat(schema, jsonFormatConfig));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('ex-1',
    {
      title: 'Aufgabe 1',
      description: 'Das folgende Schema wird verwendet, um den Datenssatz für eine Person zu validieren. Definiere ein ' +
      'hierzu passendes Json-Objekt.',
      schema: schema,
      schemaFormatted: schemaFormatted
    });
});

module.exports = router;
