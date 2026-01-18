# Inventory Management Backend (Node.js)

This project is a **backend application** built using **Node.js and Express.js**.
It is created to learn **real backend development concepts** step by step.

The backend will later support an **Inventory Management System** where users and products can be managed securely.


## Purpose of This Project

This project is made to:

* Learn how backend projects are structured
* Understand how APIs work
* Practice clean folder structure
* Prepare for real backend development in projects


##  Project Status 

- Express server setup
- Environment variables configured
- Clean folder structure
- User and Product modules created
- Database not added yet
- Authentication not added yet

This project will grow **week by week**.

##  Folder Structure

```
src/
├── app.js            # Express app setup
├── server.js         # Server start file
│
├── config/
│   └── env.js        # Environment variables setup
│
├── routes/
│   └── index.js      # Main API routes file
│
├── modules/
│   ├── user/
│   │   ├── user.routes.js
│   │   ├── user.controller.js
│   │   └── user.model.js
│   │
│   └── product/
│       ├── product.routes.js
│       ├── product.controller.js
│       └── product.model.js
│
├── middlewares/      # Will contain auth & role logic later
├── utils/            # Helper functions (future use)
```


## Technologies Used

- Node.js
- Express.js
- dotenv
- nodemon


## What I Learned 

- How Express server works
- Why folder structure is important
- Difference between routes and controllers
- How to organize backend code properly


## Future Plans

- Add health check API
- Connect MongoDB
- Add user authentication
- Implement role-based access (admin / staff)
- Add inventory logic
- Make backend production ready

