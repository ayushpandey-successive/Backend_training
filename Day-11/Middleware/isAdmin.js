const isAdmin = (req, res, next) => {
    if (!req.roles.includes('admin')) {
      return res.status(403).json({ error: "You are user so don't have access to see the userdetail's stored in the database" });
    }
    next();
  };
  module.exports=isAdmin;