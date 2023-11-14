import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'
import React from 'react'

describe('App', () => {
  it('Vite to be in document', () => {
    render(<App />)
    expect(screen.getByText('count is 0')).toBeDefined();
  })
})