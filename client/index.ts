import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

async function main() {
  try {
    const result = await client.user.getUser.query();
    console.log(result); // should log "Hello World"

    const teamResult = await client.team.getTeam.query();
    console.log(teamResult); // should log "Team data"
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
