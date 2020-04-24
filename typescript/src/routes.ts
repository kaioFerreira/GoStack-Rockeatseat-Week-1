import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloworld(request: Request, response: Response){
    const user = createUser({
        email: 'kaiofhs@homtail.com',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            { title: 'Javascript', experience: 100},
        ],
    });
    
    return response.json(user);
}