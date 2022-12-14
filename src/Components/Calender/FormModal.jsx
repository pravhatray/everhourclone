import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./HoursPage.module.css";

export function FormModal({handleSubmit}) {
  const [newTodo, setNewTodo] = useState([{
    title: "",
    description: "",
    start: "",
    end: "",
  }]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="green">Set Task</Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent width={"500px"} height="500px">
          <ModalHeader>Schedule</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box className={styles.formTag}>
              <form onSubmit={(e)=>handleSubmit(e,newTodo)}>
                <Input
                  type="text"
                  placeholder="Add Title"
                  className={styles.inputTag}
                  value={newTodo.title}
                  onChange={(e) =>
                    setNewTodo( { ...newTodo, title: e.target.value } )
                  }
                />
                <br />
                <Input
                  type="text"
                  placeholder="Add Desc"
                  className={styles.inputTag}
                  value={newTodo.description}
                  onChange={(e) =>
                    setNewTodo({ ...newTodo, description: e.target.value } )
                  }
                />
                <DatePicker
                  placeholderText="Start Date"
                  className={styles.datePickerTag}
                  selected={newTodo.start}
                  onChange={(start) => setNewTodo({ ...newTodo, start })}
                />
                <DatePicker
                  placeholderText="End Date"
                  className={styles.datePickerTag}
                  selected={newTodo.end}
                  onChange={(end) => setNewTodo({ ...newTodo, end })}
                />
                <Input type="submit" value="ADD TASK" className={styles.submit} />
              </form>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
