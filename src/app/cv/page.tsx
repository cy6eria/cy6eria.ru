import { CV } from '@components';

import * as es from './es';
import * as en from './en';

const variants = {
  es,
  en,
};

export default function CVPage () {  
  return (
    <CV
      es={es}
      en={en}
    />
  );
}
