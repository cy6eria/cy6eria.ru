import React from 'react';
import { Helmet } from 'react-helmet';

import { Social } from '../../components';

import './AboutPage.scss';

export const AboutPage = React.memo(props => (
    <article className="about-page">
        <Helmet>
            <title>Обо мне - Eugene Gundorov (cy6eria)</title>
            <meta name="description" content="Привет. Меня зовут Евгений Гундоров (Eugene Gundorov) так же никому не известный как cy6eria. Я front-end разработчик. Увлекаюсь программированием, робототехникой, фотографией и музыкой." />
            <meta property="og:title" content="Обо мне - Eugene Gundorov (cy6eria)" />
            <meta property="og:description" content="Привет. Меня зовут Евгений Гундоров (Eugene Gundorov) так же никому не известный как cy6eria. Я front-end разработчик. Увлекаюсь программированием, робототехникой, фотографией и музыкой." />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://cy6eria.ru/about" />
            <meta property="og:image" content="http://res.cloudinary.com/cy6eria/image/upload/v1520800210/pic.jpg" />
        </Helmet>

        <h1>Привет!</h1>
        <p>Меня зовут Гундоров Евгений (<span lang="en">Eugene Gundorov</span>). Я также никому неизвестен как <strong>cy6eria</strong> (но я работаю над этим). Я живу в <city>Казани</city>, работаю front-end разработчиком и увлекаюсь программированием, робототехникой, фотографией, музыкой, а также люблю путешествовать.</p>
        <p>Здесь я рассказываю о своем опыте, с какими проблемами я сталкивался и какие решения я нашел. Вы хотите что-то уточнить или может быть вы не согласны? Не стесняйтесь, вы можете связаться со мной в социальных сетях. Ссылки на них вы можете найти внизу страницы.</p>
        <figure>
            <img src="http://res.cloudinary.com/cy6eria/image/upload/v1520800210/pic.jpg" alt="Красивая русая девушка показывает пальцем на парня в очках."/>
            <figcaption>Саша показывает кто тут cy6eria.</figcaption>
        </figure>

        <Social />
    </article>
));
