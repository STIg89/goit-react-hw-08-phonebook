import img404 from 'img/img404.png';
import { Notify } from 'notiflix';

export const Page404 = () => {
  Notify.warning('Please, click Home');

  return (
    <div>
      <img
        src={img404}
        alt="404"
        style={{ display: 'block', margin: 'auto' }}
      />
    </div>
  );
};
