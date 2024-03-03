import express from 'express';
import { getUsersForSideBar } from '../controllers/user.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const route = express.Router();

route.get("/", protectRoute, getUsersForSideBar)

export default route;