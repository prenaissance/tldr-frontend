import MessageTypes from "../enums/MessageTypes";

type DialogAnswer = {
  answer: string;
  nextId?: string;
  finishConversation?: boolean;
};

type DialogStep = {
  id: string;
  type: MessageTypes;
  content: string;
  isFinal?: boolean;
  answers?: {
    answer: string;
    nextId?: string;
    finishConversation?: boolean;
  }[];
  nextId?: string;
};

export default DialogStep;
export type { DialogAnswer };
