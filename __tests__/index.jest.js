import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page.tsx';

describe('Home', () => {

    it ('renders a title', () => {
        render(<Home />)
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    it ('renders the nav bar', () => {
        render(<Home />);
        const nav = screen.getByTestId('nav');
        expect(nav).toBeInTheDocument();
    });

    it ('renders a share plants link', () => {
        render(<Home />);
        const findLink = screen.getByRole('link', {name: 'Share Plants'});
        expect(findLink).toHaveProperty('href', 'http://localhost/share')
    });

    it ('renders a find plants link', () => {
        render(<Home />);
        const shareLink = screen.getByRole('link', {name: 'Find Plants'});
        expect(shareLink).toHaveProperty('href', 'http://localhost/find')
    });
});