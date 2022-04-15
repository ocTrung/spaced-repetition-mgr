import { useContext, createContext, useState } from 'react';
import { ReviewItem } from '@/utils/reviewItemUtils'

const testSchedule = [
  new ReviewItem('HTML Fundamentals', new Date()),
  // new ReviewItem('CSS Fundamentals', new Date()),
  // new ReviewItem('Identify notes on treble cleff', new Date()),
]

const ScheduleContext = createContext()

export function ScheduleProvider({ children }) {
  const scheduleState = useState(testSchedule)

  return (
    <ScheduleContext.Provider value={scheduleState}>
      {children}
    </ScheduleContext.Provider>
  )
}

export function useScheduleContext() {
  return useContext(ScheduleContext)
}