import React from 'react';
import cx from 'classnames';
import style from './Social.module.css';

interface SocialProps {
  className?: string;
}

export const Social = (props: SocialProps) => {
  const { className } = props;

  return (
    <section className={cx(style.social, className)}>
      <a href="https://github.com/cy6eria" target="_blank" rel="noreferrer">
        <span className="icon-github" aria-label="Github" />
      </a>
      <a href="https://twitter.com/cy6eria" target="_blank" rel="noreferrer">
        <span className="icon-twitter" aria-label="Twitter" />
      </a>
      <a href="https://vk.com/cy6eria" target="_blank" rel="noreferrer">
        <span className="icon-vk" aria-label="Vkontakte" />
      </a>
      <a href="https://www.instagram.com/cy6eria" target="_blank" rel="noreferrer">
        <span className="icon-instagram" aria-label="Instagram" />
      </a>
      <a href="https://www.facebook.com/cy6eria" target="_blank" rel="noreferrer">
        <span className="icon-facebook" aria-label="Facebook" />
      </a>
    </section>
  );
}
