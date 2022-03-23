import 'dotenv/config';
import { join } from 'path';

export default () => ({
  database: {
    type: 'mysql',
    // entities: [join(__dirname, process.env.ENTITY_PATH)],
    entities: [join(__dirname, process.env.ENTITY_PATH)],
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    database: process.env.DB_SCHEMA,
    synchronize: true, // 처음만 true하고 이후엔 false로 변경
    logging: true,
  },
});
