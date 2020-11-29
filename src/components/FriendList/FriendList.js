import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';

import s from './FriendList.module.css';

export default function FriendList({ friendsData }) {
  return (
    <ul className={s.friendList}>
      {friendsData.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
};
