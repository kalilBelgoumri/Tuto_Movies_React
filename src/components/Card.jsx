import { Card } from "antd";
import { StarTwoTone } from "@ant-design/icons";

const { Meta } = Card;

const CardUsers = ({ image, description, title, alt }) => {
  return (
    <Card
      hoverable
      cover={<img alt={alt} src={`https://image.tmdb.org/t/p/w400/${image}`} />}
    >
      <Meta title={title} description={description} />
      {[<StarTwoTone key="sfsq" />]}
    </Card>
  );
};

export default CardUsers;
