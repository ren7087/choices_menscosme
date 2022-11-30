import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const index = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialEvents={[{ title: "initial event", start: new Date() }]}
      />
    </div>
  );
};

export default index;
