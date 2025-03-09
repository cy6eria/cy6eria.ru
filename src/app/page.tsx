import { headers } from 'next/headers';
import parser from 'accept-language-parser';
import { MainPage } from '../components/MainPage';

async function getLanguage () {
  const currentHeaders = await headers();
  const acceptLanguage = currentHeaders.get('accept-language');

  const [top] = parser.parse(acceptLanguage);

  return top ?? { code: 'ru', script: null, region: 'RU', quality: 1 };
}

export default async function Page() {
  const { code } = await getLanguage();

  return <MainPage language={code} />;
}

export async function generateMetadata() {
  const { code, region } = await getLanguage();

  const title = code === 'ru' ? 'Главная - Евгений Гундоров (cy6eria)' : 'Main - Eugene Gundorov (cy6eria)';
  const description = code === 'ru'
    ? 'Привет! Меня зовут Евгений Гундоров. Я так же никому не известный как cy6eria. Я front-end разработчик. Увлекаюсь программированием, робототехникой, фотографией и музыкой.'
    : 'Hi! My name is Eugene Gundorov. Also, no one knows me as cy6eria. I`m front-end developer. I like programming, robots, photography and music.';
  const alt = code === 'ru' ? 'Светловолосый мужчина с короткой стрижкой и бородой в очках.' : 'A pale hair man with short hair and beard.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://cy6eria.dev',
      siteName: 'Eugene Gundorov (cy6eria)',
      images: [
        {
          url: 'https://res.cloudinary.com/cy6eria/image/upload/c_scale,w_800/v1588699467/IMG_1683.jpg',
          width: 800,
          alt,
        },
        {
          url: 'https://res.cloudinary.com/cy6eria/image/upload/c_scale,w_1600/v1588699467/IMG_1683.jpg',
          width: 1600,
          alt,
        },
      ],
      locale: region ? `${code}_${region}` : code,
      type: 'website',
    },
  };
}
