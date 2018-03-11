import React from 'react';
import cx from 'classnames';

import './Social.scss';

export class Social extends React.PureComponent {
    render () {
        const { className } = this.props;

        return (
            <section className={cx('social', className)}>
                <a href="https://github.com/cy6eria" target="_blank" rel="noopener">
                    <span className="icon-github" aria-label="Github" />
                </a>
                <a href="https://twitter.com/cy6eria" target="_blank" rel="noopener">
                    <span className="icon-twitter" aria-label="Twitter" />
                </a>
                <a href="https://vk.com/cy6eria" target="_blank" rel="noopener">
                    <span className="icon-vk" aria-label="Vkontakte" />
                </a>
                <a href="https://www.instagram.com/cy6eria" target="_blank" rel="noopener">
                    <span className="icon-instagram" aria-label="Instagram" />
                </a>
                <a href="https://www.facebook.com/cy6eria" target="_blank" rel="noopener">
                    <span className="icon-facebook" aria-label="Facebook" />
                </a>
            </section>
        );
    }
}
