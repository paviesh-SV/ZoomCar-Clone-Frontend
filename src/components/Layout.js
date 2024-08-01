import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Dropdown, Menu, Row } from 'antd';

function Layout(props) {
  // Retrieve and parse user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Define menu items conditionally based on the existence of a user
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      
      <Menu.Item>
        <Link to="/userbookings">Bookings</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/admin">Admin</Link>
      </Menu.Item>

      <Menu.Item onClick={() => {
        localStorage.removeItem('user');
        window.location.href = '/login'; // Redirect to login page
      }}>
        <a href="#" style={{ color: 'blue' }}>
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <header className='header boxShadow1'>
        <Row gutter={16} justify='center'>
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <b><Link to='/' style={{ color: 'blue' }}>PSV Car Rental</Link></b>
              </h1>
              <Dropdown overlay={menu} placement="bottomRight">
                <Button>
                  {user ? user.username : 'Guest'}
                </Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </header>

      <main className='content'>
        {props.children}
      </main>

      <footer className='footer text-center'>
        <br />
        <p>Made by Paviesh</p>
      </footer>
    </>
  );
}

export default Layout;
