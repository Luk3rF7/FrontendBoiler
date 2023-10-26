function Tweet(props) {
  return (
    <div className="Tweet">
      <div className="User">
        <Image
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="User-name">{props.author.name}</div>
      </div>
      <div className="Tweet-text">{props.text}</div>
      <Image
        className="Tweet-image"
        src={props.image.imageUrl}
        alt={props.image.description}
      />
      <div className="Tweet-date">{formatDate(props.date)}</div>
    </div>
  );
}