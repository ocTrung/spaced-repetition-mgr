import { calcEF } from '../utils/reviewItemUtils'

test('calculate E-Factor', () => {
  const lastEF = 2.5
  const q = 4

  expect(calcEF(lastEF, q)).toBe(lastEF)
})