import { getFromDatabase } from '@core';
import { Posts } from '../../components/Posts';

const ITEMS_PER_PAGE = 5;

async function getPosts ({ page, search }) {
  const pageNumber = Number.isNaN(Number(page)) ? 1 : Number(page);

  const pipeline: object[] = [];

  if (search) {
    pipeline.push({
      $search: {
        index: "default",
        text: {
          query: search,
          path: {
            wildcard: "*"
          }
        }
      }
    });
  }

  pipeline.push({
    '$facet': {
      items: [
        { $sort : { createdAt : -1 } },
        {
          '$project': {
            title: 1,
            intro: 1,
            picture: 1,
            createdAt: 1,
          }
        },
        {
          '$skip': (pageNumber - 1) * ITEMS_PER_PAGE,
        },
        {
          '$limit': ITEMS_PER_PAGE,
        },
      ],
      total: [
        {
          '$count': 'count',
        },
      ],
    }
  });

  const data = await getFromDatabase('aggregate', { pipeline });

  return {
    posts: data.documents[0].items,
    page,
    totalCount: data.documents[0].total[0].count,
    itemsPerPage: ITEMS_PER_PAGE,
  }
}

export default async function Page({ searchParams }) {
  const { posts, page, totalCount, itemsPerPage } = await getPosts({ page: searchParams.page, search: searchParams.search });

  return (
    <Posts
      posts={posts}
      page={page}
      totalCount={totalCount}
      itemsPerPage={itemsPerPage}
    />
  );
}

export async function generateMetadata() {
  const title = 'Блог - Eugene Gundorov (cy6eria)';
  const description = 'Статьи на различную тематику связанные с программированием и робототехникой.';
  const alt = 'Светловолосый мужчина с короткой стрижкой и бородой в очках.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://cy6eria.ru/posts',
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
      locale: 'ru-RU',
      type: 'website',
    },
  };
}
