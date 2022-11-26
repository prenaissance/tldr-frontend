import MessageTypes from "./enums/MessageTypes";
import DialogStep from "./types/DialogStep";

const demoFlow: DialogStep[] = [
  {
    id: "start",
    type: MessageTypes.TEXT,
    content: "Hello, I'm a bot.",
    isFinal: false,
    nextId: "step2",
  },
  {
    id: "step2",
    type: MessageTypes.TEXT,
    content: "Are you a programmer?",
    answers: [
      {
        answer: "Yes",
        nextId: "step3",
      },
      {
        answer: "No",
        nextId: "not-a-programmer",
      },
    ],
  },
  {
    id: "not-a-programmer",
    type: MessageTypes.TEXT,
    content: "I'm sorry, I can't help you. The demo is over.",
    isFinal: true,
  },
  {
    id: "step3",
    type: MessageTypes.TEXT,
    content: "I'll help you get a promotion!",
    nextId: "step4",
  },
  {
    id: "step4",
    type: MessageTypes.MEDIA,
    content: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    nextId: "step5",
  },
  {
    id: "step5",
    type: MessageTypes.TEXT,
    content: "Do you want to get a promotion?",
    answers: [
      {
        answer: "Yes",
        nextId: "step6",
      },
      {
        answer: "No",
        finishConversation: true,
      },
    ],
  },
  {
    id: "step6",
    type: MessageTypes.TEXT,
    content: "I'm sorry, I can't give you a promotion. The demo is over.",
    isFinal: true,
  },
];

export default demoFlow;
