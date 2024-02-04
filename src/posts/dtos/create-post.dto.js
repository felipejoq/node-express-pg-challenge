import {postSchema} from "../validations/post.schema.js";

export class CreatePostDto {
  constructor({titulo, descripcion, url }) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.url = url;
    this.likes = 0;
  }

  static create(body) {
    // Default values
    let {titulo, descripcion, url } = body;

    const result = postSchema.validate({titulo, descripcion, url });

    if (result.error)
      return [result.error.message, null];

    return [null, new CreatePostDto({titulo, descripcion, url })];

  }
}