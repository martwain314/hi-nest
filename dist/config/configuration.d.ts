import 'dotenv/config';
declare const _default: () => {
    database: {
        type: string;
        entities: string[];
        username: string;
        password: string;
        host: string;
        port: string;
        database: string;
        synchronize: boolean;
        logging: boolean;
    };
};
export default _default;
