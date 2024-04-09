## Description

JavaScript framework (Express.js)  starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev

```

---

#### Microservice Architecture Design in a NodeJS/NestJS Environment:

**Scenario:** You are tasked with designing a microservice architecture for an online retail system. This system should manage various aspects like product catalog, user accounts, orders, and payment processing.

**Question:** Describe how you would architect this system using NodeJS and NestJS. Discuss
your choice of database(s) for each microservice, considering the type of data and interactions
between services. Explain how these microservices will communicate with each other, ensuring
data consistency, security, and system reliability. Include your approach to handling
transactions, especially in a distributed system environment.


# Microservice Architecture Design in a NodeJS Environment
![Alt text](image.png)

## Microservices Breakdown


### Product Catalog Service:
- **Database:** MongoDB or a similar NoSQL database is recommended due to its flexible schema and efficient retrieval of product information.
- **Functionality:** This service manages products, categories, and inventory. It's responsible for handling operations related to product management such as creation, updating, and retrieval.

### User Account Service:
- **Database:** PostgreSQL or MySQL, traditional relational databases, are suggested for storing user profiles, authentication data, and authorization details.
- **Functionality:** This service handles user accounts, authentication, authorization, and any other user-related data management tasks.

### Order Service:
- **Database:** Depending on the complexity of order-related data and the need for transactional integrity, either MongoDB or a SQL database can be chosen. SQL databases like PostgreSQL or MySQL are suitable for complex transactions.
- **Functionality:** The Order Service manages orders throughout their lifecycle, including order creation, updates, and status tracking.

### Payment Processing Service:
- **Database:** This service may not require a database if its primary function is to handle payment gateway integration. However, transaction logs could be stored in a reliable storage solution like Elasticsearch.
- **Functionality:** Responsible for integrating with payment gateways, processing transactions securely, and logging payment-related information for auditing purposes.

## Inter-Service Communication
- **RESTful APIs or GraphQL:** Each microservice exposes an API for communication, allowing them to interact with each other. NestJS provides robust tools for building RESTful APIs or GraphQL endpoints.
- **Message Broker (Optional):** Implementation of a message broker such as RabbitMQ or Kafka facilitates asynchronous communication between services, promoting loose coupling and scalability.

## Security
- **JWT Tokens:** Utilize JWT (JSON Web Tokens) for authentication and authorization across services. NestJS offers features for implementing JWT-based authentication.
- **HTTPS:** Ensure secure communication between microservices using HTTPS to prevent data breaches and unauthorized access.

## Database Choice
- Considerations: Take into account the application's read-and-write patterns and scalability requirements when selecting databases.
- Relational Databases: Suitable for handling complex relationships and transactions.
- NoSQL Databases: Offer scalability and efficiency for managing large volumes of data.
- Caching Strategies: Implement caching layers using tools like Redis to cache frequently accessed data, reducing the load on databases and improving performance.

## Handling Concurrency and Load
- Load Balancing: Employ load balancers such as NGINX or HAProxy to distribute incoming traffic across multiple instances of microservices, ensuring efficient handling of high concurrency.
- Scalability: Utilize horizontal scaling by deploying multiple instances of microservices behind a load balancer. Containerization technologies like Docker and orchestration tools like Kubernetes can facilitate dynamic scaling.

## NestJS Optimization
- Middleware Optimization: Review and optimize middleware usage to minimize unnecessary processing overhead.
- Cache Middleware: Integrate caching middleware to cache responses and reduce the load on microservices.

## Deployment
- Cloud Services: Deploy microservices on cloud platforms such as AWS, Azure, or Google Cloud to leverage their scalability and managed services.
- Docker Containerization: Containerize microservices using Docker for consistent deployment and scalability across different environments.
- CI/CD Pipelines: Implement CI/CD pipelines using tools like Jenkins, GitLab CI/CD, or GitHub Actions for automated testing, building, and deployment processes.

## Libraries and Tools

- Helmet: Enhance security by setting HTTP headers using Helmet middleware.
- Logging: Utilize logging libraries like Winston and Morgan for logging application events and request/response information.
- PM2: Use PM2 process manager for NodeJS applications to manage, monitor, and auto-restart multiple instances.
- NestJS Microservices: Consider breaking down specific functionalities into microservices for better scalability and isolation.
- ORMs: Depending on the chosen database, use ORMs like TypeORM, Sequelize, or Mongoose for efficient database interactions and query optimizations.
- Profiler Tools: Employ Node.js profiler tools such as Clinic.js or Node.js Diagnostics to identify and optimize performance bottlenecks in the codebase.


---

# **Order API Documentation**

### **Base URL**: 

 **Localhost URL**:  localhost:4000

 **Live URL**: https://order-process-asses.vercel.app


## **Endpoint**
### **USER API**:

**1. Register**: BaseURL/api/v1/register

  -**Method**:  POST

  -**Request Body**:

    Format : JSON

  Fields :
  - `name` (string)
  - `email` (string)
  - `password` (string)

   #### Example Request Body

  ```javascript
  {
      "name":"mamun",
      "email":"abdullahalmamun1804064@gmail.com",
      "password":"123456",
      "confirmPassword":"123456"
  }
  ```
  #### Successful Response
  - Response Format : JSON 
  - Example Response:

    ```javascript
    {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTRmYTFhYjQ1NGRlNGNhMjQ0OTBmZSIsImlhdCI6MTcxMjY1MDc3OCwiZXhwIjoxNzEzMjU1NTc4fQ.cmP1uVGhcbaY-Jm1sS2W1wKpDL1YGIQHKp9UgT8z5bI",
    "user": {
        "name": "mamun",
        "email": "abdullahalmamun1804064@gmail.com",
        "password": "$2a$10$Nh84/TNN7mZbC5h92zOqM.onppQIXOi90TJcYMu7n31CWGJBDbON2",
        "is_active": true,
        "_id": "6614fa1ab454de4ca24490fe",
        "createdAt": "2024-04-09T08:19:38.569Z",
        "__v": 0
     }
    } 
    ```

**2. Login** : BaseURL/api/v1/login

  **Method**:  POST

  -**Request Body**:

    Format : JSON
   #### Example Request Body

  ```javascript
  {
      "email":"abdullahalmamun1804064@gmail.com",
      "password":"123456",
  }
  ```

 **3. LogOut** : BaseURL/api/v1/logout

  **Method**:  GET

### **Product API**:
 **4. Product Creat**:BaseURL/

  **Method**:  POST

   -**Request Body**:

    Format : JSON

  Fields :
  - `name` (string)
  - `description` (string)
  - `price` (Number)
  - `quantities` (Number)
  - `user` (ObjectId)


   #### Example Request Body

  ```javascript
  {
     "name":"Iphone 14",
     "description":"new brand product",
     "price":"1000",
     "quantities":"50",
     "userId":"6614dd41a6a96dfef89ba852"
  }
  ```
  #### Successful Response
  - Response Format : JSON 
  - Example Response:

    ```javascript
    {
    "success": true,
    "product": {
        "name": "Iphone 14",
        "description": "new brand product",
        "price": 1000,
        "quantities": 50,
        "user": "6614dd41a6a96dfef89ba852",
        "_id": "6614e33fa6a96dfef89ba85a",
        "date": "2024-04-09T06:42:07.935Z",
        "createdAt": "2024-04-09T06:42:07.937Z",
        "updatedAt": "2024-04-09T06:42:07.937Z",
        "__v": 0
      }
    } 
    ```

## **Order API**:

 **5. Order Create**:BaseURL/api/v1/orders

  **Method**:  POST

  
   -**Request Body**:

    Format : JSON

  Fields :
  - `user` (ObjectId)
  - `productId` (ObjectId)
  - `quantities` (Number)
  - `paymentInfo` (string)


   #### Example Request Body

  ```javascript
  {
  "userId": "6614dd41a6a96dfef89ba852",
  "productId": ["6614e33fa6a96dfef89ba85a"],
  "quantities": [10],
  "paymentInfo": "Credit Card"
  }
  ```
  #### Successful Response
  - Response Format : JSON 
  - Example Response:

    ```javascript
    {
     "success": true,
    "order": {
        "userId": "6614dd41a6a96dfef89ba852",
        "productId": [
            "6614e33fa6a96dfef89ba85a"
        ],
        "quantities": [
            10
        ],
        "paymentInfo": "Credit Card",
        "_id": "66150c56e65a79b36dca449b",
        "date": "2024-04-09T09:37:26.004Z",
        "createdAt": "2024-04-09T09:37:26.010Z",
        "updatedAt": "2024-04-09T09:37:26.010Z",
        "__v": 0
     }
    } 
    ```


**6. Get All Order**:BaseURL/api/v1/orders

  **Method**:  GET
 
  #### Successful Response
  - Response Format : JSON 
  - Example Response:

    ```javascript
    {
    "success": true,
    "orders": [
        {
            "_id": "6614e355a6a96dfef89ba85c",
            "userId": "6614dd41a6a96dfef89ba852",
            "productIds": [
                "6614e33fa6a96dfef89ba85a"
            ],
            "quantities": [
                0
            ],
            "paymentInfo": "DBBLBkash",
            "date": "2024-04-09T06:42:29.628Z",
            "createdAt": "2024-04-09T06:42:29.630Z",
            "updatedAt": "2024-04-09T08:07:09.263Z",
            "__v": 0
        },
        {
            "_id": "6614f5c779ad1bbecf32ff04",
            "userId": "6614dd41a6a96dfef89ba852",
            "productIds": [
                "6614e33fa6a96dfef89ba85a"
            ],
            "quantities": [
                10
            ],
            "paymentInfo": "Nagad",
            "date": "2024-04-09T08:01:11.238Z",
            "createdAt": "2024-04-09T08:01:11.239Z",
            "updatedAt": "2024-04-09T08:01:11.239Z",
            "__v": 0
        }
     ]
     }
    ```


 **7 Get Single Order** : BaseURL/api/v1/orders/id

   **Method**:  GET
   #### Successful Response
  - Response Format : JSON 
  - Example Response:

    ```javascript
        {
    "success": true,
    "order": {
        "_id": "6614f5c779ad1bbecf32ff04",
        "userId": "6614dd41a6a96dfef89ba852",
        "productIds": [
            "6614e33fa6a96dfef89ba85a"
        ],
        "quantities": [
            10
        ],
        "paymentInfo": "Nagad",
        "date": "2024-04-09T08:01:11.238Z",
        "createdAt": "2024-04-09T08:01:11.239Z",
        "updatedAt": "2024-04-09T08:01:11.239Z",
        "__v": 0
      }
     } 
    ```



 **8. Update Order** : BaseURL/api/v1/orders/id

  **Method**:  PUT

 #### Example Request Body

  ```javascript
  {
    "quantities":"15",
    "paymentInfo": "Bkash"
  }
  ```
  #### Successful Response
  - Response Format : JSON 
  - Example Response:

    ```javascript
     {
    "success": true,
    "order": {
        "_id": "6614b45667338a7da8b3f486",
        "userId": "6614aa1ee7ce9f0dc4233451",
        "productIds": [
            "6614b41f67338a7da8b3f484"
        ],
        "quantities": [
            15
        ],
        "paymentInfo": "Bkash",
        "date": "2024-04-09T03:21:58.996Z",
        "createdAt": "2024-04-09T03:21:58.998Z",
        "updatedAt": "2024-04-09T03:28:41.897Z",
        "__v": 0
      }
    }
    ```

 **9. Update Order partially** : BaseURL/api/v1/orders/id

  **Method**:  PATCH
  #### Example Request Body

  ```javascript
  {
    "quantities":"150",
  }
  ```
  #### Successful Response
  - Response Format : JSON 
  - Example Response:

    ```javascript
     {
    "success": true,
    "order": {
        "_id": "6614b45667338a7da8b3f486",
        "userId": "6614aa1ee7ce9f0dc4233451",
        "productIds": [
            "6614b41f67338a7da8b3f484"
        ],
        "quantities": [
            150
        ],
        "paymentInfo": "Bkash",
        "date": "2024-04-09T03:21:58.996Z",
        "createdAt": "2024-04-09T03:21:58.998Z",
        "updatedAt": "2024-04-09T03:28:41.897Z",
        "__v": 0
      }
    }
    ```

 **10. Delete Order**: BaseURL/api/v1/orders/id

  **Method**:  DELETE

#### Successful Response
  - Response Format : JSON 
  - Example Response:

    ```javascript
     {
      "success": true,
     }
    ```





### **Error Handling**

- **Response Code**: `400 Bad Request`
- **Response Body**:

```javascript
 {
    "success": false,
    "error": {
        "statusCode": 400
    },
    "errMessage": "Invalid data. Order must contain userId, productId, quantities, and paymentInfo",
    "stack": "Error: Invalid data. Order must contain userId, productId, quantities, and paymentInfo\n    at G:\\js\\interiew project\\orderProcess\\controllers\\orderController.js:10:19\n   
}
```

### **Successful Response**

- **Response Format**: JSON 
- **Example Response**:

```javascript
{
    "success": true,
    "order": {
        "userId": "6614dd41a6a96dfef89ba852",
        "productId": [
            "6614e33fa6a96dfef89ba85a"
        ],
        "quantities": [
            10
        ],
        "paymentInfo": "Credit Card",
        "_id": "6615139376b76c0a4f90e8bb",
        "date": "2024-04-09T10:08:19.189Z",
        "createdAt": "2024-04-09T10:08:19.194Z",
        "updatedAt": "2024-04-09T10:08:19.194Z",
        "__v": 0
    }
}
```

---
Concise API endpoint documentation with essential details, customizable to specific requirements.