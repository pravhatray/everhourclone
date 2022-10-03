import React, { useState } from "react";
import styles from "./HoursPage.module.css";
import { ChevronDownIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
// Calendar
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { FormModal } from "./FormModal";
import {
  background,
  Box,
  Button,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Hide,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";

const locales = {
  "en-IN": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const todos = [
  {
    id: Date.now(),
    title: "",
    description: "",
    start: new Date(),
    end: new Date(),
  },
];

function HoursPage() {
  const [newTodo, setNewTodo] = useState([
    {
      title: "",
      description: "",
      start: "",
      end: "",
    },
  ]);
  const [allTodos, setAllTodos] = useState(todos);

  const handleSubmit = (e, newTodo) => {
    e.preventDefault();
    let id = Date.now();
    setAllTodos([...allTodos, { ...newTodo, id }]);
  };

  const handleDelete = (id) => {
    setAllTodos(allTodos.filter((todo) => todo.id !== id));
  };
  console.log(allTodos);
  return (
    <Box>
      <Box className={styles.calenderSecondNav}>
        <Box>
          <h3>Calender</h3>
        </Box>
        <Box>
          <FormModal handleSubmit={handleSubmit} />
        </Box>
      </Box>
      <Box className={styles.todoTag}>
        <Calendar
          localizer={localizer}
          events={allTodos}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 500,
            width: "100%",
            fontSize: "20px",
            backgroundColor: "white",
            color: "black",

            padding: "20px",
            borderRadius: "20px",
          }}
        />
      </Box>
    </Box>
  );
}

export default HoursPage;
