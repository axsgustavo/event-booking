import moment from "moment";

import { FormEvent, useEffect, useState } from "react";
import { useEvents } from "../../hooks/useEvents";

import { BiMenu, BiSearch } from "react-icons/bi";
import { BoxInputCheckbox, BoxInputFilterName, ButtonFilter, Container, ListFilter } from "./styles";

export function Filter() {
  const { findByName, findByToday } = useEvents();

  const [search, setSearch] = useState("");
  const [today, setToday] = useState(false);
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);

  function filterSearch(event: FormEvent) {
    event.preventDefault();
    findByName(search);
  }

  function filterToday() {
    if (today) {
      findByToday(moment(new Date()).format("DD-MM-YYYY"));
      findByName(search);
    } else {
      findByToday("");
    }
  }

  useEffect(() => {
    filterToday();
  }, [today])

  return (
    <Container>
      <BoxInputFilterName onSubmit={filterSearch}>
        <button type="submit">
          <BiSearch size={20} />
        </button>
        <input type="text" placeholder="Search a event..." onChange={event => setSearch(event.target.value)} />
        <span>Upper and lower case, influence the search.</span>
      </BoxInputFilterName>

      <ButtonFilter type="button">
        <BiMenu size={20} />
      </ButtonFilter>

      <ListFilter>
        <li>
          <BoxInputCheckbox>
            <input
              type="checkbox" 
              onChange={(event) => setToday(event.target.checked)} 
            />
            <span>Today</span>
          </BoxInputCheckbox>
        </li>

        {/* <li>
          <BoxInputCheckbox>
            <input type="checkbox" />
            <span>Week</span>
          </BoxInputCheckbox>
        </li> */}

        {/* <li>
          <BoxInputCheckbox>
            <input type="checkbox" />
            <span>Month</span>
          </BoxInputCheckbox>
        </li> */}
      </ListFilter>
    </Container>
  );
}