import { useMutation, useQueryClient } from "react-query";

async function deleteReviewItem(itemId) {
  const res = await fetch(`/api/reviewitem/${itemId}`, {
    method: 'DELETE'
  })

  return res.json()
}

export default function useDeleteReviewItem() {
  const queryClient = useQueryClient()

  const mutation = useMutation(item => deleteReviewItem(item.id), {
    onSuccess: () => queryClient.invalidateQueries('reviewItems'),
  })

  return mutation
}