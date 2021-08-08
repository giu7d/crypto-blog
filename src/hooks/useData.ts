import { useEffect, useState } from 'react'

export const useFilters = () => {
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    _load()
  }, [])

  const _load = async () => {
    try {
      const fetcher = await fetch('/api/filters')
      const response = await fetcher.json()
      setData(response.filters)
    } catch (error) {
      setData(undefined)
      setError(error)
    }
  }

  return {
    data: data || [],
    isLoading: !error && !data,
    isError: error
  }
}

export const useArticles = (filter = '') => {
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    _load()
  }, [filter])

  const _load = async () => {
    try {
      const fetcher = await fetch(`/api/articles?filter=${filter}`)
      const response = await fetcher.json()
      setData(response.articles)
    } catch (error) {
      setData(undefined)
      setError(error)
    }
  }

  return {
    data: data || [],
    isLoading: !error && !data,
    isError: error
  }
}
