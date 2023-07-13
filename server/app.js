import cors from "cors";
import express from "express";
import { getServices, getSubServices } from "./services.js";
const app = express();

app.use(cors());
app.use(express.json());

let rootAPIPath;
switch (process.env.NODE_ENV) {
  case "development":
    rootAPIPath = "/api";
    break;
  case "production":
    rootAPIPath = "/";
    break;
}

app.get(`${rootAPIPath}services`, getServices);
app.get(`${rootAPIPath}sub-services/:service`, getSubServices);
export default app;
