import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Logout, ShoppingCart } from '@mui/icons-material';
import { AuthContext } from '../context/AuthProvider';
import { Badge } from '@mui/material';
import { ClientContext } from '../context/ClientProvider';

// const pages = ['Главная', 'Добавить продукт', 'Продукты'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const { user, logOut, unsubscribe, setError } = React.useContext(AuthContext);
  const { cartCount, bestCount } = React.useContext(ClientContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleLogout = async () => {
    try {
      await logOut();
      unsubscribe();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <AppBar style={{ backgroundColor: 'black' }} position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img width='70' style={{ borderRadius: '50%' }} src="https://scontent.ffru2-1.fna.fbcdn.net/v/t1.6435-9/160501954_252904929866815_7195851692240494424_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JgeLCfFtel8AX9WEEiX&_nc_ht=scontent.ffru2-1.fna&oh=00_AT_2M4nIGDR_KP9lqrcxvAT-eAnebKr-rehqSECA3TJ5Vw&oe=622893B9" alt="" />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img width='70' style={{ borderRadius: '50%' }} src="https://scontent.ffru2-1.fna.fbcdn.net/v/t1.6435-9/160501954_252904929866815_7195851692240494424_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JgeLCfFtel8AX9WEEiX&_nc_ht=scontent.ffru2-1.fna&oh=00_AT_2M4nIGDR_KP9lqrcxvAT-eAnebKr-rehqSECA3TJ5Vw&oe=622893B9" alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link style={{ textDecoration: 'none' }} to='/'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Главная
              </Button>
            </Link>

            {/* <Link style={{ textDecoration: 'none' }} to='/add'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Добавить продукты
              </Button>
            </Link>

            <Link style={{ textDecoration: 'none' }} to='/admin-product'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Admit Panel
              </Button>
            </Link> */}

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link to="/cart">
              <IconButton size="large" style={{ color: 'white' }}>
                <Badge color="error" badgeContent={cartCount}>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/best">
              <IconButton size="large" style={{ color: 'white' }}>
                <Badge color="error" badgeContent={bestCount}>
                  <img width='30px' src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="" />
                </Badge>
              </IconButton>
            </Link>
            <MenuItem className="menuItem">
              {user ? (
                <>
                  <IconButton>{user.displayName}</IconButton>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt={user.displayName} src={user.photoURL} />
                  </IconButton>
                  <IconButton className="button" onClick={handleLogout}>
                    Log out
                  </IconButton>
                </>
              ) : (
                <Link to="/login" style={{color:'white'}}>SIGN IN</Link>
              )}
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
