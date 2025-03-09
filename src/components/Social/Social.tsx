import React from 'react';
import cx from 'classnames';

interface SocialProps {
  className?: string;
}

const linkClass = 'text-black dark:text-white transition-colors duration-150 ease-linear text-3xl';

export const Social = (props: SocialProps) => {
  const { className } = props;

  return (
    <section className={cx('flex gap-2', className)}>
      <a className={cx(linkClass, 'hover:text-black')} href="https://github.com/cy6eria" target="_blank" rel="noreferrer">
        <span className="icon-github" aria-label="Github" />
      </a>
      <a className={cx(linkClass, 'hover:text-blue-300')}  href="https://twitter.com/cy6eria" target="_blank" rel="noreferrer">
        <span className="icon-twitter" aria-label="Twitter" />
      </a>
      <a className={cx(linkClass, 'hover:text-blue-500')}  href="https://www.linkedin.com/in/cy6eria" target="_blank" rel="noreferrer">
        <span className="icon-linkedin" aria-label="Linked in" />
      </a>
      <a className={cx(linkClass, 'hover:text-rose-500')}  href="https://www.instagram.com/cy6eria" target="_blank" rel="noreferrer">
        <span className="icon-instagram" aria-label="Instagram" />
      </a>
      <a className={cx(linkClass, 'hover:text-blue-700')}  href="https://www.facebook.com/cy6eria" target="_blank" rel="noreferrer">
        <span className="icon-facebook" aria-label="Facebook" />
      </a>
    </section>
  );
}
