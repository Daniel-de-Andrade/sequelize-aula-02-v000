const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/users"),
  upoload = require("../middleware/upload");

router.get("/search/:searchParam/:searchValue", controller.search);
router.post("/search/:searchParam/:searchValue", controller.search);
router.get("/add", controller.addUser);
router.post("/:id/delete", controller.delete);
router.get("/:id", controller.index);
router.post("/:id", controller.update);
router.get("/", controller.list);
router.post("/", upoload.single("avatar"), controller.register);

module.exports = router;
