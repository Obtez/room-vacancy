import Filter from "../filter/Filter";

interface IProps {
  type: string;
  text?: string;
}

const Banner = ({ type, text }: IProps) => {
  if (type === "text" && text) {
    return <p>{ text }</p>
  } else if (type === "back") {
    return <p>{"<- back"}</p>
  } else if (type === "filter") {
    return <Filter />
  }

  return null;
}

export default Banner;