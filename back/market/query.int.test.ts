import { expect, it } from 'bun:test'
import { Market } from './query.ts'

it('latestPoliticalBets', async () => {
  // When
  const bets = await Market.latestPoliticalBets()

  // Then
  expect(bets).toBeArray()
})
