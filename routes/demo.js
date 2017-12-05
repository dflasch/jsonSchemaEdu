var express = require('express');
var router = express.Router();
var jsonFormat = require('json-format');
var jsonFormatConfig = {
  type: 'space',
  size: 2
};

var schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Product",
  "description": "A product from a beverage store",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "volume": {
      "type": "number"
    },
    "price": {
      "type": "number",
      "exclusiveMinimum": 0
    }
  },
  "required": ["id", "name", "price"]
};

var schemaFormatted = jsonFormat(schema,jsonFormatConfig);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('demo',
    { title: 'Demo',
      description: 'Diese Aufgabe ist für die Demonstration des Tools gedacht. Das Ziel ist es, ein Json-Dokument zu erstellen, ' +
      'welches zu dem angegeben Schema passt. Das vorliegende Schema beschreibt ein Produkt aus einem Getränkemarkt. ' +
      'Die Pflichtfelder sind Id, Name und Preis, das (Inhalts-)Volumen hingegen ist optional.',
      schema:schema,
      schemaFormatted:schemaFormatted
    });
});

module.exports = router;
