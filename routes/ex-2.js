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
      "street_address": {"type": "string"},
      "city": {"type": "string"},
      "state": {"type": "string"}
    },
    "required": ["street_address", "city", "state"]
  }
};

var schema = {
  "type": "object",
  "properties": {
    "billing_address": {"$ref": "address"},
    "shipping_address": {"$ref": "address"}
  },
  "required": ["billing_address", "shipping_address"]
};

var schemaFormatted = [];
schemaFormatted.push(jsonFormat(schema, jsonFormatConfig));
schemaFormatted.push(jsonFormat(schemaRefs, jsonFormatConfig));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('ex-2',
    {
      title: 'Aufgabe 2',
      description: '',
      schema: schema,
      schemaRefs: schemaRefs,
      schemaFormatted: schemaFormatted
    });
});

module.exports = router;
