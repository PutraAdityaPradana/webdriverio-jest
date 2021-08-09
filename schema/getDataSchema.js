export const getDataSchema = {
    "type": "array",
    "items": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "vehicle_class": {
            "type": "string"
          },
          "length": {
            "type": "string"
          },
          "pilot": {
            "type": "string"
          },
          "films": {
            "type": "array"
          },
          "url": {
            "type": "string"
          }
        },
        "additionalProperties": false,
        "required": [
          "id",
          "name",
          "description",
          "vehicle_class",
          "length",
          "pilot",
          "films",
          "url"
        ]
      },
    ]
  }
  