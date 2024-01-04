import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';
import propTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string,
      name: propTypes.string,
      isOnline: propTypes.bool,
      id: propTypes.number,
    })
  ),
};
