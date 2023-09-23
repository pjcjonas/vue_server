// typescript express server

import express from 'express';
import { Request, Response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';
import bodyParser from 'body-parser';
import { checkUserAuth } from './src/authUser';

const app = express();
app.use(cors())
app.use(bodyParser.json())

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        allowedHeaders: ['Access-Control-Allow-Origin'],
        exposedHeaders: ['Access-Control-Allow-Origin'],
        methods: ['GET', 'POST'],
    },
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.post('/api/login', async (req: Request, res: Response): Promise<any> => {
    try {
        console.log(req);
        const { username, password } = req.body;

        const user = await checkUserAuth({ username, password });
        const token = btoa(`${user.username}:${user.password}`);
        res.send({token});
    } catch (error) {
        res.status(500).send(error);
    }
}); 

io.on('connection', (socket: Socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

httpServer.listen(3000, () => {
    console.log('listening on *:3000'); 
});
 