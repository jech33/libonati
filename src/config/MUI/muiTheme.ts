import { createTheme } from '@mui/material';
import palette from './options/palette';
import typography from './options/typography';

const mainTheme = createTheme({
  palette,
  typography,
});

export default mainTheme;
