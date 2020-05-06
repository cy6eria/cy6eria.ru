import React, { FC } from 'react';

import './Layout.scss';

export const Layout: FC = React.memo((props) => (
  <div className="main">
    {props.children}
  </div>
));
