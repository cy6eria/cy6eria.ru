import React, { FC, useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Social } from '../Social';
import { MainNavigation } from '../MainNavigation';
import styles from './MainPage.module.scss';

interface IProps {
  acceptLanguage: string;
}

export const MainPage: FC<IProps> = props => {
  const { acceptLanguage } = props;

  const localization = useMemo(() => {
    if (acceptLanguage.indexOf('ru') >= 0) {
      return {
        header: {
          subheader: 'Привет, меня зовут...',
          name: 'Евгений Гундоров',
          imageDescription: 'Русый парень в очках и с бородой и короткой стрижкой сидит в аудитории. На фоне видны люди, но их лица едва различимы.'
        },
        about: (
          <>
            <p>...также никому не известный как <strong>cy6eria</strong> (но я работаю над этим). Я живу в России, городе Казани. Я увлекаюсь программированием, робототехникой, IoT, фотографией, музыкой, а так же люблю путешествовать.</p>
            <p><Link href="/posts">В моем блоге</Link> я рассказываю про свой опыт, про проблемы с которыми я сталкивался, и как удалось их решить. Если у вас есть вопросы, или вы хотите что-то обсудить, то ищите меня в социальных сетях. Мои профили вы можете найти на главной странице выше.</p>
          </>
        ),
        image: {
          alt: 'Красивая русая девушка показывает на парня в очках.',
          caption: 'Моя жена Саша показывает кто тут cy6eria.',
        },
      }
    }

    return {
      header: {
        subheader: 'Hi, my name is...',
        name: 'Eugene Gundorov',
        imageDescription: 'The short-hair fair-haired guy with beard and glasses is seating in the hall. There are people as a background, but their faces are blured.'
      },
      about: (
        <>
          <p>...also, no one knows me as <strong>cy6eria</strong> (but I`m working on it). I live in Russia, Kazan, work as a front-end developer. I`m interested in programming, robotics, IoT, photography, music, and also love to travel.</p>
          <p><Link href="/posts">Check my blog!</Link> There is I tell about my expirience, which problems I`ve faced, and how I`ve solved them. If You want to know more about something, or if You have another opinion, find me in the social networks! All my profiles you can find above.</p>
        </>
      ),
      image: {
        alt: 'The beautiful fair-haired young lady pointing to the guy with glasses.',
        caption: 'My wife Sasha showing who cy6eria is.',
      },
    }
  }, [acceptLanguage]);

  return (
    <>
      <section className={styles.splash}>
        <Head>
          <title>Главная - Eugene Gundorov (cy6eria)</title>
          <meta name="description" content="Привет. Меня зовут Евгений Гундоров (Eugene Gundorov) так же никому не известный как cy6eria. Я front-end разработчик. Увлекаюсь программированием, робототехникой, фотографией и музыкой." />
          <meta property="og:title" content="Главная - Eugene Gundorov (cy6eria)" />
          <meta property="og:description" content="Привет. Меня зовут Евгений Гундоров (Eugene Gundorov) так же никому не известный как cy6eria. Я front-end разработчик. Увлекаюсь программированием, робототехникой, фотографией и музыкой." />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://cy6eria.ru/about" />
          <meta property="og:image" content="https://res.cloudinary.com/cy6eria/image/upload/v1520800210/pic.jpg" />
        </Head>

        <div
          className={styles.splash__image}
          role="img"
          aria-label={localization.header.imageDescription}
        >
          <div className={styles.splash__content}>
            <MainNavigation className={styles.splash__nav} />

            <h1 className={styles.splash__header}>
              <span className={styles.subheader}>
                {localization.header.subheader}
              </span>
              <span className={styles.name} role="heading">
                {localization.header.name}
              </span>
            </h1>
          </div>

          <Social className={styles.splash__social_buttons} />

          <svg
            className={styles.splash__call_to_scroll}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>
      <section className={styles.about}>
        {localization.about}
        
        <figure>
          <Image
            src="https://res.cloudinary.com/cy6eria/image/upload/v1520800210/pic.jpg"
            alt={localization.image.alt}
            width={800}
            height={600}
          />
          <figcaption>{localization.image.caption}</figcaption>
        </figure>
      </section>
    </>
  );
}
