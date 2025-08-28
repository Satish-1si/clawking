/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */
"use strict";

import protobuf from "protobufjs/light";

const $root = (protobuf.roots["default"] || (protobuf.roots["default"] = new protobuf.Root()))
  .addJSON({
    DataPackage: {
      oneofs: {
        Package: {
          oneof: [
            "loginMessage",
            "sendMessageToRoomMate",
            "startGameMessage",
            "armMoveMessage",
            "heartMessage",
            "gameResultMessage",
            "ballCountMessage",
            "scoreMessage",
            "enterRoomMessage",
            "exitRoomMessage",
            "numberOfPeopleInTheRoomMessage",
            "wawaMoveMessage",
            "wawaResultMessage",
          ],
        },
      },
      fields: {
        packageType: {
          type: "PackageType",
          id: 1,
        },
        loginMessage: {
          type: "LoginMessage",
          id: 2,
        },
        sendMessageToRoomMate: {
          type: "SendMessageToRoomMate",
          id: 3,
        },
        startGameMessage: {
          type: "StartGameMessage",
          id: 4,
        },
        armMoveMessage: {
          type: "ArmMoveMessage",
          id: 5,
        },
        heartMessage: {
          type: "HeartMessage",
          id: 6,
        },
        gameResultMessage: {
          type: "GameResultMessage",
          id: 7,
        },
        ballCountMessage: {
          type: "BallCountMessage",
          id: 8,
        },
        scoreMessage: {
          type: "ScoreMessage",
          id: 9,
        },
        enterRoomMessage: {
          type: "EnterRoomMessage",
          id: 10,
        },
        exitRoomMessage: {
          type: "ExitRoomMessage",
          id: 11,
        },
        numberOfPeopleInTheRoomMessage: {
          type: "NumberOfPeopleInTheRoomMessage",
          id: 12,
        },
        wawaMoveMessage: {
          type: "WawaMoveMessage",
          id: 13,
        },
        wawaResultMessage: {
          type: "WawaResultMessage",
          id: 14,
        },
      },
    },
    PackageType: {
      values: {
        LOGIN: 0,
        SENDMESSAGETOROOMMATE: 1,
        STARTGAMEMESSAGE: 2,
        ARMMOVEMESSAGE: 3,
        HEARTMESSAGE: 4,
        GAMERESULTMESSAGE: 5,
        BALLCOUNTMESSAGE: 6,
        SCOREMESSAGE: 7,
        ENTERROOMMESSAGE: 8,
        EXITROOMMESSAGE: 9,
        NUMBEROfPEOPLEINTHEROOMMESSAGE: 10,
        WAWAMOVEMESSAGE: 11,
        WAWARESULTMESSAGE: 12,
      },
    },
    LoginMessage: {
      fields: {
        userID: {
          type: "int64",
          id: 1,
        },
        tempPasswd: {
          type: "string",
          id: 2,
        },
        isServerSide: {
          type: "bool",
          id: 3,
        },
        loginResult: {
          type: "bool",
          id: 4,
        },
      },
    },
    SendMessageToRoomMate: {
      fields: {
        senderUserID: {
          type: "int64",
          id: 1,
        },
        roomID: {
          type: "string",
          id: 2,
        },
        msgData: {
          type: "string",
          id: 3,
        },
        senderUserName: {
          type: "string",
          id: 4,
        },
      },
    },
    StartGameMessage: {
      fields: {
        userID: {
          type: "int64",
          id: 1,
        },
        macNo: {
          type: "string",
          id: 2,
        },
        isServerSide: {
          type: "bool",
          id: 3,
        },
        startGameResult: {
          type: "int32",
          id: 4,
        },
        des: {
          type: "string",
          id: 5,
        },
        ballCount: {
          type: "int32",
          id: 6,
        },
        totalGold: {
          type: "int64",
          id: 7,
        },
        totalScore: {
          type: "int64",
          id: 8,
        },
        gameDuring: {
          type: "int32",
          id: 9,
        },
      },
    },
    // Continue with other message definitions...
  });

export default $root;
