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
    "gender": {
      "type": "string",
      "enum": ["male", "female"]
    }
  },
  "required": ["firstName", "lastName","age","gender"]
};

var schemaFormatted = [];
schemaFormatted.push(jsonFormat(schema, jsonFormatConfig));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('ex-1',
    {
      title: 'Aufgabe 1',
      description: 'Dieses Schema beschreibt eine Person. Eine Person wird durch die Felder Vorname, Nachname, Alter und ' +
      'Geschlecht beschrieben. Definiere ein hierzu passendes Json-Objekt. Sobald eine gültige Personenbeschreibung vorliegt, ' +
      'wird der Texteditor grün eingefärbt.',
      schema: schema,
      schemaFormatted: schemaFormatted
    });
});

module.exports = router;
