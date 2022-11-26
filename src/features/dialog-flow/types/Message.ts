import MessageTypes from "../enums/MessageTypes";

type Message = {
  content: string;
  type: MessageTypes;
  fromUser: boolean;
};

export default Message;
