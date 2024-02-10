import {
  ADD_LIKE_TO_POST,
  CREATE_A_POST,
  DELETE_POST_BY_ID,
  GET_ALL_POSTS_NO_LIMITS
} from "../../database/queries/posts.queries.js";
import {query} from "../../database/db.js";

export class PostService {

  constructor() {
  }

  async getPosts(paginationDto) {

    const [postsResult] = await Promise.all([
      query(GET_ALL_POSTS_NO_LIMITS)
    ]);

    return postsResult?.rows;

  }

  async createPost(createPostDto) {

    const {titulo, descripcion, url, likes} = createPostDto;

    const [result] = await Promise.all([
      query(CREATE_A_POST, [titulo, url, descripcion, likes])
    ]);

    const [newPost] = result.rows;

    return newPost;
  }

  async addLikeToPost({postId}) {

    const [result] = await Promise.all([
      query(ADD_LIKE_TO_POST, [postId])
    ]);

    const [postUpdated] = result.rows;

    return postUpdated;
  }

  async deletePostById({postId}) {
    const [result] = await Promise.all([
      query(DELETE_POST_BY_ID, [postId])
    ]);

    const [postDeleted] = result.rows;

    return postDeleted;
  }

}