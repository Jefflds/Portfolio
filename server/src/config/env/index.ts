import * as dotenv from "dotenv";

dotenv.config();

export const EnvVariables = {
    node_env: process.env.NODE_ENV,
    frontEndIP: process.env.FRONT_END_IP,
    Port: process.env.PORT,
};