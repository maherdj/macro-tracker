import { useMacroContext } from "./context";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DatePicker() {
  const { date, setDate } = useMacroContext();

  const router = useRouter();

  useEffect(() => {
    setDate(new Date());
  }, []);

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    let dateString: string;
    let dateDay: number;
    let dateMonth: number;
    let dateYear: number;

    dateDay = date.getDay();
    dateMonth = date.getMonth();
    dateYear = date.getFullYear();

    dateString =
      dateMonth.toString() + dateDay.toString() + dateYear.toString();

    console.log(
      "Month:" +
        dateMonth +
        "   " +
        "Day: " +
        dateDay +
        "   " +
        "Year: " +
        dateYear
    );
    setDate(date);

    router.push(`/dashboard/${dateString}`);

    console.log("date: " + dateString);
  };

  return (
    <form onSubmit={handleChange}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <button>submit</button>
    </form>
  );
}
