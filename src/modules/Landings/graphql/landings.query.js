export function refetchData(data, fetchMore, setLoadlandings, loadMore) {
  setLoadlandings(true)
  fetchMore({
    variables: {
      after: data.landings.list[data.landings.list.length - 1].id,
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
