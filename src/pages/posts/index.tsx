import axios from 'axios';
import { GetServerSideProps } from 'next';

import { Posts } from '../../components/Posts';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.VERCEL_URL}`;

  try {
    const res = await axios.get(`${host}/api/posts`, {
      params: {},
    });

    const data = await res.data;

    return {
      props: {
        posts: data,
      },
    }

  } catch (err) {
    return {
      props: {
        posts: [],
        error: err,
      },
    }
  }
}

export default Posts;
