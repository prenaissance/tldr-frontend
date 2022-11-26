import DialogStep from "./DialogStep";
import Message from "./Message";

type DialogState = {
  turn: "user" | "bot";
  history: Message[];
  isTyping: boolean;
  isOver: boolean;
  flow: DialogStep[];
  stepId: string;
};

export default DialogState;
