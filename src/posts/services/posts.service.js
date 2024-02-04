import {CREATE_A_POST, GET_ALL_POSTS_NO_LIMITS} from "../../database/queries/posts.queries.js";
import {query} from "../../database/db.js";

export class PostService {

  constructor() {
  }

  async getPosts(paginationDto) {

    // const {page, limit} = paginationDto;

    // const [postsResult, totalPostsResult] = await Promise.all([
    //  query(GET_ALL_POSTS, [(page - 1) * limit, limit]),
    //  query(COUNT_TOTAL_POSTS)
    //]);

    // const posts = postsResult?.rows;
    // const total = parseInt(totalPostsResult?.rows[0].count);
    // return getResultsWithPagination({resource: 'posts', data: posts, total, page, limit});

    const [postsResult, totalPostsResult] = await Promise.all([
      query(GET_ALL_POSTS_NO_LIMITS)
    ]);

    return postsResult?.rows;

  }

  async createPost(createPostDto) {

    const { titulo, descripcion, url, likes } = createPostDto;

    const [result] = await Promise.all([
      query(CREATE_A_POST, [titulo, url, descripcion, likes])
    ]);

    const [newPost] = result.rows;

    return newPost;
  }


}