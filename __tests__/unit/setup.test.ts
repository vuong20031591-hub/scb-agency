import { describe, it, expect } from 'vitest'

describe('Test Setup', () => {
  it('should run tests correctly', () => {
    expect(true).toBe(true)
  })

  it('should have access to DOM APIs', () => {
    expect(typeof window).toBe('object')
    expect(typeof document).toBe('object')
  })
})
