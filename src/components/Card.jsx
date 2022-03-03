import { Card } from "antd";

const { Meta } = Card;

const CardUsers = ({ image, description, title, alt, ratings, avatar }) => {
  return (
    <Card
      hoverable
      cover={<img alt={alt} src={`https://image.tmdb.org/t/p/w400/${image}`} />}
    >
      <Meta
        title={title}
        description={description}
        ratings={ratings}
        avatar={avatar}
      />
    </Card>
  );
};

export default CardUsers;
