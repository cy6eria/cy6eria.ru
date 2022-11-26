import { PostsLayout, ErrorPageContent } from '@components';

const Custom500 = () => {
  return (
    <PostsLayout>
      <ErrorPageContent
        img="/img/ryu_down.gif"
        code={500}
        title="Произошла ошибка"
        message="Попробуйте перезагрузить страницу"
        target="/"
        targetLabel="На главную"
      />
    </PostsLayout>
  );
}

export default Custom500;
