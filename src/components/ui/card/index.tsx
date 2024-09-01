import "./styles.scss";

interface CardProps {
  className?: string;
  href: string;
  title: string;
  description: string;
}

const Card = ({ className, href, title, description }: CardProps) => {
  return (
    <div className={"card " + className}>
      <div className="gradient-card" />
      <div className="infos">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <a className="link-button" href={href}>
        Confira
      </a>
    </div>
  );
};

export default Card;
