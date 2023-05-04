import { PostsLayout, ErrorPageContent } from '@components';

export default function Custom404 () {
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
