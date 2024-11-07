import "./App.css";
import { GeoLocationButton } from "./components/GeoLocationButton";
import { WeeklyForecast } from "./components/WeeklyForecast";

// TODO: This should be fetched form an api
const mockForecast1 = [
  { date: "11/07/2024", low: 54, high: 70 },
  { date: "11/08/2024", low: 60, high: 71 },
  { date: "11/09/2024", low: 51, high: 72 },
  { date: "11/10/2024", low: 49, high: 65 },
  { date: "11/11/2024", low: 48, high: 62 },
  { date: "11/12/2024", low: 55, high: 68 },
  { date: "11/13/2024", low: 53, high: 69 },
  { date: "11/14/2024", low: 52, high: 70 },
  { date: "11/15/2024", low: 50, high: 67 },
  { date: "11/16/2024", low: 51, high: 68 },
];

const mockForecast2 = [
  { date: "02/15/2025", low: 28, high: 42 },
  { date: "02/16/2025", low: 25, high: 38 },
  { date: "02/17/2025", low: 27, high: 40 },
  { date: "02/18/2025", low: 24, high: 37 },
  { date: "02/19/2025", low: 26, high: 39 },
  { date: "02/20/2025", low: 30, high: 45 },
  { date: "02/21/2025", low: 29, high: 43 },
  { date: "02/22/2025", low: 31, high: 46 },
  { date: "02/23/2025", low: 27, high: 41 },
  { date: "02/24/2025", low: 28, high: 42 },
];

const mockForecast3 = [
  { date: "08/01/2025", low: 72, high: 89 },
  { date: "08/02/2025", low: 74, high: 91 },
  { date: "08/03/2025", low: 71, high: 88 },
  { date: "08/04/2025", low: 70, high: 87 },
  { date: "08/05/2025", low: 73, high: 92 },
  { date: "08/06/2025", low: 75, high: 94 },
  { date: "08/07/2025", low: 86, high: 101 },
  { date: "08/08/2025", low: 72, high: 89 },
  { date: "08/09/2025", low: 71, high: 88 },
  { date: "08/10/2025", low: 70, high: 86 },
];

function App() {
  return (
    <div>
      <GeoLocationButton />
      <WeeklyForecast forecast={mockForecast1} />
      <WeeklyForecast forecast={mockForecast2} />
      <WeeklyForecast forecast={mockForecast3} />
    </div>
  );
}

export default App;
