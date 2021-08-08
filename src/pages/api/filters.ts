import { NextApiRequest, NextApiResponse } from 'next'

const FILTERS = [
  {
    key: 'bitcoin',
    title: 'Bitcoin'
  },
  {
    key: 'blockchain',
    title: 'Blockchain'
  },
  {
    key: 'tutorial',
    title: 'Tutorial'
  }
]

export default function getFilters(req: NextApiRequest, res: NextApiResponse) {
  const filters = [
    {
      key: 'all',
      title: 'All'
    },
    ...FILTERS
  ]

  return res.status(200).json({ filters })
}
