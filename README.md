# Bank Server Side
A REST service that can fetch bank details, using the data given in the API’s query parameters.

## Tech Stack
> * Nodejs
> * PostgreSQL 

## API
1. Autocomplete API to return possible matches based on the branch name **ordered by IFSC code**.
    *  **Endpoint: /api/branches/autocomplete?q=<>**
    * Example: /api/branches/autocomplete?q=**MUMBAI**

   ```json
               [
          {
            "ifsc": "ABNA0100310",
            "bank_id": "110",
            "branch": "BRADY HOUSE  MUMBAI",
            "address": "BRADY HOUSE,14 VEER NARIMAN ROAD,FORT, MUMBAI - 400023",
            "city": "MUMBAI",
            "district": "GREATER BOMBAY",
            "state": "MAHARASHTRA",
            "bank_name": "THE ROYAL BANK OF SCOTLAND N V"
          },
          {
            "ifsc": "ABNA0100335",
            "bank_id": "110",
            "branch": "JUHU  MUMBAI",
            "address": "GROUND & FIRST FLOOR, DURU HOUSE, JUHU TARA ROAD, JUHU, MUMBAI - 400049",
            "city": "MUMBAI",
            "district": "GREATER BOMBAY",
            "state": "MAHARASHTRA",
            "bank_name": "THE ROYAL BANK OF SCOTLAND N V"
          },
          {
            "ifsc": "ABNA0200001",
            "bank_id": "110",
            "branch": "SAKHAR BHAVAN  MUMBAI",
            "address": "SAKHAR BHAVAN, NARIMAN POINT,MUMBAI - 400021.",
            "city": "MUMBAI",
            "district": "GREATER BOMBAY",
            "state": "MAHARASHTRA",
            "bank_name": "THE ROYAL BANK OF SCOTLAND N V"
          },
          {
            "ifsc": "ABNA0NEFT02",
            "bank_id": "110",
            "branch": "LOWER PAREL WEST MUMBAI",
            "address": "ABN AMRO BANK,414 EMPIRE COMPLEX,SENAPATI BAPAT MARG LOWER PAREL WEST MUMBAI 400013",
            "city": "MUMBAI",
            "district": "MUMBAI",
            "state": "MAHARASHTRA",
            "bank_name": "THE ROYAL BANK OF SCOTLAND N V"
          },
          {
            "ifsc": "ALLA0210182",
            "bank_id": "11",
            "branch": "FORT BRANCH  MUMBAI",
            "address": "37, MUMBAI SAMACHAR MARG, FORT, MUMBAI",
            "city": "MUMBAI",
            "district": "GREATER MUMBAI",
            "state": "MAHARASHTRA",
            "bank_name": "ALLAHABAD BANK"
          }
        ]
      ```
   
2. Search API to return possible matches across all columns and all rows, **ordered by IFSC code** (ascending order).
    * **Endpoint: /api/branches?q=<>**
    * Example: /api/branches?q=**Bangalore**

```json
[
  {
    "ifsc": "ABNA0100318",
    "bank_id": "110",
    "branch": "BANGALORE",
    "address": "PRESTIGE TOWERS', GROUND FLOOR, 99 & 100, RESIDENCY ROAD, BANGALORE 560 025.",
    "city": "BANGALORE",
    "district": "BANGALORE URBAN",
    "state": "KARNATAKA",
    "bank_name": "THE ROYAL BANK OF SCOTLAND N V"
  },
  {
    "ifsc": "ADCB0000002",
    "bank_id": "143",
    "branch": "BANGALORE",
    "address": "CITI CENTRE, 28, CHURCH STREET, OFF M. G. ROAD BANGALORE 560001",
    "city": "BANGALORE",
    "district": "BANGALORE URBAN",
    "state": "KARNATAKA",
    "bank_name": "ABU DHABI COMMERCIAL BANK"
  },
  {
    "ifsc": "ALLA0210217",
    "bank_id": "11",
    "branch": "K. G. ROAD",
    "address": "NO. 2, FKCCI BUILDING , K G ROAD , BANGALORE",
    "city": "BANGALORE",
    "district": "BANGALORE URBAN",
    "state": "KARNATAKA",
    "bank_name": "ALLAHABAD BANK"
  }
]
```

## Installation:
- clone the repo and `cd` inside
- Run `npm install`
- Run `nodemon index.js`