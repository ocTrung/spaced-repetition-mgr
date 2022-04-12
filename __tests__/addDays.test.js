import { addDays } from '../pages/index'

test('add days to date', () => {
  const startDate = new Date('2022-04-12T01:03:02.804Z')
  const targetDate = new Date('2022-04-13T01:03:02.804Z')
  const targetDate2 = new Date('2022-04-12T01:03:02.804Z')

  // when user adds 1 day
  expect(addDays(startDate, 1)).toEqual(targetDate)

  // when user doesnt enter argument for days param
  expect(addDays(startDate)).toEqual(targetDate2)
})