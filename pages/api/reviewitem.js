import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const item = await prisma.reviewItem.create({
        data: req.body
      })
      res.status(201).json(item)
    }
  } catch (err) {
    console.log(err.message)
  }
}
