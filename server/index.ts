import Fastify, {
    FastifyInstance,
    FastifyRequest as Request,
    FastifyReply as Reply,
    RouteOptions,
    DoneFuncWithErrOrRes as Done,
    HTTPMethods,
} from 'fastify';

import swagger from 'fastify-swagger';
import { withRefResolver } from 'fastify-zod';
import routes from '../modules/routes';


const server = Fastify({
    logger: true,
    bodyLimit: 1e+7
});


for (const route of routes) {
    server.register(route, { prefix: '/api/v1' });
}


server.get('/checkHealth', async (req: Request, reply: Reply) => {
    reply.send({ Status: 'I am alive' });
})


// server.register(swagger,
//     withRefResolver({
//         routePrefix: '/docs',
//         // exposeRoutes: true,
//         staticCSP: true,
//         openapi: {
//             info: {
//                 title: 'Fastify API',
//                 version: '1.0.0',
//             },
//         }
//     })
// )

// server.register(swagger, 
//     withRefResolver({
//         deep: true,
//         swaggerOptions: {
//             responseMessages: true

//         }
//     })

// )



const start = async () => {
    try {
        await server.listen({ port: 3000 });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
