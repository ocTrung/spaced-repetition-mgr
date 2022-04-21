export class ReviewItem {
  constructor(title, startDate) {
    this.title = title
    this.startDate = startDate
    this.lastReviewed = startDate
    this.EF = 2.5 //default value
    this.intervals = []
    this.sessionGrades = []
  }
}

export function getNextReviewDate(reviewItem) {
  const newDate = new Date(reviewItem.lastReviewed)
  const days = reviewItem.intervals.at(-1) || 0
  newDate.setDate(newDate.getDate() + days)

  return newDate
}

export function addReviewSession(reviewItem, sessionGrade) {
  const nextEF = calcEF(reviewItem.EF, sessionGrade)
  const nextInterval = calcNextInterval(reviewItem.intervals.length, nextEF)
  return {
    ...reviewItem,
    EF: nextEF,
    lastReviewed: new Date(),
    intervals: [...reviewItem.intervals, nextInterval],
    sessionGrades: [...reviewItem.sessionGrades, sessionGrade]
  }
}

function calcNextInterval(intervalCount, EF) {
  // adjust from zero index
  intervalCount = intervalCount + 1

  if (intervalCount === 1)
    return 1
  if (intervalCount === 2)
    return 6

  return Math.floor(intervalCount * EF)
}

// Formula provided by SM2 algorithm
// EF: prev value of the E-Factor, sessionGrade: rating for previous review session
export function calcEF(EF, sessionGrade) {
  return EF + (0.1 - (5 - sessionGrade) * (0.08 + (5 - sessionGrade) * 0.02))
}

