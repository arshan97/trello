import { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";
import { useFocus } from "./useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  function handleAddText(event: React.KeyboardEvent<HTMLInputElement>) {
    if(event.key === "Enter") {
      onAdd(text)
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        onKeyPress={handleAddText}
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}> Create </NewItemButton>
    </NewItemFormContainer>
  );
};
