import { ReactNode } from "react";

export interface Event {
  id?: number;
  name: string;
  startDate: Date;
  endDate: Date;
  color?: string;
}

export interface EventsProviderProps {
  children: ReactNode;
}

export interface EventsContextData {
  events: Event[];
  eventStartDate: string;
  eventEndDate: string;
  nameFound: Event[];
  todayFound: Event[];
  newEventModalState: boolean;
  handleChangeStateNewTaskModal: (startDateEvent?: string, endDateEvent?: string) => void;
  create: ({name, startDate, endDate, color}: Event) => void;
  findByName: (name: string) => void;
  findByToday: (name: string) => void;
}