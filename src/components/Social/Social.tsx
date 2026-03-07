import React from 'react';
import cx from 'classnames';

interface SocialProps {
  className?: string;
}

const linkClass = 'text-black dark:text-white transition-colors duration-150 ease-linear text-3xl';

const config = [
  { name: 'github', hoverColor: 'text-black', href: 'https://github.com/cy6eria' },
  // { name: 'twitter', hoverColor: 'text-blue-300', href: 'https://twitter.com/cy6eria' },
  { name: 'linkedin', hoverColor: 'text-blue-500', href: 'https://www.linkedin.com/in/cy6eria' },
  // { name: 'instagram', hoverColor: 'text-rose-500', href: 'https://www.instagram.com/cy6eria' },
  // { name: 'facebook', hoverColor: 'text-blue-700', href: 'https://www.facebook.com/cy6eria' },
]

export const Social = (props: SocialProps) => {
  const { className } = props;

  return (
    <section className={cx('flex gap-2', className)}>
      {config.map((i) => (
        <a key={i.name} className={cx(linkClass, `hover:${i.hoverColor}`)} href={i.href} target="_blank" rel="noreferrer">
          <span className={`icon-${i.name}`} aria-label={i.name} />
        </a>
      ))}
    </section>
  );
}
