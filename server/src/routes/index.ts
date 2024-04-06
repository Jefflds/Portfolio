import { Router } from "express";
const routes = Router();

routes.get("/", (req, res) => {
  res.send("Bem-Vindo a API");
});

export default routes;