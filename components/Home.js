import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavBar, WellboresList } from '../layout/'

export class HomeContainer extends Component {
  constructor() {
    super()
    this.state = {      
      whells: ''
    };

    const self = this
  }

  render () {
    return (
    <div>
    	<header>
      		<NavBar path={location.pathname} />
      	</header>
      	<main className="segment">
      		<aside>
      			<WellboresList list={self} />
      		</aside>
      		<section>
				{`This is a protected page, you must be logged in if you are seeing this.`}
      		</section>
      	</main>
    </div>
  	)
  }
}

export default connect(state => ({ authData: state.user.data }))(HomeContainer)