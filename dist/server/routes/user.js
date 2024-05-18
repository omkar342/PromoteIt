"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const server_1 = require("@trpc/server");
const t = server_1.initTRPC.create();
exports.userRouter = t.router({
    getUser: t.procedure.query(() => {
        return 'User data';
    }),
});
