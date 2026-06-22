import * as Icons from "lucide-react";

const AppIcon = ({ name, size = 24, className = "" }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default AppIcon;