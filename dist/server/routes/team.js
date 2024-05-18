"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamRouter = void 0;
const server_1 = require("@trpc/server");
const t = server_1.initTRPC.create();
exports.teamRouter = t.router({
    getTeam: t.procedure.query(() => {
        return 'Team data';
    }),
});
