import "./styles.css";
export const LocationButton = ({ currentLocationHandler }) => {
  const handleClick = () => {
    console.log("clicked");
    currentLocationHandler();
  };

  return (
    <button
      className="LocationButton_city-select-button"
      id="cities"
      onClick={handleClick}
    >
      Get my location
    </button>
  );
};
