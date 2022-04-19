import { prisma } from '../../../db'

export default async function handler(req, res) {
  try {
    const { itemid } = req.query

    if (req.method === 'DELETE') {
      const deleteItem = await prisma.reviewItem.delete({
        where: {
          id: parseInt(itemid)
        }
      })

      const itemsAfterDelete = await prisma.reviewItem.findMany()
      console.log('itemsAfterDelete', itemsAfterDelete)
      res.json(itemsAfterDelete)
    }

  } catch (err) {
    console.log(err.message)
  }
}
