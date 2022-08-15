import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import {  ColumnContainer, ColumnTitle } from "./styles";

export const Column = ({ text, id }: ColumnProps) => {
  console.log(id)

  const {getTasksByListId} = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => <Card text={task.text} key={task.id} id={task.id} />)}
      <AddNewItem toggleButtonText="+ Add another card" onAdd={console.log} dark />
    </ColumnContainer>
  );
};

type ColumnProps = {
  text: string;
  id: string;
};
