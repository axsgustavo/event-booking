import Modal from "react-modal";
import toast from "react-hot-toast";
import Calendar from 'react-calendar';
import moment from "moment";

import { useEffect, useState } from "react";
import { useEvents } from "../../hooks/useEvents";

import { IoMdClose } from 'react-icons/io';
import { BoxInput, BoxInputData, ButtonCreateNewEvent, Form, PickerColor } from "./styles";

import 'react-calendar/dist/Calendar.css';

export function NewEventModal() {
  const { newEventModalState, handleChangeStateNewTaskModal, create, events, eventStartDate, eventEndDate } = useEvents();

  const [valueCalendar, setValueCalendar] = useState(new Date());

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [color, setColor] = useState("");

  function handleSelectDate(date: string) {
    if (!startDate) {
      setStartDate(date);
      return;
    } 
    if (!endDate) {
      setEndDate(date)
      return;
    }
  }

  function handleSelectColor(color: string) {
    setTimeout(() => {
      setColor(color);
    }, 500);
  }

  function handleCreteNewEvent() {
    if (name && startDate && endDate && color) {
      //O rc-years-calendar começa a contar o mes a partir do 0.
      //Data - No mês tem que diminuir 1, para exibir no mês certo do rc-years-calendar.
      const start = new Date(parseInt(startDate.split("/").reverse()[0]), parseInt(startDate.split("/").reverse()[1]) - 1, parseInt(startDate.split("/").reverse()[2]))
      const end = new Date(parseInt(endDate.split("/").reverse()[0]), parseInt(endDate.split("/").reverse()[1]) - 1, parseInt(endDate.split("/").reverse()[2]))
  
      create({
        name, 
        startDate: start, 
        endDate: end, 
        color,
      });

      setName("");
      setStartDate("");
      setEndDate("");
      setColor("");
      handleChangeStateNewTaskModal();

      console.log(events);

    } else {
      toast.error("Fill in all fields");
    }
  }

  useEffect(() => {
    setStartDate(eventStartDate);
    setEndDate(eventEndDate);
  }, [handleChangeStateNewTaskModal])

  return (
    <Modal
      isOpen={newEventModalState}
      onRequestClose={handleChangeStateNewTaskModal}
      className="react-modal"
      overlayClassName="react-modal-overlayer"
    >
      <button className="react-modal-button-close" onClick={() => handleChangeStateNewTaskModal()}>
        <IoMdClose />
      </button>

      <Form>
        <h3>Create new event</h3>
        <BoxInput >
          <input
            type="text" 
            placeholder="Enter event name..."
            onChange={(event) => setName(event.target.value)}
          />
          <span>Event name</span>
          <label>
            <input
              type="color" 
              onChange={(event) => handleSelectColor(event.target.value)}
            />
            <PickerColor background={color} />
          </label>
        </BoxInput>
        <BoxInputData>
          <div>
            <input 
              type="text" 
              value={startDate} 
              placeholder="00/00/0000"
              onClick={(event) => setStartDate("")}
              readOnly
            />
            <span>Initial date</span>
          </div>
          <div>
            <input 
              type="text" 
              value={endDate} 
              placeholder="00/00/0000" 
              onClick={(event) => setEndDate("")}
              readOnly
            />
            <span>Final date</span>
          </div>
        </BoxInputData>
        <Calendar
          minDate={startDate ? new Date(moment(startDate, "DD/MM/YYYY").format("YYYY MM DD")) : new Date(new Date().getFullYear())}
          onChange={setValueCalendar}
          value={valueCalendar}
          onClickDay={(value: moment.MomentInput) => handleSelectDate(moment(value).format('DD/MM/YYYY'))}
        />
        <ButtonCreateNewEvent type="button" onClick={handleCreteNewEvent}>
          Create
        </ButtonCreateNewEvent>
      </Form>
    </Modal>
  );
}