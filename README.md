# Parse Muscles

If a muscle, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-muscles

## Usage

Example:

```javascript
await parse('bulbospongiosus and coracobrachialis are not some pokémon or dinosaur names')
```

Output:

```json
[
  {
    "ngram": "bulbospongiosus",
    "value": {
      "id": "bulbospongiosus",
      "label": {
        "en": "bulbospongiosus"
      },
      "description": {
        "en": "bulbospongiosus"
      },
      "category": "muscle",
      "aliases": {
        "en": [
          "bulbospongiosus",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 0,
      "begin": 0,
      "end": 15
    }
  }, {
    "ngram": "coracobrachialis",
    "value": {
      "id": "coracobrachialis",
      "label": {
        "en": "coracobrachialis"
      },
      "description": {
        "en": "coracobrachialis"
      },
      "category": "muscle",
      "aliases": {
        "en": [
          "coracobrachialis",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 2,
      "begin": 20,
      "end": 36
    }
  }
]
```
