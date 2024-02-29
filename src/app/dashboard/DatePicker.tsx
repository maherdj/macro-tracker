import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DatePicker() {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const router = useRouter();

  const handleChange = () => {
    let dateString: string;
    router.push(`dashboard/${date}`);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker value={date} onChange={handleChange} />
      </LocalizationProvider>
    </div>
  );
}
