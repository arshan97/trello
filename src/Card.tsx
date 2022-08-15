import { CardContainer } from "./styles";

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};

type CardProps = {
  text: string;
  id: string;
};
