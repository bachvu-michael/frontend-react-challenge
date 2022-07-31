// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mockupData from '../../mockup-data/advertisers.json'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query,
    method,
  } = req
  res.status(200).json(mockupData)
}

