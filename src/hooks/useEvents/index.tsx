import moment from "moment";
import toast from "react-hot-toast";

import { createContext, useContext, useState } from "react";
import { Event, EventsContextData, EventsProviderProps } from "./interface";

const EventContext = createContext<EventsContextData>({} as EventsContextData);

export function EventsProvider({ children }: EventsProviderProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEventModalState, setNewEventModalState] = useState(false);

  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");

  const [nameFound, setNameFound] = useState<Event[]>([]);
  const [todayFound, setTodayFound] = useState<Event[]>([]);

  function handleChangeStateNewTaskModal(startDateEvent?: string, endDateEvent?: string) {
    if (startDateEvent) {
      setEventStartDate(startDateEvent);
    }

    if (endDateEvent) {
      setEventEndDate(endDateEvent);
    }

    setNewEventModalState(!newEventModalState);
  }

  function create({name, startDate, endDate, color}: Event): void {  
    setEvents([
      ...events,
      {
        id: events.length,
        name,
        startDate,
        endDate,
        color
      }
    ]);

    toast.success("Added event");
  }

  // function remove(id: number): void {
  //   const data = events.filter(event => event.id !== id);
  //   setEvents([...data]);

  //   toast.success("Event removed");
  // }

  function findByName(name: string): void {
    if (name.length === 0 || name.length < 0) {
      setNameFound([]);
      return;
    }

    let findName = [];

    if (todayFound.length > 0) {
      setNameFound([]);
      findName = todayFound.filter(event => event.name.includes(name));
    } else {
      setNameFound([]);
      findName = events.filter(event => event.name.includes(name));
    }

    if (findName.length > 0) {
      setNameFound(findName);
    } else {
      toast.error("No event with that name was found!");
    }
  }

  function findByToday(date: string): void {
    if (date.length === 0 || date.length < 0) {
      setTodayFound([]);
      return;
    }

    const findDate = events.filter(event => {
      const dateFormat = moment(event.startDate).format("DD-MM-YYYY");
      
      return dateFormat.includes(date);
    });

    if (findDate.length > 0) {
      setTodayFound(findDate);
    } else {
      toast.error("No events have been registered on today's date!");
    }
  }

  return (
    <EventContext.Provider value={
      {
        events,
        eventStartDate,
        eventEndDate,
        nameFound,
        todayFound,
        newEventModalState,
        handleChangeStateNewTaskModal,
        create,
        findByName,
        findByToday,
      }
    }>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  return context;
}