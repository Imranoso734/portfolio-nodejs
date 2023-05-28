"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserfrom = exports.user = void 0;
const userController_1 = __importDefault(require("./userController"));
async function user(server) {
    server.put('/user/:id', {
        schema: {
            params: {
                id: { type: 'number' },
            }
        },
        handler: (request, reply) => {
            reply.send("ok");
        },
    });
}
exports.user = user;
async function getUserfrom(server) {
    server.post('/user', userController_1.default);
}
exports.getUserfrom = getUserfrom;
