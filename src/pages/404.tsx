import { PostsLayout, ErrorPageContent } from '@components';

const Custom404 = () => {
  return (
    <PostsLayout>
      <ErrorPageContent
        img="/img/ryu_timeout.gif"
        code={404}
        title="Старница не найдена"
        message="Но тут есть много других"
        target="/posts"
        targetLabel="Посмотреть другие посты"
      />
    </PostsLayout>
  );
}

export default Custom404;
