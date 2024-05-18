"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server/index.ts
const express_1 = __importDefault(require("express"));
const trpcExpress = __importStar(require("@trpc/server/adapters/express"));
const trpc_1 = require("./trpc");
const team_1 = require("./routes/team");
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
const port = 3000;
const appRouter = (0, trpc_1.router)({
    user: user_1.userRouter,
    team: team_1.teamRouter,
});
// const appRouter = router({
//   sayHello: publicProcedure.query(() => {
//     return "Hello World!";
//   }),
//   signUp: publicProcedure
//     .input(
//       z.object({
//         email: z.string(),
//         password: z.string(),
//       })
//     )
//     .mutation(async (opts) => {
//       // context
//       let email = opts.input.email;
//       let password = opts.input.password;
//       // Do validations here
//       // Do database stuff here
//       let token = "123123";
//       return {
//         token,
//       };
//     }),
//   createTodo: publicProcedure
//     .input(
//       z.object({
//         title: z.string(),
//       })
//     )
//     .mutation(async (opts) => {
//       // console.log(opts.ctx.username)
//       return {
//         id: "1",
//       };
//     }),
// });
app.use("/trpc", trpcExpress.createExpressMiddleware({
    router: appRouter,
}));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
