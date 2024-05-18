// server/index.ts
import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { teamRouter } from "./routes/team";
import { userRouter } from "./routes/user";

const app = express();
const port = 3000;

const appRouter = router({
  user: userRouter,
  team: teamRouter,
})

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

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export type AppRouter = typeof appRouter;