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
      localStorage.setItem('user', JSON.stringify(
          {
            name: self.state.username,
            token: response.access_token,
            token_type: response.token_type
          }
        )
      )
      this.getWhells(self);
		})
    .catch(function (e) {
    })
  },

  getWhells: function(self) {
    console.log('GW')
    var user = JSON.parse(localStorage.getItem('user'))
    return fetch('http://212.193.45.225/MLServer/api/wells',
    	   {
    	   	method: 'GET',
    	   	headers: {
    	   		'authorization': user.token_type + ' ' + user.token,
            'Accept': 'application/json'
    	    },
    	    credentials: 'same-origin'
      })
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .then(response => {
        localStorage.setItem('whells', JSON.stringify(response))
      })
      .catch(function (e) { console.log(e) })
  }
}