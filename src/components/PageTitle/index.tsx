import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · WecodeChat` : 'WecodeChat';
  }, [title]);

  return null;
});

export default PageTitle;
