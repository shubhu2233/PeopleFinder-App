import React, { Component } from 'react';
import ajax from 'superagent';

export default class About extends Component {
  constructor(props) {
      super(props);
		
      this.state = {
         data: 0
      }

     // this.setNewNumber = this.setNewNumber.bind(this)
   }
  componentWillMount() {
    ajax.get('https://aonavenue.aon.net/api/en-us/peoplehub?id=aonnet_ah0156366&id=aonnet_ah0156166&id=aonnet_ah82492&id=aonnet_a0173186')
        .end((error, response) => {
            if (!error && response) {
                this.setState({ data: response.body });
                console.log('done');
            } else {
                console.log('There was an error fetching from GitHub', error);
            }
        }
    );
  }
  render() {
    let content;
    if(this.state.data==0)
    {
      content='';
    }
    else
    {
    content = this.state.data.map(function(movie, i) {
      return <h3 key={movie.Name}>{movie.Name}</h3>
    })
  }
    return (

      <div className='About'>
        {content}
      </div>
    );
  }
}
