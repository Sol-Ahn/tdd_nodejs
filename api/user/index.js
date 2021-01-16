const express = require("express");
const router = express.Router();
const ctrl = require("./user.ctrl");

router.get("/", ctrl.index); // 유저 조회
router.get("/:id", ctrl.show); // 유저 아이디로 유저 조회
router.delete("/:id", ctrl.destroy); // 유저 삭제
router.post("/", ctrl.create); // 유저 생성
router.put("/:id", ctrl.update); // 유저 수정

module.exports = router;
