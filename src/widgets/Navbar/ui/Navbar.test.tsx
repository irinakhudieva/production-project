import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Sidebar', () => {
    test('with only first param', () => {
       render(<Navbar />);
       expect(screen.getByTestId('navbar')).toBeInTheDocument()

    });

   
});