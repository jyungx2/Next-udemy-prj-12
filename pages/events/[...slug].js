// [eventId].js와 충돌하지 않는다!!
// /events 뒤에 둘 이상의 파라미터가 붙는다면 넥스트가 알아서 [...slug].js로 인식하여 반환할 것!

import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage(props) {
  const router = useRouter();
  const filterData = router.query.slug; // [year, month] >> ex. ["2021", "5"]

  if (!filterData) {
    return <p className="center">Loading...</p>; // using global.css
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your valuese!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
}

export default FilteredEventsPage;
