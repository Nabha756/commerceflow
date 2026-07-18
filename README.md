# CommerceFlow 🚀

CommerceFlow is a production-inspired **event-driven e-commerce backend** built using a **microservices architecture**. The project demonstrates how modern backend systems are designed by separating responsibilities into independent services that communicate through APIs and (planned) asynchronous events.

The goal of this project is to learn and implement scalable backend architecture using technologies commonly used in production environments.

---

# Features

* API Gateway
* JWT Authentication & Authorization
* User Registration & Login
* Product Management (CRUD)
* Order Management
* PostgreSQL Database
* Prisma ORM
* TypeScript
* Docker-ready architecture
* Microservices-based design

---

# Microservices

### API Gateway

* Routes incoming requests
* Acts as the single entry point
* Handles authentication middleware
* Forwards requests to backend services

### Auth Service

* User Registration
* User Login
* JWT Token Generation
* Protected User Profile Endpoint

### Product Service

* Create Product
* Get All Products
* Get Product by ID
* Update Product
* Delete Product

### Order Service

* Create Order
* Get Orders by User
* Get Order by ID
* Update Order Status

---

# Tech Stack

## Backend

* Node.js
* Express.js
* TypeScript

## Database

* PostgreSQL
* Prisma ORM

## Authentication

* JWT
* bcrypt

## Infrastructure

* Docker
* API Gateway

## Planned

* RabbitMQ
* Redis
* Swagger
* Docker Compose

---

# Project Structure

```text
commerceflow/
│
├── services/
│   ├── gateway/
│   ├── auth-service/
│   ├── product-service/
│   └── order-service/
│
├── docker-compose.yml (Coming Soon)
│
└── README.md
```

---

# Architecture

```text
                 Client
                    │
                    ▼
             API Gateway (3000)
          ┌─────────┼─────────┐
          │         │         │
          ▼         ▼         ▼
   Auth Service  Product   Order
      (3001)     Service   Service
                  (3002)    (3003)
          │         │         │
          └─────────┴─────────┘
                    │
                    ▼
               PostgreSQL
```

---

# API Endpoints

## Authentication

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | `/api/auth/register` |
| POST   | `/api/auth/login`    |
| GET    | `/api/auth/me`       |

---

## Products

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | `/api/products`     |
| GET    | `/api/products`     |
| GET    | `/api/products/:id` |
| PUT    | `/api/products/:id` |
| DELETE | `/api/products/:id` |

---

## Orders

| Method | Endpoint                   |
| ------ | -------------------------- |
| POST   | `/api/orders`              |
| GET    | `/api/orders/user/:userId` |
| GET    | `/api/orders/:id`          |
| PATCH  | `/api/orders/:id/status`   |

---

# Running the Project

Clone the repository:

```bash
git clone https://github.com/Nabha756/commerceflow.git
```

Go into the project:

```bash
cd commerceflow
```

Install dependencies for each service:

```bash
cd services/auth-service
npm install

cd ../product-service
npm install

cd ../order-service
npm install

cd ../gateway
npm install
```

Start PostgreSQL (Docker):

```bash
docker start commerceflow-postgres
```

Run each service:

```bash
# Gateway
npm run dev

# Auth Service
npm run dev

# Product Service
npm run dev

# Order Service
npm run dev
```

---

# Current Status

* ✅ API Gateway
* ✅ Authentication Service
* ✅ Product Service
* ✅ Order Service
* ✅ JWT Authentication
* ✅ Prisma ORM
* ✅ PostgreSQL Integration
* ✅ CRUD APIs
* ✅ TypeScript

---

# Upcoming Features

* RabbitMQ Event Bus
* Inventory Service
* Notification Service
* Redis Caching
* Docker Compose
* Swagger API Documentation
* Centralized Logging
* Request Validation with Zod
* Unit & Integration Tests

---

# Learning Objectives

This project focuses on learning:

* Microservices Architecture
* Event-Driven Systems
* API Gateway Pattern
* Authentication with JWT
* PostgreSQL & Prisma
* Docker
* Redis
* RabbitMQ
* Scalable Backend Design

---

# Author

**Nabha Kulkarni**

* GitHub: https://github.com/Nabha756


---

## License

This project is intended for educational and portfolio purposes.
