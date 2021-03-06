
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/style.css';

class BrandingBar extends Component {

  render() {

    return (
      <div>
          <div className="u-ml flex flex--middle">
            <div className="u-ml-- flex flex--middle">
              <slot name="logo">
                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20"
                     viewBox="-280 372 50 50">
                    <path
                        d="M-255 422c-13.8 0-25-11.1-25-25 0-13.8 11.2-25 25-25s25 11.2 25 25C-230 410.9-241.2 422-255 422zM-255 373.2c-13.1 0-23.8 10.7-23.8 23.8s10.7 23.8 23.8 23.8 23.8-10.7 23.8-23.8S-241.8 373.2-255 373.2zM-233.8 404.1c0 0 0 0-0.1 0s-0.1 0-0.1-0.1c0 0 0.8-2.5 0.8-5.3 0-3-1.3-4.9-2.8-4.9 -1 0-1.7 0.7-1.7 1.7 0 1.9 2.3 2 2.3 6.1 0 1.7-0.4 3.3-0.9 5 -2.6 8.7-10.7 12.7-18.7 12.7 -3.7 0-6.3-0.8-7.1-1.1v-0.1l0.1-0.1c0.3 0.1 2.5 0.8 5.3 0.8 3 0 4.8-1.3 4.8-2.8 0-1-0.8-1.7-1.7-1.7 -1.9 0-2 2.4-6 2.4 -1.7 0-3.3-0.4-5.1-0.9 -8.6-2.6-12.7-10.7-12.7-18.8 0-3.9 1.1-7 1.1-7.1h0.1c0.1 0 0.1 0.1 0.1 0.1 -0.1 0.3-0.8 2.5-0.8 5.3 0 3 1.3 4.8 2.8 4.8 0.9 0 1.7-0.7 1.7-1.7 0-1.9-2.3-2.1-2.3-6.1 0-1.7 0.4-3.3 0.9-5.1 2.6-8.6 10.7-12.6 18.7-12.7 3.7 0 6.9 1.1 7.1 1.2v0.1c0 0.1-0.1 0.1-0.1 0.1s-2.1-0.9-5.3-0.9c-3 0-4.8 1.3-4.8 2.8 0 0.9 0.7 1.7 1.7 1.7 1.9 0 2-2.3 6-2.3 1.7 0 3.3 0.4 5.1 0.9 8.7 2.6 12.6 10.8 12.7 18.7C-232.6 401-233.8 404.1-233.8 404.1zM-245.7 398.2c-2.4 0-4.2 1.7-4.2 3.8 0 1.7 1 3.1 2.4 3.1 0.5 0 1-0.3 1-0.9 0-0.9-1.2-1.1-1.1-2.5 0-0.9 0.9-1.5 1.7-1.5 1.7 0 2.4 1.6 2.4 3.3 -0.1 2.6-2 4.3-4.2 4.3 -2.9 0-4.8-2.8-4.8-5.8 0-4.4 2.9-6.2 4.4-6.6 0 0 4 0.7 3.8-1 0-0.8-1.2-1.1-2-1.1 -0.9 0-1.8 0.3-1.8 0.3 -0.5-0.2-0.8-0.7-1-1.3 2.8-2.1 4.8-4.2 4.8-6.6 0-1.3-0.8-2.4-2.4-2.4 -2.8 0-5 3.6-5 6.8 0 0.5 0 1.1 0.1 1.6 -1.8 1.3-3.1 2.1-5.6 3.6 0-0.3 0.1-1.1 0.3-2.1 0.8-0.9 2-2.2 2-3.3 0-0.5-0.3-0.9-0.8-0.9 -1.4 0-2.4 2.1-2.7 3.5 -0.6 0.8-1.9 1.7-2.9 1.7 -0.8 0-1.1-0.8-1.2-1 2.6-0.9 5.9-4.5 5.9-7.8 0-0.7-0.3-2.2-2.4-2.2 -3.1 0-5.7 4.7-5.7 8.2 -1.1 0-1.5-1.2-1.5-2.1s0.4-1.8 0.4-2.1c0-0.3-0.1-0.6-0.5-0.6 -1 0-1.7 1.4-1.7 3 0.1 2.2 1.5 3.6 3.5 3.7 0.3 1.3 1.5 2.5 2.9 2.5 0.9 0 2-0.3 2.8-1 -0.1 0.5-0.1 0.9-0.2 1.3 -3 1.6-5.3 2.7-7.3 4.5 -1.6 1.5-2.5 3.4-2.5 4.9 0 2.1 1.3 4 4 4 3.2 0 5.6-2.5 6.8-6.1 0.6-1.7 0.8-4.1 0.9-6.3 3.2-1.8 4.7-2.8 6.4-4 0.2 0.4 0.4 0.6 0.7 0.8 -1.5 0.8-4.9 2.9-4.9 8 0 3.6 2.4 7.6 7.2 7.6 3.9 0 6.7-3.3 6.7-6.4C-241 400.8-242.6 398.2-245.7 398.2zM-264.7 407.9c-1 0-1.7-0.6-1.7-1.7 0-3 4.1-5.8 7.2-7.3C-259.8 403-261.2 407.7-264.7 407.9zM-262.4 391.5c0-2.3 2.3-6.6 3.6-6.2C-257.2 385.9-260.2 390.3-262.4 391.5zM-249.4 390.5c0-2.8 1.9-5.6 3-5.1C-245.2 386-247.3 388.7-249.4 390.5z"></path>
                </svg>
              </slot>
            </div>
            <div className="u-ml-- flex flex--middle">
              <slot name="title">
                <label>{this.props.title}</label>
              </slot>
            </div>
          </div>
      </div>
    );
  }
}

BrandingBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default BrandingBar;
