import { useMutation, useQueryClient } from "react-query"

async function postReviewItem(newItem) {
  try {
    const res = await fetch('/api/reviewitems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })

    return res.json()

  } catch (error) {
    throw new Error(error.message)
  }
}

export default function useAddReviewItems() {
  const queryClient = useQueryClient()

  const mutation = useMutation(
    newReviewItem => postReviewItem(newReviewItem),
    {
      onSuccess: () => queryClient.invalidateQueries('reviewItems')
    })

  return mutation
}