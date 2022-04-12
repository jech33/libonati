import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Menu from '@mui/icons-material/Menu';
import './header.scss';
import { Link } from 'react-router-dom';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface Props {
  navLinks?: any;
}

const MenuButton:React.FC<Props> = (props) => {
  const { navLinks } = props;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (
    anchor: Anchor,
    open: boolean,
  ) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown'
        && ((event as React.KeyboardEvent).key === 'Tab'
          || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {navLinks.map((link:any) => (
        <ul key={link.text}>
          <li className="navLink p-5"><Link to={link.to}>{link.text}</Link></li>
        </ul>
      ))}
    </Box>
  );

  const anchor = 'right';

  return (
    <div>
      <Button
        className="menuIcon"
        onClick={toggleDrawer(anchor, true)}
        disableRipple
      >
        <Menu />
      </Button>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: '#2a2a2a',
            color: '#b48b47',
          },
        }}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
};

MenuButton.defaultProps = { navLinks: [] };

export default MenuButton;
