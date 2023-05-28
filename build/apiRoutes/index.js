"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = void 0;
exports.getUserProfile = {
    url: "/user",
    method: "GET",
    handler: async (req) => {
        return "Hi am a user";
    },
};
