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
      onSuccess: (data, variables) => {
        const staleData = queryClient.getQueryData('reviewItems')
        const updatedData = staleData.map(d => d.id === variables.id ? data : d)
        queryClient.setQueryData(['reviewItems'], updatedData)
      }
    })

  return mutation
}