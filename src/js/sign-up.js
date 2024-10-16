import handlebars from 'handlebars';
import {
  // SignUpForm,
  compileSignUpFormMarkup,
} from 'mayanbet-sdk';
import signUpBonusesTemplate from '@/partials/sign-up-bonuses.hbs?raw';
import { openModal } from '@/js/modal';
// import { setToLS } from '@/js/local-storage';

const modalContentRef = document.querySelector('.js-app-modal-content');
let timeout = null;

export const openSignUpModal = ({ isBlocked } = {}) => {
  if (timeout) {
    clearTimeout(timeout);
  }

  const bonusesMarkup = handlebars.compile(signUpBonusesTemplate)();

  const markup = compileSignUpFormMarkup({
    bonusesMarkup,
    title: 'Parabéns',
    submitText: 'Receba seu bônus',
    isEmailOnFirstPosition: true,
  });

  modalContentRef.innerHTML = '';
  modalContentRef.insertAdjacentHTML('beforeend', markup);

  // new SignUpForm({
  //   formRef: document.forms.signUp,
  //   submitCallback: async () => {
  //     setToLS('isAlreadyRegistered', true);
  //   },
  // });

  openModal({ isBlocked });
};

timeout = setTimeout(() => {
  openSignUpModal();
  clearTimeout(timeout);
}, 45000);
