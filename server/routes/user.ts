import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const userRouter = t.router({
  getUser: t.procedure.query(() => {
    return 'User data';
  }),
});

export type UserRouter = typeof userRouter;
