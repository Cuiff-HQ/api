import { Request, Response, NextFunction } from "express";

async function loginMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { emailAddress, password } = req.body;

    if (emailAddress.length >= 1 && password.length >= 1) {
        next();
    } else {
        res.status(401).send();
    }
}

export default loginMiddleware;
