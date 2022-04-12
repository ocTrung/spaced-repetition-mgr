export class ReviewItem {
  constructor(title, startDate) {
    this.title = title
    this.startDate = startDate
    this.lastReviewed = startDate
    this.EF = 3 //default value
    this.intervals = []
  }

  // next() {
  //   const newDate = new Date(this.lastReviewed)
  //   const days = this.intervals.at(-1) || 0
  //   newDate.setDate(newDate.getDate() + days)
  //   return newDate
  // }
}

export function getNextReviewDate(reviewItem) {
  const newDate = new Date(reviewItem.lastReviewed)
  const days = reviewItem.intervals.at(-1) || 0
  newDate.setDate(newDate.getDate() + days)
  return newDate
}

export function addReviewSession(reviewItem, EF) {
  const nextInterval = calcNextInterval(reviewItem.intervals.length, EF)
  return {...reviewItem, EF: EF, lastReviewed: new Date(), intervals: [...reviewItem.intervals, nextInterval]}
}

function calcNextInterval(intervalCount, EF) {
  // adjust from zero index
  intervalCount = intervalCount + 1

  if (intervalCount === 1)
    return 1
  if (intervalCount === 2)
    return 6
  
  return intervalCount * EF
}

