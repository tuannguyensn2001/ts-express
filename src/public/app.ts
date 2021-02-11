import express,{Application} from 'express';
import path from "path";
import Route from "../routes/web";
const redis = require('redis');
const client = redis.createClient();
const cors = require('cors');

client.subscribe('comment');
client.subscribe('notifications');


const app: Application = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http,{
    cors: {
        origin: "*",
    }
});

app.use(express.static(path.join(__dirname,'public')));
app.use(cors());

app.use('/',Route);



http.listen(5000,() =>{
    client.on('message',(channel: string,message: string) => {
        io.emit(channel,message);
    })
    //
    // io.on('connection',(socket: any) => {
    //
    // })

})