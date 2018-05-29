const parse = require('./index')
const testData = [{
  input: "In humans, snarling uses the levator labii superioris alaeque nasi muscle.",
  expected: [{
    "ngram": "levator labii superioris alaeque nasi",
    "value": {
      "id": "levator-labii-superioris-alaeque-nasi",
      "label": {
        "en": "levator labii superioris alaeque nasi"
      },
      "description": {
        "en": "levator labii superioris alaeque nasi"
      },
      "category": "muscle",
      "aliases": {
        "en": [
          "levator labii superioris alaeque nasi",
        ],
      }
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 6,
      "begin": 29,
      "end": 66
    }
  }]
}, {
  input: "bulbospongiosus and coracobrachialis are not some pokémon or dinosaur names",
  expected: [{
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
  }]
}]

test('extract muscles', () => Promise.all(
  testData.map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))