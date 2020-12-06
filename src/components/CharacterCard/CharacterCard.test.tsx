import { render } from '@testing-library/react';
import CharacterCard from './CharacterCard';

test('Render CharacterCard correctly', () => {
  const characterCard = render(<CharacterCard {...(global as any).mockCharacter} />);
  expect(characterCard).toBeTruthy();
});
