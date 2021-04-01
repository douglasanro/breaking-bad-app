import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import CharacterCard from './CharacterCard';
import mainTheme from 'themes/mainTheme';
import { mockCharacter } from 'setupTests';

const setupRender = ({ name, birthday, img }: React.ComponentProps<typeof CharacterCard>) =>
  render(<CharacterCard name={name} birthday={birthday} img={img} />, {
    wrapper: ({ children }) => <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>,
  });

test('Render CharacterCard correctly', () => {
  const { container } = setupRender({
    name: mockCharacter.name,
    birthday: mockCharacter.birthday,
    img: mockCharacter.img,
  });
  expect(container).toMatchSnapshot();
});
