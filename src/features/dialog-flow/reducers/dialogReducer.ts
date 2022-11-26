import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MessageTypes from "../enums/MessageTypes";
import DialogState from "../types/DialogState";
import { DialogAnswer } from "../types/DialogStep";

const initialState: DialogState = {
  turn: "bot",
  history: [],
  isTyping: false,
  isOver: false,
  flow: [
    {
      id: "start",
      type: MessageTypes.TEXT,
      content: "Hello, I'm a bot.",
      isFinal: false,
    },
  ],
  stepId: "start",
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setDialogFlow(state, action) {
      state.flow = action.payload;
    },

    sendAnswer(state, { payload }: PayloadAction<DialogAnswer>) {
      state.history.push({
        content: payload.answer,
        type: MessageTypes.TEXT,
        fromUser: true,
      });
      if (payload.finishConversation) {
        state.isOver = true;
        return;
      }
      state.stepId = payload.nextId!;
      state.turn = "bot";
    },

    resetDialog(state) {
      state.history = [];
      state.isOver = false;
      state.stepId = "start";
      state.turn = "bot";
    },

    typeBotMessage(state) {
      state.isTyping = true;
    },

    sendBotMessage(state) {
      if (state.isOver) return;
      const step = state.flow.find((step) => step.id === state.stepId)!;
      state.history.push({
        content: step.content,
        type: step.type,
        fromUser: false,
      });
      state.isTyping = false;
      if (step.isFinal) {
        state.isOver = true;
        return;
      }
      state.stepId = step.nextId || state.stepId;
      if (step.answers) {
        state.turn = "user";
      }
    },
  },
});

export const {
  setDialogFlow,
  sendAnswer,
  resetDialog,
  typeBotMessage,
  sendBotMessage,
} = dialogSlice.actions;
export default dialogSlice.reducer;
