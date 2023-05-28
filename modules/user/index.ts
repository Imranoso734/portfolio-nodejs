import { url } from 'inspector';
import { UserObj, IUserObj } from './user.schema';
import { FastifyInstance, RouteOptions } from 'fastify';
import { hashPassword, verifyPassword } from '../../utiles/hash';
import userController from './userController';

export async function user(server: FastifyInstance) {

    server.put('/user/:id', {
        schema: {
            // body: { type: 'object', UserObj },
            params: {
                id: { type: 'number' },
            }
        },
        handler: (request, reply) => {
            // console.log('object :>> ', request.body);
            reply.send("ok");
        },
    })

}


export async function getUserfrom(server: FastifyInstance) {
    server.post('/user', userController)
}




