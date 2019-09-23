export function refetchData(data, fetchMore, setLoadlandings, loadMore) {
  let after =
    data.landings.list.length !== 0
      ? data.landings.list[data.landings.list.length - 1].id
      : 100000

  setLoadlandings(true)
  fetchMore({
    variables: {
      after: after,
    },
    updateQuery: (previousResult, { fetchMoreResult, ...rest }) => {
      console.log(fetchMoreResult)
      if (!fetchMoreResult) {
        return previousResult
      }
      return {
        ...previousResult,
        landings: {
          ...fetchMoreResult.landings,
          list: [
            ...previousResult.landings.list,
            ...fetchMoreResult.landings.list,
          ],
          nextPage: fetchMoreResult.landings.nextPage,
        },
      }
    },
  }).then(res => {
    setLoadlandings(false)
    loadMore(true)
  })
}

export const timeToUpdate =
  document.documentElement.offsetHeight -
  window.innerHeight -
  window.pageYOffset
