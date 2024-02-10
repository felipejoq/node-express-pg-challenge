import {postSchema} from "../validations/post.schema.js";
import Joi from "joi";

export class IdPostDto {
  constructor({postId}) {
    this.postId = postId;
  }

  static create({postId}) {

    const result = Joi.object({
      id: postSchema.extract('id')
    }).validate({id: postId});

    if (result.error)
      return [result.error.message, null];

    return [null, new IdPostDto({postId})];

  }
}