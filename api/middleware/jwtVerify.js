const jwt = require("jsonwebtoken");
const { createErrors } = require("../errors/handleErrors");


const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    //check json web token is existed & if exist verify it else return err
    if(token){
        jwt.verify(token , process.env.JWT_KEY , (err, payload) => {
            if(err) return next(createErrors(401, "Invalid Token"));

            // set new value to req from payload data
            req.userId = payload.id;
            req.isSeller = payload.isSeller;
            next();
        })
    } else {
        return next(createErrors(401, "You are not authenticated!"));
    }
}

module.exports = verifyToken;

