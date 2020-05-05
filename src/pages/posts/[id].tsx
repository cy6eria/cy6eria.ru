import axios from 'axios';
import { GetServerSideProps } from 'next';

import { PostDetails } from '../../components/PostDetails';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.VERCEL_URL}`;

  try {
    const res = await axios.get(`${host}/api/posts`, {
      params: {},
    });

    const data = await res.data;

    return {
      props: {
        posts: data,
        postId: id,
      },
    };

  } catch (err) {
    return {
      props: {
        posts: [],
        postId: id,
        error: err,
      },
    }
  }
}

export default PostDetails;
