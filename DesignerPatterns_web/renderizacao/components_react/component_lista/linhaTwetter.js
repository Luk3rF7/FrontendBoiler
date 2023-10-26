const TweetRow = ({ tweet }) => {
  const color = tweet.isLocal ? "inherit" : "red";

  return (
    <tr>
      <td>
        <span style="">{tweet.text}</span>
      </td>
      <td>{tweet.retweets}</td>
    </tr>
  );
};