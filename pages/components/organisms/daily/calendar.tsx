import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  return (
    <div style={{ margin: "5%", width: "80%", height: "100%" }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialEvents={[{ title: "initial event", start: new Date() }]}
      />
    </div>
  );
};

export default Calendar;
