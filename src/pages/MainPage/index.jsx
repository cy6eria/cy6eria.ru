import './MainPage.scss';

import React from 'react';

export class MainPage extends React.Component {
    render () {
        return (
            <section className="main_page">
                <div className="image"/>
                <div className="content">
                    <h1>Eugene Gundorov</h1>
                    <h2>
                        <span>developer</span>
                        <span>  traveler</span>
                        <span>  badass</span>
                    </h2>

                    <div className="social">
                        <a href="https://github.com/cy6eria" target="_blank" rel="noopener">
                            <span className="icon-github" />
                        </a>
                        <a href="https://twitter.com/cy6eria" target="_blank" rel="noopener">
                            <span className="icon-twitter" />
                        </a>
                        <a href="https://vk.com/cy6eria" target="_blank" rel="noopener">
                            <span className="icon-vk" />
                        </a>
                        <a href="https://www.instagram.com/cy6eria" target="_blank" rel="noopener">
                            <span className="icon-instagram" />
                        </a>
                        <a href="https://www.facebook.com/cy6eria" target="_blank" rel="noopener">
                            <span className="icon-facebook" />
                        </a>
                    </div>
                </div>
            </section>
        );   
    }
}
