import React, { FC } from 'react';

import './Layout.scss';

import { Sidebar } from '../Sidebar';

export const Layout: FC = React.memo((props) => (
  <>
    <div className="main">
      {props.children}
    </div>
    {/* <Sidebar /> */}
  </>
));
