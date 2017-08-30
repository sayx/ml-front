import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './App.css'
import { login } from '../actions/user'
import { Api } from './api'
import { Header, Segment, Button, Checkbox, Form, Grid } from 'semantic-ui-react';

export class LoginContainer extends Component {
  constructor() {
    super()
    this.state = {      
      submited: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    login: PropTypes.func.isRequired
  };

  onSubmit(e) {
    e.preventDefault();
    Api.login(this)
  }

  handleChange(e) {
    this.setState({
        [e.target.name] : e.target.value
    });
  }

  onFormSubmit(e) {
      console.log('onFormSubmit', e)
      console.log('this.state', this.state);
  };

  render() {
    return (
    <div className='login-form'>
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div,
        body > div > div > div > div,
        body > div > div > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              {' '}Вход
            </Header>
            <Form size='large' onSubmit={ this.onSubmit }>
              <Segment stacked>
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  placeholder='Логин'
                  name='username'
                  name='username'
                  value={this.state.username}
                  onChange={(e) => this.handleChange(e)}
                />
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  placeholder='Пароль'
                  type='password'
                  name='password'
                  name='password'
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                />
                <Button color='teal' fluid size='large'>Вход</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
    </div>
    )
  }

}
export default connect(null, { login })(LoginContainer)