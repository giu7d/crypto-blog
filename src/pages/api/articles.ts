import { NextApiRequest, NextApiResponse } from 'next'

const ARTICLES = [
  {
    id: '0x1',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'bitcoin'
  },
  {
    id: '0x2',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: ''
  },
  {
    id: '0x3',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'bitcoin'
  },
  {
    id: '0x4',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'tutorial'
  },
  {
    id: '1x1',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'blockchain'
  },
  {
    id: '2x1',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'blockchain'
  },
  {
    id: '3x1',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'bitcoin'
  }
]

export default function getArticles(req: NextApiRequest, res: NextApiResponse) {
  const { filter = '' } = req.query

  const articles = ARTICLES.filter(
    ({ category }) => category === filter || !filter.length || filter === 'all'
  )

  return res.status(200).json({ articles })
}
