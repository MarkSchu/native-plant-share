import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page.tsx';

describe('Home', () => {
    it ('renders a title', () => {
        render(<Home />)
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    it ('renders a find plants link', () => {
        render(<Home />);
        const findLink = screen.getByText('Find Plants');
        expect(findLink).toBeInTheDocument();
    });

    it ('renders a share plants link', () => {
        render(<Home />);
        const shareLinke = screen.getByText('Share Plants');
        expect(shareLinke).toBeInTheDocument();
    });
});