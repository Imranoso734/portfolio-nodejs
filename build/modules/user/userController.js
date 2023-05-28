"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash_1 = require("../../utiles/hash");
function CreateUser(params) {
    const { password, ...rest } = params;
    const { hash, salt } = (0, hash_1.hashPassword)(password);
    console.log({ hash, salt });
}
function userController(req, reply) {
    CreateUser(req.body);
    reply.send("ok");
}
exports.default = userController;
;
