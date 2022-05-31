# griph-api

HOW TO RUN SERVER:

Pre-requisite

1. create .env file in the root folder.
2. Add the following environment variables:]
   ETHSCAN_TOKEN="AEFAZJQYPJPXWD3YU7U5D8Y5E7YTVR7JNU"
   PORT="8500"
3. ETHPLORER_TOKEN="EK-fa7oj-AETzsf3-LJUmS"
4. NAME="qxvvyneprkgenr"
PASSWORD="73ad4ba03e9d044c937c5c4d439041197e993b3598332b16faa9209fc89f67c3"
DATABASE="dflqt6263kfn9h"
HOST="ec2-3-229-252-6.compute-1.amazonaws.com"
PROD_ENV="1"
PORT="5432"

START THE SERVER:

1. Run npm install
2. Run npm run dev

Using Clean Architecture for Microservice APIs in Node.js with MongoDB and Express
https://www.youtube.com/watch?v=CnailTcJV_U&t=1296s

APIs:

# Use the base url below for testing on a local machine

http://localhost:8500/

# Description: This API will get the history of the public address.

GET /api/transactions/history?address=<wallet address>

# Description: This API will list down all tokens and its value for given public address

GET /api/transactions/getTokenList?address=<wallet address>



# Vendor APIs
## Description: This API will gets all vendors from database

GET /api/vendors

## Description: This API will posts a vendor to the database

POST /api/vendors
REQUEST PARAMETERS:
```
{
   "name": "JPs Studio",
   "location": "123 Broad Street New York, New York 12345",
   "isActive": true,
   "accessUrl": "https://www.eventbrite.com/e/summer-party-2016-tickets-26784599458,
}
```

## Description: This API will updates a vendor given the vendor

PUT /api/vendors

REQUEST PARAMETERS:
```
{
   "id": 95,
   "name": "JPs Studio",
   "location": "123 Broad Street New York, New York 12345",
   "isActive": true,
   "accessUrl": "<https://www.eventbrite.com/e/summer-party-2016-tickets-26784599458>,
}
```

## Description: This API will deletes a vendor given the vendor’s id

DELETE /api/vendors
REQUEST PARAMETERS:
```
{
   "id": 95
}
```

## Migrations:
Running Migrations
```
npx sequelize-cli db:migrate
```

Undoing Migrations:
```
npx sequelize-cli db:migrate:undo
```

## Errors:

"ConnectionRefusedError [SequelizeConnectionRefusedError]: connect ECONNREFUSED 127.0.0.1:5432"
* 