import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Layout02({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Layout02.propTypes = {
  children: PropTypes.element.isRequired,
};
