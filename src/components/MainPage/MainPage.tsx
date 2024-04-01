import React, { useMemo } from 'react';
import Link from 'next/link';
import { Social } from '../Social';
import { MainNavigation } from '../MainNavigation';
import styles from './MainPage.module.scss';

interface MainPageProps {
  language: string;
}

const pStyle = 'px-8 pb-8 text-base md:text-2xl';

export const MainPage = (props: MainPageProps) => {
  const { language } = props;

  const localization = useMemo(() => {
    if (language === 'ru') {
      return {
        header: {
          subheader: 'Привет, меня зовут...',
          name: 'Евгений Гундоров',
          imageDescription: 'Русый парень в очках и с бородой и короткой стрижкой сидит в аудитории. На фоне видны люди, но их лица едва различимы.'
        },
        about: (
          <>
            <p className={pStyle}>...также никому не известный как <strong className="font-bold">cy6eria</strong> (но я работаю над этим). Я живу в России, городе Казани. Я увлекаюсь программированием, робототехникой, IoT, фотографией, музыкой, а так же люблю путешествовать.</p>
            <p className={pStyle}><Link href="/posts">В моем блоге</Link> я рассказываю про свой опыт, про проблемы с которыми я сталкивался, и как удалось их решить. Если у вас есть вопросы, или вы хотите что-то обсудить, то ищите меня в социальных сетях. Мои профили вы можете найти на главной странице выше.</p>
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
          <p className={pStyle}>...also, no one knows me as <strong className="font-bold">cy6eria</strong> (but I`m working on it). I live in Russia, Kazan, work as a front-end developer. I`m interested in programming, robotics, IoT, photography, music, and also love to travel.</p>
          <p className={pStyle}><Link href="/posts">Check my blog!</Link> There is I tell about my expirience, which problems I`ve faced, and how I`ve solved them. If You want to know more about something, or if You have another opinion, find me in the social networks! All my profiles you can find above.</p>
        </>
      ),
      image: {
        alt: 'The beautiful fair-haired young lady pointing to the guy with glasses.',
        caption: 'My wife Sasha showing who cy6eria is.',
      },
    }
  }, [language]);

  return (
    <>
      <section className={styles.splash}>
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
              <span className={styles.name}>
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

      <section className="max-w-screen-md container mx-auto py-4 md:py-8">
        {localization.about}
        
        <figure>
          <img
            src="https://res.cloudinary.com/cy6eria/image/upload/c_scale,w_800/v1520800210/pic.jpg"
            alt={localization.image.alt}
          />
          <figcaption className="text-center py-4">{localization.image.caption}</figcaption>
        </figure>
      </section>
    </>
  );
}
