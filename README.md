# swe-5-5-mvc-rest-api

Deployment Link: <<<<<< PUT YOUR DEPLOYMENT LINK HERE >>>>>>

In this assignment, you will remix the provided **Fellow Tracker** application — a full-stack app with an Express server and Vanilla JS frontend — by adapting it for a domain of your choice (e.g. a playlist app, a book library, a movie watchlist). The goal is to practice reading and refactoring an existing codebase while implementing the **Model-View-Controller (MVC)** architecture for your own domain.

Refer to the associated [GitBook Chapter (Model-View-Controller)](https://marcylabschool.gitbook.io/marcy-lab-school-docs/mod-5-servers/8-model-view-controller) for support.

**Table of Contents**
- [Setup](#setup)
- [Short Response Questions](#short-response-questions)
- [Code](#code)
  - [Grading](#grading)
  - [Step 1 — Explore the Provided Code](#step-1--explore-the-provided-code)
  - [Step 2 — Remix the Server](#step-2--remix-the-server)
  - [Step 3 — Remix the Frontend](#step-3--remix-the-frontend)
  - [Step 4 — Deploy](#step-4--deploy)
- [Error Codes](#error-codes)

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy Lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

After cloning your repository, make sure to run the following commands:

```sh
git checkout -b draft
```

## Short Response Questions

Short response questions can be found in the `short-response.md` file. Write your responses directly in that file. Do not forget to complete this part of the assignment.

## Code

### Grading

Your grade on the coding portion assignment will be determined by the number of requirements you complete. This assignment has 20 requirements:
- 6 model requirements
- 8 endpoint/controller requirements
- 5 frontend requirements
- 1 deployment requirement

To earn 75% or higher (15/20), complete the model and endpoint/controller requirements. The frontend and deployment requirements bring you to 100%.

**Model Requirements (6 points)**

- [ ] A collection of objects is managed by the server API
- [ ] Every object in the collection has a unique `id` and at least two (2) additional properties

* Interactions with the data are provided by a `class` with at least:

  - [ ] a `static` method to **create** a new resource.
  - [ ] a `static` method to **read** existing resources (either all or one at a time).
  - [ ] a `static` method to **update** an existing resource.
  - [ ] a `static` method to **delete** an existing resource.

**Endpoint / Controller Requirements (8 points)**

* The server has endpoints including at least:
  - [ ] one `GET` method
  - [ ] one `POST` method
  - [ ] one `PATCH` method with a route parameter for `:id`
  - [ ] one `DELETE` method with a route parameter for `:id`

- [ ] The server can parse JSON in incoming requests with `express.json()` middleware
- [ ] All endpoints begin with `/api`
- [ ] All endpoints use plural nouns (e.g. `/api/fellows`), NOT verbs (e.g. `/api/getFellows`)
- [ ] Error codes are used appropriately

**Frontend Requirements (5 points)**

- [ ] The server serves a frontend application at `/` using `express.static()` middleware.
- [ ] The frontend application can send a `GET request` for and render the collection of resources from the server's "database"
- [ ] The frontend application can send a `POST request` to create a new resource in the server's "database".
- [ ] The frontend application can send a `PATCH request` to update an existing resource in the server's "database".
- [ ] The frontend application can send a `DELETE request` to delete an existing resource in the server's "database".

**Deployment Requirements (1 point)**

- [ ] Your server application is deployed using Render and the public URL is added to the top of this README.

### Step 1 — Explore the Provided Code

> ✅ You will know you've completed this step when you can run the server and the frontend locally and fully interact with the Fellow Tracker app.

This repo already includes a working Fellow Tracker application structured using the MVC architecture. Take time to read and understand it before making any changes.

**Server (`server/`):**
- `index.js` — configures middleware and registers routes
- `controllers/fellowControllers.js` — one controller function per endpoint
- `models/Fellow.js` — the `Fellow` class with static methods for all CRUD operations

**Frontend (`frontend/`):**
- `index.html` — static shell with the form and list
- `src/fetch-helpers.js` — one fetch function per API endpoint
- `src/dom-helpers.js` — `renderFellows()` and `renderError()`
- `src/main.js` — event listeners wiring fetch helpers to the DOM

**Start the server:** In your terminal, navigate to `server/` and run:

```sh
npm install
npm run dev
```

Connect to your server in your browser and use the frontend UI to add, edit, and delete fellows to confirm everything works before making any changes.

### Step 2 — Remix the Server

> ✅ You will know you've completed this step when your new API endpoints return the correct data and error codes when tested in the browser or with `curl`.

Choose a domain for your app — for example, songs in a playlist, books in a library, or movies in a watchlist. Then update the server to manage that domain instead of fellows.

1. **Model** — Rename `models/Fellow.js` to match your domain (e.g., `models/Song.js`). Inside:
   - Rename the class and the in-memory array to match your domain
   - Update the seed data with your domain's properties (`id` + at least 2 more)
   - Keep all four static CRUD methods, renaming them to fit your domain

2. **Controllers** — Rename `controllers/fellowControllers.js` (e.g., `controllers/songControllers.js`). Inside:
   - Import your new model instead of `Fellow`
   - Rename each controller function and update the request body field names to match your domain

3. **`index.js`** — Update the import path and all endpoint URLs to match your domain (e.g., `/api/songs` instead of `/api/fellows`)

Refer to the [Error Codes](#error-codes) section below to make sure your controllers return appropriate HTTP status codes.

### Step 3 — Remix the Frontend

> ✅ You will know you've completed this step when you can open the browser and fully interact with your new domain — creating, reading, updating, and deleting resources.

Update the frontend to display and manage your domain's data instead of fellows.

1. **`index.html`** — Update the page title, heading, form labels, input placeholders, and element ids to reflect your domain.
2. **`src/fetch-helpers.js`** — Rename functions and update the endpoint URLs and request body fields to match your domain's API.
3. **`src/dom-helpers.js`** — Update `renderFellows()` to render your domain's objects, displaying all relevant properties.
4. **`src/main.js`** — Update all imports and DOM element references to match your renamed functions and ids.

### Step 4 — Deploy

> ✅ You will know you've completed this step when your server is live at a public URL and fully functional.

When you're done, push your code to GitHub and [follow these steps to deploy using Render](https://marcylabschool.gitbook.io/marcy-lab-school-docs/projects/6-deploying-using-render).

Then, add the deployed link to the top of this README.

## Error Codes

The following error codes are commonly used by APIs

* Success Responses
  * `200` OK — Standard success (GET, PUT, DELETE).
  * `201` Created — Resource was created (POST).
  * `204` No Content — Successful but no response body (e.g. DELETE or empty PATCH).
* Client Errors
  * `400` Bad Request — Input is invalid (e.g. missing fields, bad JSON).
  * `404` Not Found — Resource doesn't exist (e.g. user ID not found).
* Server Errors
  * `500` Internal Server Error — Unexpected error on your backend.
  * `503` Service Unavailable — Server is overloaded or down (e.g. maintenance or unavailable 3rd party API).
