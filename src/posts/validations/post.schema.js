import Joi from 'joi';

export const postSchema = Joi.object({
  id: Joi.number().min(1).optional()
    .error(new Error('El id no es válido')),
  titulo: Joi.string().min(1).required()
    .error(new Error('El título es requerido y debe tener mínimo 1 carácteres')),
  descripcion: Joi.string().min(5).required()
    .error(new Error('La descripción es requerida y debe tener mínimo 5 carácteres')),
  url: Joi.string().uri().required()
    .error(new Error('La url de la imagen debe ser válida y es requerida')),
});