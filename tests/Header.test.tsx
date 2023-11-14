import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'
import React from 'react'

describe('Header', () => {
  it('"Products" text has to be in document', () => {
    render(<App />)
    expect(screen.getByText('Products')).toBeDefined();
  });
})