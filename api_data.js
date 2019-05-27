define({ "api": [
  {
    "type": "post",
    "url": "/waybill",
    "title": "Créer une lettre de voiture",
    "version": "1.0.0",
    "name": "CreateWaybill",
    "group": "Waybill",
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Le code de la lettre de voiture</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>L'email de le proprietaire de la lettre de voiture</p>"
          },
          {
            "group": "Created 201",
            "type": "OrderInfo",
            "optional": false,
            "field": "order",
            "description": "<p>Les informations préalables de la lettre de voiture.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/public/public-waybill.route.ts",
    "groupTitle": "Waybill"
  },
  {
    "type": "get",
    "url": "/waybill/:id",
    "title": "Consulter une lettre de voiture",
    "version": "1.0.0",
    "name": "GetWaybill",
    "group": "Waybill",
    "description": "<p>Permet de recuperer une lettre de voiture existante. <br/> L'utilisateur peut seulement consulter les lettres de voiture crées avec sa clé.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Le code de la lettre de voiture</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Le code de la lettre de voiture</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>L'email de le proprietaire de la lettre de voiture</p>"
          },
          {
            "group": "Success 200",
            "type": "OrderInfo",
            "optional": false,
            "field": "order",
            "description": "<p>Les informations préalables de la lettre de voiture.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"LVDEMO\",\n  \"owner\": \"email@example.com\",\n  \"order: {\n       \"customer\": {},\n       \"sender\": {},\n       \"receiver\": {},\n       \"middleman\": {\n       \"isBroker\": true\n    },\n    \"transporter\": {},\n    \"ship\": {},\n    \"originInfo\": {\n    },\n    \"destinationInfo\": {\n    },\n    \"merchandise\": {\n    },\n   \"sentAt\": \"2019-05-27T15:15:00.491Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/public/public-waybill.route.ts",
    "groupTitle": "Waybill"
  },
  {
    "type": "put",
    "url": "/waybill/:id/order-info",
    "title": "Modifier les informations d'une lettre de voiture existante.",
    "version": "1.0.0",
    "name": "UpdateWaybillOrderInfo",
    "group": "Waybill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Le code de la lettre de voiture</p>"
          },
          {
            "group": "Parameter",
            "type": "OrderInfo",
            "optional": false,
            "field": "order",
            "description": "<p>informations préalables de la lettre de voiture</p>"
          }
        ]
      }
    },
    "filename": "src/routes/public/public-waybill.route.ts",
    "groupTitle": "Waybill"
  }
] });
