import React from 'react';
import SlackFeedback from 'react-slack-feedback';

//require('dotenv').config()
//import { ok } from 'assert';
//var cors = require('cors')

//ES6 functional class component 
/*class AboutPage extends React.Component{
    render(){
        return(
            <div>
                <h1>About</h1>
                <p>
                    React, Redux demo in es6
                </p>
            </div>
        );
    };
}
*/
//ES6 Stateless component

const AboutPage =(props) => {
    return (
        <div className="container-fluid">
            <p>Constructed by <a href="mailto:james_wooltorton@hotmail.com">Jamie Wooltorton</a>.</p>
            <p><a href="https://github.com/squeakycheese75/relent">GitHub Project</a></p>
            <p><a href="https://github.com/https://github.com/squeakycheese75/relent/blob/master/LICENSE/relent">License</a> </p>   
                          
            <p>Env vars for testing:</p>
            <p> REACT_APP_SLACK_API_HOOK = {process.env.REACT_APP_SLACK_API_HOOK}</p>

            <SlackFeedback
                    onSubmit={sendToSlack}
                    onImageUpload={uploadImage}
                    user="SqueakyCheese"
                    emoji=":bug:"
                    channel="#feedback"
                />
        </div>
    );
};


function sendToSlack(payload) {
    fetch(process.env.REACT_APP_SLACK_API_HOOK, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
      },
      body: JSON.stringify(payload)
    }).then(res => JSON.parse(res))
      .then(res => {
        console.log(res.status, res.statusText);
        if (res.status >= 200 && res.status < 300) {
          this.sent();
        } else {
          this.error(res);
        }
      });
      }

  
  /**
   * Upload image to server
   * @method uploadImage
   * @param  {File} file
   * @return {null}
   */
  
  function uploadImage(file) {
    var form = new FormData();
    form.append('image', file);
  
    fetch(process.env.REACT_APP_SLACK_API_HOOK, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
      },
      body: form
    })
      .then(res => {
        console.log(res.status, res.statusText);
        if (res.status < 200 || res.status >= 300) {
          this.uploadError(res.statusText);
        }
  
        return res.json();
      })
      .then(url => this.imageUploaded(url));
  }
  


export default AboutPage;