import * as http from "http";
import { getFilterEps, getListEp } from "./controllers/podcasts_controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET" && req.url === "/api/list") {
      await getListEp(req, res);
    }
    if (req.method === "GET" && req.url === "/api/episode") {
      await getFilterEps(req, res) 
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
