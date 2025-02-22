import { describe, expect, it } from 'bun:test'
import { BetDescription, BetId, BetOutcome, BetTitle } from './index.validator'

describe('BetId', () => {
  it('should throw if the value empty', () => {
    expect(() => BetId('')).toThrow()
  })

  it('should not throw for a valid BetId', () => {
    expect(() => BetId('14178')).not.toThrow()
  })
})

describe('BetTitle', () => {
  it('should throw if the value empty', () => {
    expect(() => BetTitle('')).toThrow()
  })

  it('should not throw for a valid BetTitle', () => {
    expect(() => BetTitle('Trump cryptocurrency executive order in first week?')).not.toThrow()
  })
})

describe('BetDescription', () => {
  it('should throw if the value empty', () => {
    expect(() => BetDescription('')).toThrow()
  })

  it('should not throw for a valid BetDescription', () => {
    expect(() =>
      BetDescription("This is a market on predictions for the Federal Reserve's interest rates in January 2025. "),
    ).not.toThrow()
  })
})

describe('BetOutcome', () => {
  it('should throw if the value is not a valid outcome', () => {
    expect(() => BetOutcome('')).toThrow()
    expect(() => BetOutcome('lose')).toThrow()
  })

  it('should not throw for a valid BetOutcome', () => {
    expect(() => BetOutcome('yes')).not.toThrow()
    expect(() => BetOutcome('no')).not.toThrow()
  })
})
