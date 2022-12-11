import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { gql, useQuery } from "@apollo/client";
import {
  QuestionnairesQuery,
  QuestionnairesQueryAll,
} from "../../../../queries/queries";
import { Box, CircularProgress } from "@mui/material";

const Calendar = () => {
  // const { data, loading, error } = useQuery(QuestionnairesQuery);
  const { data, loading, error } = useQuery(QuestionnairesQueryAll);

  if (loading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress
          style={{
            textAlign: "center",
            marginTop: "20%",
            marginBottom: "20%",
            marginLeft: "50%",
          }}
        />
      </Box>
    );
  if (error) return <p>エラーが発生しています</p>;
  const { questionnairesFindAll } = data;
  console.log(questionnairesFindAll);
  return (
    <div style={{ margin: "5%", width: "80%", height: "100%" }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialEvents={[{ title: "initial event", start: new Date() }]}
        events={[
          {
            title: "カラオケ",
            start: "2022-12-03",
          },
          {
            title: "カラオケ",
            start: questionnairesFindAll[2].date,
          },
          {
            title: "カラオケ",
            start: questionnairesFindAll[3].date,
          },
        ]}
      />
    </div>
  );
};

export default Calendar;
