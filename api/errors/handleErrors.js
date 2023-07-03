function handleErrors (err) {
    // console.log(err.message , err.code);
    let errors = {
        username : "",
        email : "",
        password : ""
    };

    // incorrect mail & password for login validation
    if(err.message === "Incorrect email"){
        errors.email = err.message;
        return errors;
    }
    if(err.message === "Incorrect password"){
        errors.password = err.message;
        return errors;
    }

    // duplicate key error means same email register
    if(err.code === 11000){
        errors.username = "This username is already registered! Please Try another one";
        errors.email = "This email is already registered";
        return errors;
    }

    // email and password validation
    if(err.message.includes("User validation failed")){
        Object.values(err.errors).forEach(x => {
            let {properties } = x;
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}

const createErrors = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}

module.exports = { handleErrors , createErrors };
