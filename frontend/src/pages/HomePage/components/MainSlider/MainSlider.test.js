import { render, screen } from '@testing-library/react';
import { MainSlider } from './MainSlider.component';

describe('should render components correctly', () => {
	test('it render MainSlider as it should be', () => {
		render(<MainSlider />);

		expect(screen.getAllByRole('img')).toHaveLength(1);
		expect(screen.getAllByTestId('mainSlider_dot')).toHaveLength(6);

	});
});
