import ResponseHandler from "./response_handler.js";

const authMiddleware = (req, res, next) => {
    const authToken = req.headers['authorization'];
    
    if (authToken !== process.env.AUTH_TOKEN) {
      return ResponseHandler.error(res, "Unauthorized", 401);
    }
    
    next();
  };
  

  export default authMiddleware;