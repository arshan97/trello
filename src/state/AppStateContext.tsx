import { createContext, FC, useContext, Dispatch } from "react";
import { AppState, appStateReducer, List, Task } from "./appStateReducer";
import {Action} from "./actions";
import { useImmerReducer } from "use-immer";

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
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({ children }: any) => {

  const [state, dispatch] = useImmerReducer(appStateReducer, appData)

  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
    return useContext(AppStateContext);
}
