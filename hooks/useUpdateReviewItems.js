import { useMutation, useQueryClient } from "react-query";

async function putReviewItem(updatedItem) {
  const res = await fetch('/api/reviewitems', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedItem)
  })

  return res.json()
}

export default function useUpdateReviewItems() {
  const queryClient = useQueryClient()

  const mutation = useMutation(
    (updatedReviewItem) => putReviewItem(updatedReviewItem),
    {
      onSuccess: () => queryClient.invalidateQueries('reviewItems')
    })

  return mutation
}