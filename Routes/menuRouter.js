const express = require("express");
const menuController = require("../Controllers/menuController");
const JWTverify = require("../Middleware/verifyToken");

const router = express.Router({ mergeParams: true });

const USE_AUTH = !process.env["SKIP_AUTH"];

/*
if (USE_AUTH) {
  router.use(JWTverify);
}*/

router.get("/:id", menuController.getResturantMenu);

router.put("/:id", menuController.updateResturantMenu);
router.put("/updateDeliveryPrice/:id", menuController.updateMinDeliveryPrice);
router.put("/updateAddress/:id", menuController.updateAddress);

router.post("/:id", menuController.addItemToMenu);

module.exports = router;
