import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { subDays } from "date-fns";

const Test = () => {
  const [startDate, setStartDate] = useState(new Date());
  const highlightWithRanges = [
    // {
    //   "react-datepicker__day--highlighted-custom-1": [
    //     subDays(new Date(), 4),
    //     subDays(new Date(), 3),
    //     subDays(new Date(), 2),
    //     subDays(new Date(), 1),
    //   ],
    // },
    {
      "react-datepicker__day--highlighted-custom-2": [
        addDays(new Date(), 31),
        addDays(new Date(), 32),
        addDays(new Date(), 34),
        addDays(new Date(), 36),
      ],
    },
  ];

  return (
    <div className="h-full w-full bg-gray-400">
      
    <a href="">hola</a>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      highlightDates={highlightWithRanges}
      placeholderText="This highlight two ranges with custom classes"

      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--previous"
            }
            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
            onClick={decreaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
              }
            >
              {"<"}
            </span>
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button
            aria-label="Next Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--next"
            }
            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
            onClick={increaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
              }
            >
              {">"}
            </span>
          </button>
        </div>
      )}
      monthsShown={2}
    />
     <DatePicker
     
    />
    
   </div>
   );
};

export default Test;
