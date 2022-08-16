import { BrowserRouter, Route, Routes } from "react-router-dom";

import { EventsProvider } from "./hooks/useEvents";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewEventModal } from "./components/NewEventModal";

import Modal from "react-modal";

Modal.setAppElement("#root");

export function Router() {
  return (
    <BrowserRouter>
      <EventsProvider>
        <NewEventModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </EventsProvider>
    </BrowserRouter>
  );
}