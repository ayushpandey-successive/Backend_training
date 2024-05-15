const isUser = (req, res, next) => {
    if (!req.roles.includes("user")) {
      return res.status(403).json({ error: "You are admin , so don't degrade your level by accessing user route" });
    }
    next();
  };
  module.exports=isUser;