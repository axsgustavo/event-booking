import moment from "moment";
import Calendar from "rc-year-calendar";

import { useEvents } from "../../hooks/useEvents";
import { Container } from "./styles";

export function EventCalendar() {
  const { events, handleChangeStateNewTaskModal, nameFound, todayFound } = useEvents();

  const data = [];

  if (nameFound.length > 0 || todayFound.length > 0) {
    data.push(...nameFound);
    if (todayFound.length > 0) {
      data.push(...todayFound);
    }
  }

  return (
    <Container>
      <Calendar
        dataSource={data.length > 0 ? data : events}           //Eventos cadastrados
        enableRangeSelection={true}                            //Habilitar a seleção de datas
        onRangeSelected={event => {                            //Função que executa ao selecionar uma data
          handleChangeStateNewTaskModal(
            moment(event.startDate).format("DD/MM/YYYY"),
            moment(event.endDate).format("DD/MM/YYYY")
          );
        }}
        enableContextMenu={true}                              //Exibir contexto do eventos marcados
        contextMenuItems={[                                   //Contexto que aparecerá em cada evento
          {
            text: "edit"
          },
          {
            text: "delete",
          }
        ]}
      />
    </Container>
  );
}