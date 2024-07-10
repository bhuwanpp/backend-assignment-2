import dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.PORT,
  jwt: {
    secret: process.env.JWT_SECRET,
    acccessTokenExpiraryMS: 30000,
    refreshTokenExpiraryMS: 3000000,
  },
};
export default config;
