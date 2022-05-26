import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.write("Welcome to users page!");
  res.end();
});
export default router;