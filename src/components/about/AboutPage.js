import React from 'react';

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

export default AboutPage;