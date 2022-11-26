import { GetServerSideProps } from 'next';
import { getFromDatabase } from '../_getFromDatabase';
import { Posts } from '../../components/Posts';

const ITEMS_PER_PAGE = 5;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = Number.isNaN(Number(query.page)) ? 1 : Number(query.page);

  try {
    const res = await getFromDatabase('aggregate', {
      pipeline: [
        {
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
                '$skip': (page - 1) * ITEMS_PER_PAGE,
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
        }
      ],
    });

    const data = await res.data;

    return {
      props: {
        posts: data.documents[0].items,
        page,
        totalCount: data.documents[0].total[0].count,
        itemsPerPage: ITEMS_PER_PAGE,
      },
    }
  } catch (err) {
    return {
      props: {
        posts: [],
        page,
        totalCount: 0,
        itemsPerPage: ITEMS_PER_PAGE,
        error: err.response,
      },
    }
  }
}

export default Posts;
