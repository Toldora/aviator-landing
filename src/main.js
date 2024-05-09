import '@/styles/index.scss';

import 'virtual:svg-icons-register';
import queryString from 'query-string';
import '@/plugins';

import '@/js/modal';
import { openSignUpModal } from '@/js/sign-up';
// import '@/js/terms-and-privacy';
import useViewportSizes from '@/js/use-viewport-sizes';
import { getFromLS } from '@/js/local-storage';

const showAuthBtnRef = document.querySelector('.js-show-auth-btn');

useViewportSizes();

const searchString = queryString.parse(window.location.search);

const isAlreadyRegistered = getFromLS('isAlreadyRegistered');
if (isAlreadyRegistered && !searchString.debug) {
  searchString['sign-in'] = true;
  const stringifiedSearch = queryString.stringify(searchString);

  window.location.replace(
    `${import.meta.env.VITE_REDIRECT_URL}/?${stringifiedSearch}`,
  );
}

showAuthBtnRef.addEventListener('click', openSignUpModal);
