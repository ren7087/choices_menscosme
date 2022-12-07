/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { Box, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ja from "date-fns/locale/ja";

export function DatePickerOriginal(props: any) {
  const [value, setValue] = React.useState<Date | null>(null);
  props.setDate(value);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <Box sx={{ m: 2, width: "25ch" }}>
        <DatePicker
          label="登録したい日時"
          value={value}
          onChange={handleChange}
          inputFormat="yyyy年MM月dd日"
          mask="____年__月__日"
          leftArrowButtonText="前月を表示"
          rightArrowButtonText="次月を表示"
          toolbarTitle="日付選択"
          toolbarFormat="yyyy年MM月dd日"
          renderInput={(params) => <TextField {...params} />}
          PaperProps={{ sx: styles.paperprops }}
          DialogProps={{ sx: styles.mobiledialogprops }}
        />
      </Box>
    </LocalizationProvider>
  );
}

const styles = {
  paperprops: {
    "div[role=presentation]": {
      display: "flex",
      "& .PrivatePickersFadeTransitionGroup-root:first-of-type": {
        order: 2,
      },
      "& .PrivatePickersFadeTransitionGroup-root:nth-of-type(2)": {
        order: 1,
        "& div::after": {
          content: '"年"',
        },
      },
      "& .MuiButtonBase-root": {
        order: 3,
      },
    },
  },
  mobiledialogprops: {
    ".PrivatePickersToolbar-dateTitleContainer .MuiTypography-root": {
      fontSize: "1.5rem", // 選択した日付のフォントサイズを変更
    },
    "div[role=presentation]:first-of-type": {
      display: "flex",
      "& .PrivatePickersFadeTransitionGroup-root:first-of-type": {
        order: 2,
      },
      "& .PrivatePickersFadeTransitionGroup-root:nth-of-type(2)": {
        order: 1,
        "& > div::after": {
          content: '"年"',
        },
      },

      "& .MuiButtonBase-root": {
        order: 3,
      },
    },
  },
};
