import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const LinkedInBadge =() => {
    return(
            <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="jamie-wooltorton-43907214"><a className="LI-simple-link" href='https://uk.linkedin.com/in/jamie-wooltorton-43907214?trk=profile-badge'>Jamie Wooltorton</a></div>
        );
}

const AboutPage =() => {
    return (
        <div>
            <Jumbotron>
                <h4>About me:</h4>
                <p>I'm a freelance developer and digital nomad, currently living and working in...<s> London</s>, <s>Berlin</s>, <s>Barcelona</s>, Chamonix</p>
                <p>Feel free to contact me with feedback/comments/suggestions <a href="mailto:james_wooltorton@hotmail.com">Email</a>.</p>
                {/* <Map /> */}
                <LinkedInBadge />

                <p><a href="https://github.com/squeakycheese75/relent">GitHub Project</a></p>
                <p><a href="https://github.com/https://github.com/squeakycheese75/relent/blob/master/LICENSE/relent">License</a> </p>   
            </Jumbotron>
           
        </div>
    );
};

export default AboutPage;