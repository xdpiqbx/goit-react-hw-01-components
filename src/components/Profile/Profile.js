import PropTypes from 'prop-types';

import s from './Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>
            {stats.followers.toLocaleString('en-US')}
          </span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>
            {stats.views.toLocaleString('en-US')}
          </span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>
            {stats.likes.toLocaleString('en-US')}
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
