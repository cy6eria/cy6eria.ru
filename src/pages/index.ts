import { GetServerSideProps } from 'next';
import { MainPage } from '../components/MainPage';

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    acceptLanguage: ctx.req.headers["accept-language"],
  },
});

export default MainPage;
