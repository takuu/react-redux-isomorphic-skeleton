let logoFull;
if (process.env.BROWSER) {
  logoFull = require('./logo-full.png');
  require('./styles.css');
}

import React, { PropTypes } from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="Header">
          <div className="container">
            <a className="Header-brand" href="/" title='Staty'>
              <img className="Header-brandImg" src={logoFull} width="110" height="32" alt="React" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
