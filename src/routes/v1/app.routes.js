import { Router } from "express";
import {PostRoutes} from "../../posts/routes/post.routes.js";

export class AppRouter {

  static get routes() {
    const AppRouter = Router();

    AppRouter.use('/posts', PostRoutes.routes);

    return AppRouter;
  }

}