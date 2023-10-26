function Tweet(props) {
  return (
    <div className="Tweet">
      <div className="User">
        <Avatar user={props.author} />
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