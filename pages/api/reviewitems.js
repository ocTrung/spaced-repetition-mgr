import { prisma } from '../../db'
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req })

    if (!session) {
      res.redirect([403], '/')
    }

    const userId = session.user.id

    if (req.method === 'POST') {
      const item = await prisma.reviewItem.create({
        data: { ...req.body, userId: userId }
      })
      res.status(201).json(item)

    } else if (req.method === 'GET') {
      const reviewItems = await prisma.reviewItem.findMany({
        where: {
          userId: userId
        }
      })
      res.json(reviewItems)

    } else if (req.method === 'PUT') {
      const item = req.body
      const updateItem = await prisma.reviewItem.update({
        where: {
          id: item.id,
        },
        data: {
          EF: item.EF,
          lastReviewed: item.lastReviewed,
          intervals: item.intervals,
          sessionGrades: item.sessionGrades
        }
      })
      res.json(updateItem)
    }

  } catch (err) {
    console.log(err.message)
  }
}
