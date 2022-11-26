import { GetServerSideProps } from 'next';
import { getFromDatabase } from '../_getFromDatabase';
import { PostDetails } from '../../components/PostDetails';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  try {
    const res = await getFromDatabase('aggregate', {
      pipeline: [
        {
          $facet: {
            prev: [
              {
                $match: {
                  _id: {
                    $gt: {
                      $oid: id,
                    },
                  }
                },
              },
              {
                $sort : { createdAt : -1 },
              },
              {
                $project: {
                  createdAt: 1,
                  picture: 1,
                  title: 1,
                  intro: 1,
                }
              },
              {
                $limit: 1
              }
            ],
            current: [{
              $match: {
                _id: {
                  $oid: id,
                },
              }
            }],
            next: [
              {
                $match: {
                  _id: {
                    $lt: {
                      $oid: id,
                    },
                  }
                }
              },
              {
                $sort : { createdAt : 1 },
              },
              {
                $project: {
                  createdAt: 1,
                  picture: 1,
                  title: 1,
                  intro: 1,
                }
              },
              {
                $limit: 1
              }
            ],
          }
        }
      ],
    });

    const data = await res.data;

    if (!data.documents[0].current) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        currentPost: data.documents[0].current?.[0] || null,
        previousPost: data.documents[0].prev?.[0] || null,
        nextPost: data.documents[0].next?.[0] || null,
      },
    };

  } catch (err) {
    if (err.response.status === 400) {
      return {
        notFound: true,
      }
    }

    throw err;
  }
}

export default PostDetails;
