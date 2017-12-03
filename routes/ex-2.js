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
      "name":{"type":"string"},
      "street_address": {"type": "string"},
      "post_code": {"type": "string"},
      "city": {"type": "string"}
    },
    "required": ["name","street_address", "city", "post_code"]
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
      description: 'Bei Online-Einkäufen kann üblicherweise eine Lieferadresse angegeben werden, die von der Rechnungsadresse ' +
      'abweicht. Dementsprechend definiert das vorliegende Schema eine Rechnungs- und eine Lieferadresse. Definiere ein ' +
      'passendes Json-Objekt, welches sowohl eine Rechnungs- als auch eine Lieferadresse enthält. Auf der linken Seite ' +
      'siehst du das eigentliche Schema, rechts die referenzierte Adresse.',
      schema: schema,
      schemaRefs: schemaRefs,
      schemaFormatted: schemaFormatted
    });
});

module.exports = router;
