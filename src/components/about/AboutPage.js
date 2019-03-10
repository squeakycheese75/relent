import React from 'react';
//import {Jumbotron} from 'react-bootstrap';
//import Map from './Map';


const AboutPage =(props) => {
    return (
        <div className="container-fluid">
           <h1>About</h1>
            <p>Feedback to: <a href="mailto:james_wooltorton@hotmail.com">Jamie Wooltorton</a>.</p>
            <p>Currently living and working in.... <s> London</s>, <s>Berlin</s>, <s>Barcelona</s>, Chamonix</p>
            {/* <Map /> */}
            <p><a href="https://github.com/squeakycheese75/relent">GitHub Project</a></p>
            <p><a href="https://github.com/https://github.com/squeakycheese75/relent/blob/master/LICENSE/relent">License</a> </p>   
            <p>Version 0.1 beta</p>
        </div>
    );
};


// function sendToSlack(payload) {
//     fetch(process.env.REACT_APP_SLACK_API_HOOK, {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//       },
//       body: JSON.stringify(payload)
//     }).then(res => JSON.parse(res))
//       .then(res => {
//         console.log(res.status, res.statusText);
//         if (res.status >= 200 && res.status < 300) {
//           this.sent();
//         } else {
//           this.error(res);
//         }
//       });
//       }

  
//   /**
//    * Upload image to server
//    * @method uploadImage
//    * @param  {File} file
//    * @return {null}
//    */
  
//   function uploadImage(file) {
//     var form = new FormData();
//     form.append('image', file);
  
//     fetch(process.env.REACT_APP_SLACK_API_HOOK, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//       },
//       body: form
//     })
//       .then(res => {
//         console.log(res.status, res.statusText);
//         if (res.status < 200 || res.status >= 300) {
//           this.uploadError(res.statusText);
//         }
  
//         return res.json();
//       })
//       .then(url => this.imageUploaded(url));
//   }
  


export default AboutPage;