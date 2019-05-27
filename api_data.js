define({ "api": [
  {
    "type": "post",
    "url": "/waybill",
    "title": "create new waybill",
    "group": "Waybill",
    "name": "CreateWaybill",
    "version": "1.0.0",
    "filename": "src/routes/public/public-waybill.route.ts",
    "groupTitle": "Waybill"
  },
  {
    "type": "get",
    "url": "/waybill/:id",
    "title": "Get waybill",
    "group": "Waybill",
    "name": "GetWaybill",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>waybill id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Waybill",
            "optional": false,
            "field": "waybill",
            "description": "<p>the requested waybill</p>"
          }
        ]
      }
    },
    "filename": "src/routes/public/public-waybill.route.ts",
    "groupTitle": "Waybill"
  },
  {
    "type": "put",
    "url": "/waybill/:id/order-info",
    "title": "Modify existing waybill",
    "group": "Waybill",
    "name": "UpdateWaybillOrderInfo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>waybill id</p>"
          }
        ]
      }
    },
    "filename": "src/routes/public/public-waybill.route.ts",
    "groupTitle": "Waybill"
  }
] });
