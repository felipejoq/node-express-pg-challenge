import Joi from 'joi';

export const postSchema = Joi.object({
  titulo: Joi.string().min(10).required()
    .error(new Error('El título es requerido y debe tener mínimo 10 carácteres')),
  descripcion: Joi.string().min(10).required()
    .error(new Error('La descripción es requerida y debe tener mínimo 10 carácteres')),
  url: Joi.string().uri().required()
    .error(new Error('La url de la imagen debe ser válida y es requerida')),
});