const express = require("express");
const menuController = require("../Controllers/menuController");

const router = express.Router({ mergeParams: true });

router.get("/:id", menuController.getResturantMenu);
router.put("/:id", menuController.updateResturantMenu);
router.put("/updateDeliveryPrice/:id", menuController.updateMinDeliveryPrice);
router.put("/updateAddress/:id", menuController.updateAddress);

router.post("/:id", menuController.addItemToMenu);

module.exports = router;
