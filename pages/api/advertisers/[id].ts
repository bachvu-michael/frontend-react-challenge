import type { NextApiRequest, NextApiResponse } from 'next'
import mockupData from '../../../mockup-data/advertisers.json'

export default function advertiserHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, slug },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      const indexDetail = mockupData.find((e) => e.id.toString() == id)
      res.status(200).json(indexDetail)
      // res.status(200).json(indexDetail)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
