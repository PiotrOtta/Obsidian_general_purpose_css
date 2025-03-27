import { render, screen } from '@test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('has correct Obisidian page link', () => {
    render(<Welcome />);
    expect(screen.getByText('Obsidian')).toHaveAttribute('href', 'https://obsidian.md/');
  });
});
