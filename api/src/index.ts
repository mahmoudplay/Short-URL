import 'dotenv/config';
import express, {Request, Response} from 'express';
import { mongodbConnection } from './controllers/mongoConn';
const port = process.env.PORT || 3000
const app = express();

(async () => {
    await mongodbConnection(process.env.MONGODB_LINK!)
})()

app.get("/", async (req:Request, res:Response) => {
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})