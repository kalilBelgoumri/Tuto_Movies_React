import { Card } from "antd";

const { Meta } = Card;

const CardUsers = ({ image, description, title, alt, ratings, avatar }) => {
  return (
    <Card hoverable cover={<img alt={alt} src={image} />}>
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
