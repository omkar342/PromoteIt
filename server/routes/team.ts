import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const teamRouter = t.router({
  getTeam: t.procedure.query(() => {
    return 'Team data';
  }),
});

export type TeamRouter = typeof teamRouter;
