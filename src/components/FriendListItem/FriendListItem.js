import PropTypes from 'prop-types';

import s from './FriendListItem.module.css';

export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;

  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'lime' : 'red' }}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
