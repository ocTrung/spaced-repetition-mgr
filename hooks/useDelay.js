import { useState, useEffect } from "react"

export default function useDelay(differentiator, dependancy) {
  const [delay, setDelay] = useState('0ms')

  useEffect(() => {
    setDelay('0ms')
  }, [dependancy])

  // Only add animation delay when entire schedule renders
  useEffect(() => {
    setDelay(differentiator * 200 + 'ms')
  }, [])

  return delay
}