const asyncHandler = (funcRequestHandler) =>{
    (req,res,next) =>{ 
        Promise.resolve(funcRequestHandler(req,res,next))
        .catch((error)=> next(error))
    }
}

export {asyncHandler}