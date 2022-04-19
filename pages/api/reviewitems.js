import { prisma } from '../../db'

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const item = await prisma.reviewItem.create({
        data: req.body
      })
      res.status(201).json(item)

    } else if (req.method === 'GET') {
      const reviewItems = await prisma.reviewItem.findMany()
      res.json(reviewItems)

    } else if (req.method === 'PUT') {
      const item = req.body
      const updateItem = await prisma.reviewItem.update({
        where: {
          id: item.id
        },
        data: {
          EF: item.EF,
          lastReviewed: item.lastReviewed,
          intervals: item.intervals
        }
      })
      res.json(updateItem)
    }

  } catch (err) {
    console.log(err.message)
  }
}
