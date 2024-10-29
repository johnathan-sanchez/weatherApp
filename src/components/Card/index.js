import "./styles.css";
import { theme } from "../../theme";

const getGradient = (type) => {
  const gradient = theme.gradient[type];
  if (!gradient) {
    console.warn(`Invalid gradient type: ${type}`);
  }
  return gradient;
};

export const Card = ({ children, width, height, type }) => {
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        backgroundImage: getGradient(type),
      }}
    >
      {children}
    </div>
  );
};
