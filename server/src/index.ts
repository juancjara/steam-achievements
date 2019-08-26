import { config } from 'dotenv';
config();

import server from './server';

server.listen(process.env.PORT, () => {
  console.log('listening');
});
