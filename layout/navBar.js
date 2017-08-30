import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { Menu, Icon } from 'semantic-ui-react'

const NavBar = () => (
  <Menu>
    <Menu.Menu>
      <Menu.Item>
        <Icon name='folder open' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='sticky note outline' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='thermometer three quarters' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='table' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='save' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='play' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='stop' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='marker' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='copy' />
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu>
      <Menu.Item>
        <Icon name='resize vertical' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='find' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='columns' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='sitemap' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='record' />
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item>
        <Icon name='volume up' />
      </Menu.Item>
      <Menu.Item>
        <Icon name='settings' />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);


NavBar.propTypes = {
  path: PropTypes.string.isRequired
}

export default NavBar