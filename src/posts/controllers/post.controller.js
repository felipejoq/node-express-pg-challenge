import {PaginationDto} from "../../common/dtos/pagination.dto.js";
import {handleError} from "../../config/errors/handler.error.js";
import {CreatePostDto} from "../dtos/create-post.dto.js";

export class PostController {
  constructor(postService) {
    this.postService = postService;
  }

  getPosts = (req, res) => {
    const { page, limit } = req.query;
    const [error, pagination] = PaginationDto.create({
      page, limit
    });

    if (error) return res.status(400).json({ error });

    this.postService.getPosts(pagination)
      .then(data => res.json(data))
      .catch(e => handleError(e, res));
  }

  createPost = (req, res) => {

    const { titulo, descripcion, url } = req.body;

    const [error, createPostDto] = CreatePostDto.create({titulo, descripcion, url })

    if (error) return res.status(400).json({ error });

    this.postService.createPost(createPostDto)
      .then(data => res.json(data))
      .catch(e => handleError(e, res));

  }

}