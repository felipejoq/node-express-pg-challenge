import { envs } from './config/plugins/envs.js';
import {AppRouter} from "../routes/v1/appRoutes.js";
import {Server} from "./Server.js";


// Función de arranque.
const main = async () => {
  const server = new Server({
    port: envs.PORT,
    routes: AppRouter.routes,
    acceptedOrigins: [],
  });

  await server.start();
}

// Inicialización.
(async () => {
  await main();
})();