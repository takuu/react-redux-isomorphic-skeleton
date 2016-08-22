
if (process.env.BROWSER) require('../styles/global.css');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

@connect(state => {
})
export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  close () {
    const {dispatch} = this.props;
  }

  static fillStore (redux) {
  };

  render () {
    const { dispatch } = this.props;
    var childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { dispatch: dispatch });
    });

    return (
      <div>
        <Header/>
        <div style={{minHeight: '800px'}}>
          {childrenWithProps}
        </div>

        <Footer {...this.props.children} />

      </div>
    );
  }
}
