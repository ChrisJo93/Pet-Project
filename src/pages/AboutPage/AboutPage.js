import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

//Can be deleted. Replace route with something else before deleting

const AboutPage = () => (
  <div className="container">
    <div>
      <p>Oh I got something good for this. </p>
    </div>
  </div>
);

export default AboutPage;
