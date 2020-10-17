import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    //baseline test
    it('renders', () => {
        render(<Contact/>);
    });
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Contact Me is visible', () => {
    it('Contact Me text available links', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });
})

describe('Submit Button is visible', () => {
    it('submit button is available', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('submit-btn')).toHaveTextContent('Submit');
    });
})
