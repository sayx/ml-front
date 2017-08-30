import ApiUtils from './ApiUtils'

export const Api = {  
  login: function(self) {
    return fetch(
		'http://212.193.45.225/MLServer/oauth/token',
		{
			method: 'POST',
			body: 'grant_type=password&username=' + self.state.username + '&password=' + self.state.password
		})
		.then(ApiUtils.checkStatus)
		.then(response => response.json())
		.then(response => {
			self.props.login({
				name: self.state.username,
				token: response.access_token,
				token_type: response.token_type
			})
		})
    .catch(function (e) {
      self.setState({
        Zsubmited: true,
      })
      console.log(e)
    })
  },

  getWhells: function(self) {
    console.log(self)
    return fetch('http://212.193.45.225/MLServer/api/wells',
    	   {
    	   	method: 'GET',
    	   	headers: {
    	   		'authorization': self.state.token_type + ' ' + self.state.token,
            'Accept': 'application/json'
    	    },
    	    credentials: 'same-origin'
      })
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .then(response => {
      	console.log('Whells ' + response)
  	    self.props.login({
  	      whells: response
  	    })
      })
      .catch(function (e) { console.log(e) })
  }
}