import { IncomingMessage, ServerResponse } from "http";

export const handler = async (req: IncomingMessage, res: ServerResponse) => {
	console.log(`Received request: ${req.method} ${req}`)
	return;
};
