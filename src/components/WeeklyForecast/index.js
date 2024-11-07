import { TempRange } from "./components/TempRange";
import "./styles.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
};

export const WeeklyForecast = ({ forecast }) => {
  const min = Math.min(...forecast.map(({ low }) => low));
  const max = Math.max(...forecast.map(({ high }) => high));

  return (
    <div className="weekly-forecast">
      <span className="weekly-forecast_header">
        <span className="weekly-forecast_header_title">Weekly Forecast</span>
        <span className="weekly-forecast_header_date">
          {formatDate(forecast[0].date)} - &nbsp;
          {formatDate(forecast[forecast.length - 1].date)}
        </span>
      </span>
      {forecast.map(({ date, low, high }) => (
        <div className="weekly-forecast_item" key={date}>
          <span className="weekly-forecast_item_day">{formatDate(date)}</span>
          <TempRange low={low} high={high} min={min} max={max} />
        </div>
      ))}
    </div>
  );
};
