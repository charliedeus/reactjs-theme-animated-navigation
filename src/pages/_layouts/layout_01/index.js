import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Layout01({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Layout01.propTypes = {
  children: PropTypes.element.isRequired,
};
