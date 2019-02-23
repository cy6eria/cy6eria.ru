import './MainPage.scss';

import React from 'react';
import { Helmet } from 'react-helmet';

import { Social } from '../../components';

export const MainPage = props => (
    <section className="main_page">
        <Helmet>
            <title>Главная - Eugene Gundorov (cy6eria)</title>
            <meta name="description" content="Привет. Меня зовут Евгений Гундоров (Eugene Gundorov) так же никому не известный как cy6eria. Я front-end разработчик. Увлекаюсь программированием, робототехникой, фотографией и музыкой." /> 
            <meta property="og:title" content="Главная - Eugene Gundorov (cy6eria)" />
            <meta property="og:description" content="Привет. Меня зовут Евгений Гундоров (Eugene Gundorov) так же никому не известный как cy6eria. Я front-end разработчик. Увлекаюсь программированием, робототехникой, фотографией и музыкой." />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://cy6eria.ru/about" />
            <meta property="og:image" content="http://res.cloudinary.com/cy6eria/image/upload/v1520800210/pic.jpg" />
        </Helmet>

        <div className="image" />
        <div className="content">
            <h1>Eugene Gundorov</h1>
            <h2>
                <span>developer</span>
                <span>  traveler</span>
                <span>  badass</span>
            </h2>

            <Social className="main_page__social_buttons" />                   
        </div>
    </section>
);
