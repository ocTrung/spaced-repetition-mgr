import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  try {
    console.log(req.body)

    const item = await prisma.reviewItem.create({
      data: req.body
    })

    // console.log(item)

    // res.status(200)
  } catch (err) {
    console.log(err.message)
  }
}
