# rest-management-service
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/f2js/rest-management-service/tree/main.svg?style=svg&circle-token=b2e5ef75b38e0f9e9c3e809138f5d963b73830af)](https://dl.circleci.com/status-badge/redirect/gh/f2js/rest-management-service/tree/main)

[![CircleCI](https://dl.circleci.com/insights-snapshot/gh/f2js/rest-management-service/main/build-deploy-master/badge.svg?window=30d&circle-token=df9156550fca02bfd2c36241a6d0f1398f2328c3)](https://app.circleci.com/insights/github/f2js/rest-management-service/workflows/build-deploy-master/overview?branch=main&reporting-window=last-30-days&insights-snapshot=true)

### Group members: 

**Name** Josef Marc Pedersen **Github** [@josefmarcc ](https://github.com/josefmarcc) **Email** cph-jp325@cphbusiness.dk  
**Name** Frederik Dinsen **Github**[@fdinsen](https://github.com/fdinsen) **Email** cph-fd77@cphbusiness.dk  
**Name** Sebastian Bentley **Github** [@sebastianbentley ](https://github.com/SebastianBentley) **Email** cph-sb287@cphbusiness.dk  
**Name** Frederik Dahl **Github** [@dahlfrederik ](https://github.com/dahlfrederik) **Email** cph-fd76@cphbusiness.dk  


## Info
This repository serves as the microservice for a restaurant management service. It is designed for restaurant managers to make changes to their restaurant. 
This service is implemented using the GraphQL gateway, so a token with the "REST" role is required to access the endpoints through the Apollo gateway.

### `GET /restaurant/:id/menu`

Gets the menu for the restaurant with the specified ID.

#### Query Parameters
- `id`: The ID of the restaurant to get the menu for.

#### Response
- On success:
  - Status code: `200 OK`
  - Body: The menu for the restaurant.

- On error:
  - Status code: `400 Bad Request` if the provided ID is invalid.
  - Status code: `404 Not Found` if a restaurant with the provided ID does not exist.
  - Status code: `500 Internal Server Error` if there was an error getting the menu.

### `PUT /restaurant/:id/menu`

Updates the menu for the restaurant with the specified ID.

#### Query Parameters
- `id`: The ID of the restaurant to update the menu for.

#### Request Body
- `menu`: The updated menu for the restaurant.

#### Response
- On success:
  - Status code: `200 OK`
  - Body: The updated menu for the restaurant.

- On error:
  - Status code: `400 Bad Request` if the provided ID is invalid or if the provided menu is invalid.
  - Status code: `404 Not Found` if a restaurant with the provided ID does not exist.
  - Status code: `500 Internal Server Error` if there was an error updating the menu.

### `POST /restaurant/:id/menu`

Adds an item to the menu for the restaurant with the specified ID.

#### Query Parameters
- `id`: The ID of the restaurant to add the item to the menu for.

#### Request Body
- `item`: The item to add to the menu for the restaurant.

#### Response
- On success:
  - Status code: `200 OK`

- On error:
  - Status code: `400 Bad Request` if the provided ID is invalid or if the provided item is invalid.
  - Status code: `404 Not Found` if a restaurant with the provided ID does not exist.
  - Status code: `500 Internal Server Error` if there was an error adding the item to the menu.

### `PUT /restaurant/:id/minDeliveryPrice`

Updates the minimum delivery price for the restaurant with the specified ID.

#### Query Parameters
- `id`: The ID of the restaurant to update the minimum delivery price for.

#### Request Body
- `minDeliveryPrice`: The updated minimum delivery price for the restaurant.

#### Response
- On success:
  - Status code: `200 OK`

- On error:
  - Status code: `400 Bad Request` if the provided ID is invalid or if the provided minimum delivery price is invalid.
  - Status code: `404 Not Found` if a restaurant with the provided ID does not exist.
  - Status code: `500 Internal Server Error` if there was an error updating the minimum delivery price.
