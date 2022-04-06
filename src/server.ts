import dotenv from "dotenv";
import http from "http";
import app from "./app";

dotenv.config();

const port = process.env.PORT || 5001;
const server = http.createServer(app);

app.set("port", port);

server.on("listening", () => {
  const address = server.address();
  const bind = "port : " + port;
  console.log(bind);
  console.log(address);
});

server.listen(process.env.PORT || 3001);
