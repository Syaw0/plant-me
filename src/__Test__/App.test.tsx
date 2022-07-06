import React from 'react';
import { render, screen , waitFor , fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import App from '../App';

describe("render App Correctly" , ()=>{
  test('renders App correctly',async () => {
    await waitFor(()=>render(<App/>)!) 
    expect(screen.getByTestId("app")).toBeInTheDocument()
    
  });
})
