import { env } from "cloudflare:workers";

export const CORSHeaders = {
	"Access-Control-Allow-Origin": env.CLIENT_URL,
	"Access-Control-Allow-Methods": "GET, PUT, POST, DELETE",
};

// Potential multi-header accept-list resolution function to go here if/when needed
