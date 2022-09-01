import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { verifyJwt } from "../utils/jwt.utils";

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );
  if (!accessToken) {
    return next();
  }
  const { decoded, expired } = verifyJwt(accessToken)
  if(decoded){
    console.log(decoded)
    res.locals.user = decoded
    return next()
  }
};

export default deserializeUser;

// we use get from lodash bz we want to access the propertis that we don't know it exist or not.
