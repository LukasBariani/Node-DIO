import { IncomingMessage, ServerResponse } from "http";
import { serviceListEp } from "../services/list_ep_services";
import { serviceFilterEps } from "../services/filter_eps_services";

export const getListEp = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await serviceListEp();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilterEps = async (req: IncomingMessage,res: ServerResponse) => {
  
  const content = await serviceFilterEps("flow");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
