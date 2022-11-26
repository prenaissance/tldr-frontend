import { useMemo, useEffect, useRef } from "react";
import { Box, Chip, Divider, Typography } from "@mui/material";
import PowerIcon from "@mui/icons-material/PowerSettingsNew";
import { useAppDispatch, useAppSelector } from "../../app/storeHooks";
import ChatGroup from "./components/ChatGroup";
import ChatMessage from "./components/ChatMessage";
import demoFlow from "./demoFlow";
import {
  sendAnswer,
  sendBotMessage,
  setDialogFlow,
  typeBotMessage,
} from "./reducers/dialogReducer";
import Message from "./types/Message";
import MessageTypes from "./enums/MessageTypes";
import ChatMedia from "./components/ChatMedia";

type MessageGroup = {
  isUser: boolean;
  messages: Message[];
};

const DialogFlow = () => {
  const state = useAppSelector((state) => state.dialog);
  const dispatch = useAppDispatch();
  const { stepId, turn, history, isTyping, isOver, flow } = state;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(setDialogFlow(demoFlow));
  }, []);

  useEffect(() => {
    if (turn === "bot" && !isTyping && !isOver) {
      dispatch(typeBotMessage());
      const timeout = setTimeout(() => {
        dispatch(sendBotMessage());
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [stepId]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [history]);

  const messageGroups = useMemo(() => {
    const groups: MessageGroup[] = [];
    let currentGroup: MessageGroup = { isUser: false, messages: [] };

    history.forEach((step) => {
      if (step.fromUser !== currentGroup.isUser) {
        groups.push(currentGroup);
        currentGroup = { isUser: step.fromUser, messages: [] };
      }

      currentGroup.messages.push(step);
    });

    if (isTyping) {
      currentGroup.messages.push({
        fromUser: false,
        content: "...",
        type: MessageTypes.TEXT,
      });
    }
    if (isOver) {
      currentGroup.messages.push({
        fromUser: false,
        content: "**END**",
        type: MessageTypes.TEXT,
      });
    }
    groups.push(currentGroup);

    return groups;
  }, [history]);

  const currentStep = useMemo(() => {
    return flow.find((step) => step.id === stepId);
  }, [stepId]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          p: "0.5rem",
        }}
      >
        <Typography variant="h4" fontFamily="monospace">
          Dialog Flow
        </Typography>
        <PowerIcon color={isOver ? "error" : "success"} />
      </Box>
      <Divider />
      <Box sx={{ flexShrink: 0, overflowY: "scroll", height: "70vh" }}>
        {messageGroups.map((group, index) => (
          <ChatGroup key={index} isUser={group.isUser}>
            {group.messages.map((message, index) =>
              message.type === MessageTypes.MEDIA ? (
                <ChatMedia src={message.content} key={index} />
              ) : (
                <ChatMessage
                  key={index}
                  text={message.content}
                  isUser={group.isUser}
                />
              )
            )}
          </ChatGroup>
        ))}
        <div ref={scrollRef} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "0.5rem",
          p: "0.5rem",
          height: "3rem",
        }}
      >
        {turn === "user" &&
          currentStep?.answers?.map((answer, index) => (
            <Chip
              key={index}
              label={answer.answer}
              onClick={() => dispatch(sendAnswer(answer))}
            />
          ))}
      </Box>
    </Box>
  );
};

export default DialogFlow;
