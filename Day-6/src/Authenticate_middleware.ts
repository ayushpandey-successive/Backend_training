const express = require('express');
import { NextFunction, Request,Response } from "express";
const app = express();

function authenticate(req:Request, res:Response, next:NextFunction) {
    let authToken:string|undefined = req.headers.authorization;
  authToken = undefined;
  console.log(typeof authToken)
    if (typeof authToken===undefined) {
        return res.status(401).json({ error: 'Unauthorized: Please give token in string format' });
    }

    const validToken = 'secretToken';
    if (authToken !== validToken) {
        return res.status(401).json({ error: 'Unauthorized: Invalid authentication token' });
    }

    next();
}

app.get('/protected-resource', authenticate, (req:Request, res:Response) => {
    res.send('Welcome to the protected resource!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
