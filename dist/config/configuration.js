"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const path_1 = require("path");
exports.default = () => ({
    database: {
        type: 'mysql',
        entities: [(0, path_1.join)(__dirname, process.env.ENTITY_PATH)],
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.PORT,
        database: process.env.DB_SCHEMA,
        synchronize: true,
        logging: true,
    },
});
//# sourceMappingURL=configuration.js.map