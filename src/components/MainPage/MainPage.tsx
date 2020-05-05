import React from 'react';
import Head from 'next/head';
import { Social } from '../../components';
import './MainPage.scss';

export const MainPage = props => (
  <>
    <section className="splash">
      <Head>
        <title>Главная - Eugene Gundorov (cy6eria)</title>
        <meta name="description" content="Привет. Меня зовут Евгений Гундоров (Eugene Gundorov) так же никому не известный как cy6eria. Я front-end разработчик. Увлекаюсь программированием, робототехникой, фотографией и музыкой." />
        <meta property="og:title" content="Главная - Eugene Gundorov (cy6eria)" />
        <meta property="og:description" content="Привет. Меня зовут Евгений Гундоров (Eugene Gundorov) так же никому не известный как cy6eria. Я front-end разработчик. Увлекаюсь программированием, робототехникой, фотографией и музыкой." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cy6eria.ru/about" />
        <meta property="og:image" content="http://res.cloudinary.com/cy6eria/image/upload/v1520800210/pic.jpg" />
      </Head>

      <div className="image">
        <div className="content">
          <div className="subheader">
            Hi, my name is...
          </div>
          <div className="name">Eugene Gundorov</div>

          <Social className="splash__social_buttons" />
        </div>
      </div>
    </section>
    <section className="about">
      <p>...also, no one knows me as <strong>cy6eria</strong> (but I'm working on it). I live in Kazan, work as a front-end developer. I'm interested in programming, robotics, photography, music, and also love to travel.</p>
      <p><a href="/posts">Check my blog!</a> There is I tell about my expirience, which problems I've faced, and how I've solved them. If You want to know more about something, or if You have another opinion, find me in the social networks! All my profiles you can find above.</p>
      
      <figure>
        <img
          src="http://res.cloudinary.com/cy6eria/image/upload/v1520800210/pic.jpg"
          alt="The beautiful fair-haired young lady pointing to the guy with glasses."
        />
        <figcaption>My wife Sasha showing who cy6eria is.</figcaption>
      </figure>
    </section>
  </>
);
