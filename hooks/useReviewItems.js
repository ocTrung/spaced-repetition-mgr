import { useQuery } from 'react-query'

async function getReviewItems() {
  const res = await fetch('/api/reviewitems')
  return res.json()
}

export default function useReviewItems() {
  return useQuery('reviewItems', getReviewItems)
}