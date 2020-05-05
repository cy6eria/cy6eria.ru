import React, { useState, useCallback } from 'react';
import cx from 'classnames';

import { MainNavigation } from '../MainNavigation';
import { Loader } from '../Loader';

import './Sidebar.scss';

/**
 * Боковая панель.
 */
export const Sidebar = ({ isLoading = false }) => {
  const [open, setOpen] = useState(false);
  const onToggle = useCallback(() => setOpen(!open), [open]);

  const catcher = useCallback(e => e.stopPropagation, []);

  return (
    <>
      <div
        className={cx('overlay', { show: open || isLoading })}
        onClick={onToggle}
      >
        <Loader show={isLoading} />
      </div>

      <button
        className={cx('trigger', { show: !open })}
        onClick={onToggle}
        aria-label={open ? 'Скрыть меню' : 'Показать меню'}
      >
        <div />
      </button>

      <aside
        className={cx('sidebar', { open })}
        onClick={catcher}
      >
        <div className="content">
          <MainNavigation onToggle={onToggle} />
        </div>
      </aside>
    </>
  );
}
