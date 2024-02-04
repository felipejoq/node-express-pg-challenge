export const getResultsWithPagination = ({resource, data, total, page, limit}) => {

  const haveNext = (page * limit < total);
  const havePrev = (page - 1 > 0) && (page + limit <= total);

  return {
    page,
    limit,
    total,
    next: haveNext ? `/${resource}?page=${(page + 1)}&limit=${limit}` : null,
    prev: havePrev ? `/${resource}?page=${(page - 1)}&limit=${limit}` : null,
    [resource]: data
  }

}