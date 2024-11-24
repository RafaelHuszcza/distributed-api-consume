export const moviesQueryKeys = {
  all: ['/movies'],
  details: () => [...moviesQueryKeys.all, 'detail'],
  detail: (id: string) => [...moviesQueryKeys.details(), id],
  query: (query: string) => [...moviesQueryKeys.all, 'query', query],
}
