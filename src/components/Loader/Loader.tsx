import React, { FC } from 'react';

import './Loader.scss';

interface IProps {
  className?: string;
  show: boolean;
}

export const Loader: FC<IProps> = React.memo((props) => {
  const { className, show } = props;
  let view = null;

  if (show) {
    view = (
      <div className={`loader ${className}`}>
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    );
  }

  return view;
});
