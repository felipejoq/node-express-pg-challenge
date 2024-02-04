export const GET_ALL_POSTS = `
SELECT *
FROM posts
ORDER BY id DESC
OFFSET $1
LIMIT $2
`;

export const GET_ALL_POSTS_NO_LIMITS = `
SELECT *
FROM posts
ORDER BY id DESC
`;

export const COUNT_TOTAL_POSTS = `
SELECT count(*)
FROM posts
`

export const CREATE_A_POST = `
INSERT INTO posts (titulo, img, descripcion, likes)
VALUES ($1, $2, $3, $4) RETURNING *
`;