"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_swagger_1 = __importDefault(require("fastify-swagger"));
const fastify_zod_1 = require("fastify-zod");
const routes_1 = __importDefault(require("../modules/routes"));
const server = (0, fastify_1.default)({
    logger: true,
    bodyLimit: 1e+7
});
for (const route of routes_1.default) {
    server.register(route, { prefix: '/api/v1' });
}
server.get('/checkHealth', async (req, reply) => {
    reply.send({ Status: 'I am alive' });
});
server.register(fastify_swagger_1.default, (0, fastify_zod_1.withRefResolver)({
    routePrefix: '/docs',
    staticCSP: true,
    openapi: {
        info: {
            title: 'Fastify API',
            version: '1.0.0',
        },
    }
}));
const start = async () => {
    try {
        await server.listen({ port: 3000 });
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
