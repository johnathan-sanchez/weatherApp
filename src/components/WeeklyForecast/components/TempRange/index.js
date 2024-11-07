import "./styles.css";
import { getTempColor } from "../../../../util/getTempColor";

const makeGradient = (low, high) => {
  const lowColor = getTempColor(low);
  const highColor = getTempColor(high);
  return `linear-gradient(90deg, ${lowColor}, ${highColor})`;
};

export const TempRange = ({ low, high, min, max }) => {
  const totalRange = max - min;
  const rangeStartPercentage = ((low - min) / totalRange) * 100;
  const rangeWidthPercentage = ((high - low) / totalRange) * 100;

  const gradient = makeGradient(low, high);

  return (
    <div className="temp-range">
      <span className="temp-range_temp-label">{low}°</span>
      <div className="temp-range_bar-container">
        <div
          className="temp-range_bar"
          style={{
            left: `${rangeStartPercentage}%`,
            width: `${rangeWidthPercentage}%`,
            background: gradient,
          }}
        ></div>
      </div>
      <span className="temp-range_temp-label">{high}°</span>
    </div>
  );
};
