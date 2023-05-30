import express from "express";
import * as orderController from "../controllers/order.controller";
const route = express.Router();

route.post("/order", orderController.save);

export default route;
