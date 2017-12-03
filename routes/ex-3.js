var express = require('express');
var router = express.Router();
var jsonFormat = require('json-format');
var jsonFormatConfig = {
  type: 'space',
  size: 2
};

var schemaRefs = {
  "address": {
    "type": "object",
    "properties": {
      "name": {"type":"string"},
      "street_address": {"type": "string"},
      "city": {"type": "string"},
      "post_code": {"type": "number"},
      "phone_number" : {"type":"number"}
    },
    "required": ["name","street_address", "city", "post_code"]
  }
};

var schema = {
  "type":"object",
  "allOf": [
    {"$ref": "address"},
    {
      "properties": {
        "type": {"enum": ["private", "business"]}
      }
    }
  ],
  "required":["type"]
};

var schemaFormatted = [];
schemaFormatted.push(jsonFormat(schema, jsonFormatConfig));
schemaFormatted.push(jsonFormat(schemaRefs, jsonFormatConfig));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('ex-3',
    {
      title: 'Aufgabe 3',
      description: 'Mit folgendem Schema kann ein Kontakt beschrieben werden. Ein Kontakt kann hierbei privat oder geschäftlich ' +
      'sein. Zu einem Kontakt muss der Name, die Adressdaten sowie die Art des Kontakts (privat/geschäftlich) angegeben werden. ' +
      'Schreibe ein hierzu passendes Json-Objekt.',
      schema: schema,
      schemaRefs: schemaRefs,
      schemaFormatted: schemaFormatted
    });
});

module.exports = router;
