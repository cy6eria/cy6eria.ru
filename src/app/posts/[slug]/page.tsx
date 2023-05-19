import { notFound } from 'next/navigation';
import { getFromDatabase } from '@core';
import { PostDetails } from '@components/PostDetails';

async function getPostMeta ({ id }) {
  const data = await getFromDatabase('findOne', {
    _id: id,
  });

  return data?.document ?? null;
}

const getPost = async ({ id }) => {
  try {
    const data = await getFromDatabase('aggregate', {
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
                $sort : { createdAt : 1 },
              },
              {
                $limit: 1
              },
              {
                $project: {
                  createdAt: 1,
                  title: 1,
                }
              },
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
                $sort : { createdAt : -1 },
              },
              {
                $limit: 1
              },
              {
                $project: {
                  createdAt: 1,
                  title: 1,
                }
              },
            ],
          }
        }
      ],
    });

    if (!data.documents?.[0].current) {
      return null;
    }

    return {
      currentPost: data.documents[0].current?.[0],
      previousPost: data.documents[0].prev?.[0] || null,
      nextPost: data.documents[0].next?.[0] || null,
    };

  } catch (err) {
    console.log(err);
    // if (err.response.status === 400) {
    //   return null;
    // }

    throw err;
  }
}

export default async function Page ({ params }) {
  const data = await getPost({ id: params.slug });

  if (!data) {
    notFound();
  }

  const { currentPost, previousPost, nextPost } = data;

  return (
    <PostDetails
      currentPost={currentPost}
      previousPost={previousPost}
      nextPost={nextPost}
    />
  );
}

export async function generateMetadata(params) {
  const data = await getPostMeta({ id: params.slug });

  if (!data) {
    return {};
  }

  const title = data.title;
  const description = data.intro;

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
        },
      ],
      locale: 'ru-RU',
      type: 'article',
    },
  };
}
