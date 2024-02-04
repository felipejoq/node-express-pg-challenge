import { Router } from "express";
import {PostRoutes} from "../../src/posts/routes/post.routes.js";

export class AppRouter {

  static get routes() {

    const AppRouter = Router();

    AppRouter.use('/posts', PostRoutes.routes);

    return AppRouter;

  }

}