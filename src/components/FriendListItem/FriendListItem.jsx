import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? css.online : css.offline;
  const statusClasses = [css.status, statusClass].join(' ');
  const statusText = isOnline ? 'Online' : 'Offline';
  return (
    <div>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      <p className={statusClasses}>{statusText}</p>
    </div>
  );
};

export default FriendListItem;
