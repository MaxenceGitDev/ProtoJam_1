import { useState } from "react";

export default function Reservation() {
  const [couverts, setCouverts] = useState(2);
  const [showOptions, setShowOptions] = useState(false);

  const options = [1, 2, 3, 4, 5, 6, 7, 8];

  const [date, setDate] = useState("");
  const [showDateOptions, setShowDateOptions] = useState(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <>
      <div className="reservations">
        <div className="nav-reservations">
          <img src="" alt="languages burger" />
          <h1>WildCastle</h1>
        </div>
        <div className="buttons">
          <div className="button-couvert-choice">
            <button
              className="button-nb-couverts"
              type="button"
              onClick={() => setShowOptions(!showOptions)}
            >
              <b>{couverts} couverts</b>
            </button>
            {showOptions && (
              <ul>
                {options.map((numberOptions) => (
                  <li
                    key={numberOptions}
                    onClick={() => {
                      setCouverts(numberOptions);
                      setShowOptions(false);
                    }}
                  >
                    {numberOptions}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            className="button-date"
            type="button"
            onClick={() => setShowDateOptions(!showDateOptions)}
          >
            <b>{date || "Aujourd'hui"}</b>
          </button>
          {showDateOptions && (
            <div className="input-date">
              <input
                type="date"
                name="date"
                value={date}
                onChange={handleDateChange}
                onBlur={() => setShowDateOptions(false)}
              />
            </div>
          )}
          <button className="button-reservation" type="button">
            Réserver
          </button>
        </div>
      </div>
    </>
  );
}
