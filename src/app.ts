import express, { Application, Request, Response } from "express";
import { ProductRoute } from "./modules/products/product.route";
const app: Application = express();

//parsers
app.use(express.json())

app.use('/api/products',ProductRoute)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
