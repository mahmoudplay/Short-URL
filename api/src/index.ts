import 'dotenv/config';
import express, {Request, Response} from 'express';
import cors from 'cors'
import QRCode from 'qrcode'
import { mongodbConnection } from './controllers/mongoConn';
import { ValidLink } from './utils/vaildUrl';
import shortedUrls from './schemas/urlCodeSchema';
import { getUrlShortedCode } from './utils/urlShorted';
import authReq from './middlewares/auth';
import { qrCodeGenerator } from './utils/qrGenerator';
const port = process.env.PORT || 3000
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

(async () => {
    await mongodbConnection(process.env.MONGODB_LINK!)
})()

app.get("/", async (req:Request, res:Response) => {
    res.sendStatus(200)
})

app.get('/urls', authReq, async (req: Request, res: Response) => {
    let shortedUrlsData = await shortedUrls.find()
    if (shortedUrlsData.length > 0) {
        res.status(200).json(shortedUrlsData.map(url => {
            return {
                shortedUrl: `${req.protocol}://${req.get("host")}/${url.urlCode}`,
                redirectUrl: url.redirURL
            };
        }))
    } else {
        res.status(204).send('No urls found.')
    }

})

app.get('/:code', async (req:Request, res:Response) => {
    let urlCode = req.params.code;
    let getCodeData = await shortedUrls.findOne({ urlCode })
    
    getCodeData ? res.status(301).redirect(getCodeData.redirURL) : res.status(404).send('Not Found')
})

app.post("/", async (req:Request, res:Response) => {
    const url = req.body.redirUrl;

    if(url){
        if(ValidLink(url)){
            try{
                const urlCode = getUrlShortedCode(6);
                let newshortedUrls = new shortedUrls({ urlCode: urlCode, redirURL: url})
                newshortedUrls.save();

                res.status(201).json({ shortedUrl: `${req.protocol}://${req.get("host")}/${urlCode}`, qrCode: await qrCodeGenerator(`${req.protocol}://${req.get("host")}/${urlCode}`) })
            }catch(err){
                console.log(err);
                res.status(500).json({ error: "error" })
            }
        }else res.status(422).send('Invaild url')
    }else res.status(400).send('missing redirUrl')
})

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})