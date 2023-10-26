function Avatar(props) {
  return (
    <Image
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}