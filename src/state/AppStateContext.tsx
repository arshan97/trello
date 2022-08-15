import { createContext, useContext } from "react";
import { AppState, List, Task } from "./appStateReducer";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [
        {
          id: "a0",
          text: "Generate App",
        },
      ],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [
        {
          id: "a1",
          text: "Learn TypeScript with React",
        },
      ],
    },
    {
      id: "2",
      text: "Done",
      tasks: [
        {
          id: "a2",
          text: "Utility tasks",
        },
      ],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({ children }: any) => {
  const { lists } = appData;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
    return useContext(AppStateContext);
}
