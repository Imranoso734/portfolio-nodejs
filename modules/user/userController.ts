import { clearScreenDown } from 'readline';
import { hashPassword } from '../../utiles/hash';
import { UserObj, IUserObj } from './user.schema';

import { FastifyRequest as Request, FastifyReply as Reply } from 'fastify';

function CreateUser(params: IUserObj) {
    const { password, ...rest } = params;

    const { hash, salt } = hashPassword(password);

    console.log({ hash, salt });
}


export default function userController(req: Request<{ Body: IUserObj }>, reply: Reply) {

    CreateUser(req.body as IUserObj);

    reply.send("ok");

};
