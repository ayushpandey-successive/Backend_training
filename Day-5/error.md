# Express.js Error Handling Guide

## Overview
This guide outlines the error handling mechanisms in Express.js and the common HTTP status codes used to indicate various types of errors.

## Error Handling in Express.js
Express.js applications use middleware to handle errors. This middleware captures both synchronous and asynchronous errors that occur during the execution of request-handling code.

### Types of Errors
- **Synchronous Errors**: Occur during the execution of synchronous code. Caught by Express.js automatically.
- **Asynchronous Errors**: Occur in callbacks or promise rejections. Must be passed to the `next()` function to be handled by error-handing middleware.

## Common HTTP Status Codes
Here are some of the standard HTTP status codes used in Express.js to communicate the nature of an error to the client:

### 400 Bad Request
**Description**: The server cannot process the request due to a client error, such as malformed request syntax or invalid request message framing.

### 401 Unauthorized
**Description**: The request has not been applied because it lacks valid authentication credentials for the target resource.

### 403 Forbidden
**Description**: The server understood the request but refuses to authorize it. This status is often used if the server does not wish to reveal exactly why the request has been refused.

### 404 Not Found
**Description**: The server can't find the requested resource. This status code is most commonly used when the server cannot find a requested endpoint.

### 500 Internal Server Error
**Description**: The server encountered an unexpected condition that prevented it from fulfilling the request. This is a generic 'catch-all' response for server-side errors.

## Implementing Custom Error Handling
To implement custom error handling in your Express.js application, you can define error-handling middleware as follows:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

