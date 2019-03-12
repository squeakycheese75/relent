import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import LinkedInBadge from './LinkedInBadge';


const AboutPage =() => {
    return (
        <div>
            <Jumbotron>
                <h4>About me:</h4>
                <p>I'm a freelance developer and digital nomad, currently living and working in...<s> London</s>, <s>Berlin</s>, <s>Barcelona</s>, Chamonix</p>
                <p>Feel free to <a href="mailto:james_wooltorton@hotmail.com">email</a> me with feedback/comments/suggestions.</p>
                {/* <Map /> */}

                <LinkedInBadge />

            </Jumbotron>
           
        </div>
    );
};

export default AboutPage;