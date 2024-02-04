export class Post {
  constructor({ titulo, descripcion, img, likes = 0 }) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.img = img;
    this.likes = likes;
  }
}