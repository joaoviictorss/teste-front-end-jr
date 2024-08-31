import icons from "../../../lib/icons";

interface IconProps {
  name: keyof typeof icons; //Garante que o nome seja uma chave válida do objeto icons
  className?: string;
  width?: string;
  height?: string;
}

const Icon = ({
  name,
  className,
  width = "24px",
  height = "24px",
}: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} height={height} width={width} />;
};

export default Icon;
