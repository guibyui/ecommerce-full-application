module.exports = (req, res, next) => {
  if (req.body.email !== "guigui@gui.com") {
    return res.redirect("/login");
  }
  next();
};
