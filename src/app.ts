import express, { Application, Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.route";
import { OrderRoutes } from "./modules/orders/order.route";
const app: Application = express();

//parsers
app.use(express.json());

app.use('/api/products',ProductRoutes)
app.use('/api/orders',OrderRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
