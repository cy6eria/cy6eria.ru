import type { ReactNode } from 'react';
import { PostsLayout } from '@components';

export default function Layout ({ children }: { children: ReactNode }) {
  return (
    <PostsLayout isFetching={false}>
      {children}
    </PostsLayout>
  );
}
