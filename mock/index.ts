import { MockMethod } from 'vite-plugin-mock';
import { TRANSLATE_RESULT } from './response/translate';

export default [
  {
    url: '/api/translate',
    method: 'post',
    response: () => {
      return TRANSLATE_RESULT;
    },
  },
] as MockMethod[];