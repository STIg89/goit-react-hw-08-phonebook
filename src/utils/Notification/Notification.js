import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Notification = name => {
  return Notify.warning(`${name} is already in contacts`, {
    timeout: 2000,
    fontSize: '22px',
    position: 'center-center',
    cssAnimationStyle: 'zoom',
  });
};

export const onSameNumberNotify = number => {
  return Notify.warning(`Number ${number} is already in contacts`, {
    timeout: 2000,
    fontSize: '22px',
    position: 'center-center',
    cssAnimationStyle: 'zoom',
  });
};

export const noContactsNotify = () => {
  return Notify.info(`There are no contacts here`, {
    timeout: 2000,
    fontSize: '22px',
    position: 'center-center',
    cssAnimationStyle: 'zoom',
  });
};

export const noMatchesNotify = () => {
  return Notify.info(`There are no matches`, {
    timeout: 2000,
    fontSize: '22px',
    position: 'center-center',
    cssAnimationStyle: 'zoom',
  });
};

export const onErrorNotify = () => {
  return Notify.failure(`Ooops... Try again`, {
    timeout: 2000,
    fontSize: '22px',
    position: 'center-center',
    cssAnimationStyle: 'zoom',
  });
};

Notification.propTypes = {
  name: PropTypes.string.isRequired,
};
