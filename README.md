# <img src="https://media4.giphy.com/media/26AHG5KGFxSkUWw1i/giphy.gif" width=40> So Wow Unicorns App <img src="https://media4.giphy.com/media/26AHG5KGFxSkUWw1i/giphy.gif" width=40>
A demo app built to review concept in Mongo, Express, Node, jQuery/ajax and HTML forms.

## HTML API Endpoints
*TODO: pending*

## JSON API Endpoints
- Architectural Style: `REST`
- Supported Request Formats: `URI Query String/CRUD`
- Supported Response Formats: `JSON`
- Host: `http://localhost:3000`

**Unicorn Endpoint**: `http://localhost:3000/api/unicorns`

| RESTful Route             | Description                         | controller#action |
| :------------------------ | :---------------------------------- | :--------- |
| `GET`    `/unicorns` ✓        | Fetch a list of unicorns     | index |
| `GET`    `/unicorns/:id` ✓     | Fetch one specific unicorn      | show |
| `POST`   `/unicorns` ✓        | Create a new unicorn record | create |
| `DELETE` `/unicorns/:id`      | Remove one specific unicorn  | destroy |
| `PUT`    `/unicorns/:id`      | Change one specific unicorn   | update |

#### Example Unicorn Response Object
```js
{
    _id: "5927148048755023209525d8",
    name: "ralph",
    sparkles: false,
    number_of_horns: 1,
    created_at: "2017-05-25T17:19:45.566Z"
}

```

## Setup
Clone this repo and `cd` into the project directory.

```bash
npm install

# open a new tab and run the mongodb server
mongod

# Run the seed task
node seed.js

# open a new tab and run the express server
node server.js     # this works fine
nodemon server.js  # but this is preferred

# finally, open your browser to localhost:3000
open http://localhost:3000
```
