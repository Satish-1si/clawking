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
            "playGameOrder",
            "tsetMessage",
            "cancelGameMessage",
            "exitGameMessage",
            "gameCompletedMessage",
            "machineFailedMessage",
            "giftPriceMessage",
          ],
        },
      },
      fields: {
        packageType: {
          type: "PackageType",
          id: 1
        },
        loginMessage: {
          type: "LoginMessage",
          id: 2
        },
        sendMessageToRoomMate: {
          type: "SendMessageToRoomMate",
          id: 3
        },
        startQueueMessage: {
          type: "StartQueueMessage",
          id: 4
        },
        startGameMessage: {
          type: "StartGameMessage",
          id: 5
        },
        armMoveMessage: {
          type: "ArmMoveMessage",
          id: 6
        },
        heartMessage: {
          type: "HeartMessage",
          id: 7
        },
        gameResultMessage: {
          type: "GameResultMessage",
          id: 8
        },
        ballCountMessage: {
          type: "BallCountMessage",
          id: 9
        },
        scoreMessage: {
          type: "ScoreMessage",
          id: 10
        },
        enterRoomMessage: {
          type: "EnterRoomMessage",
          id: 11
        },
        exitRoomMessage: {
          type: "ExitRoomMessage",
          id: 12
        },
        numberOfPeopleInTheRoomMessage: {
          type: "NumberOfPeopleInTheRoomMessage",
          id: 13
        },
        wawaMoveMessage: {
          type: "WawaMoveMessage",
          id: 14
        },
        wawaResultMessage: {
          type: "WawaResultMessage",
          id: 15
        },
        playGameOrder:
        {
          type: "PlayGameOrder",
          id: 16
        },
        tsetMessage: {
          type: "TsetMessage",
          id: 17
        },
        cancelGameMessage: {
          type: "CancelGameMessage",
          id: 18
        },
        exitGameMessage: {
          type: "ExitGameMessage",
          id: 19
        },
        gameCompletedMessage: {
          type: "GameCompletedMessage",
          id: 20
        },
        machineFailedMessage: {
          type: "MachineFailedMessage",
          id: 21
        },
        giftPriceMessage:
        {
          type: "GiftPriceMessage",
          id: 22
        }
      }
    },





    PackageType: {
      values: {
        LOGIN: 0,
        SENDMESSAGETOROOMMATE: 1,
        STARTQUEUEMESSAGE: 2,
        STARTGAMEMESSAGE: 3,
        ARMMOVEMESSAGE: 4,
        HEARTMESSAGE: 5,
        GAMERESULTMESSAGE: 6,
        BALLCOUNTMESSAGE: 7,
        SCOREMESSAGE: 8,
        ENTERROOMMESSAGE: 9,
        EXITROOMMESSAGE: 10,
        NUMBEROfPEOPLEINTHEROOMMESSAGE: 11,
        WAWAMOVEMESSAGE: 12,
        WAWARESULTMESSAGE: 13,
        PLAYGAMEORDER: 14,
        TESTMESSAGE: 15,
        CANCELGAMEMESSAGE: 16,
        EXITGAMEMESSAGE: 17,
        GAMECOMPLETEDMESSAGE: 18,
        MACHINEFAILEDMESSAGE: 19,
        GIFTPRICEMESSAGE: 20,
      }
    },

    LoginMessage: {
      fields: {
        userID: {
          type: "string",
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
    StartQueueMessage: {
      fields: {
        userID: {
          type: "string",
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
        startQueueResult: {
          type: "int32",
          id: 4,
        },
        des: {
          type: "string",
          id: 5,
        },
        totalGold: {
          type: "int64",
          id: 6,
        },
        gameDuring: {
          type: "int32",
          id: 7,
        },
        playTimes: {
          type: "int32",
          id: 8,
        },
        giftID: {
          type: "string",
          id: 9,
        },
        gameID: {
          type: "string",
          id: 10,
        },
        playAgain: {
          type: "bool",
          id: 11,
        }
      },
    },
    StartGameMessage: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        isServerSide: {
          type: "bool",
          id: 3
        },
        startGameResult: {
          type: "int32",
          id: 4
        },
        des: {
          type: "string",
          id: 5
        },
        ballCount: {
          type: "int32",
          id: 6
        },
        totalGold: {
          type: "int64",
          id: 7
        },
        totalScore: {
          type: "int64",
          id: 8
        },
        gameDuring: {
          type: "int32",
          id: 9
        },
        playTimes: {
          type: "int32",
          id: 10
        },
        giftID: {
          type: "string",
          id: 11
        },
        gameID: {
          type: "string",
          id: 12
        }
      }
    },
    ArmMoveMessage: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        data: {
          type: "int32",
          id: 3
        }
      }
    },
    HeartMessage: {
      fields: {
        userID: {
          type: "int64",
          id: 1
        }
      }
    },
    GameResultMessage: {
      fields: {
        userID: {
          type: "int64",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        gameFinishFlag: {
          type: "int32",
          id: 3
        },
        totalGold: {
          type: "int64",
          id: 4
        },
        totalScore: {
          type: "int64",
          id: 5
        }
      }
    },
    BallCountMessage: {
      fields: {
        userID: {
          type: "int64",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        ballCount: {
          type: "int32",
          id: 3
        }
      }
    },
    ScoreMessage: {
      fields: {
        userID: {
          type: "int64",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        score: {
          type: "int32",
          id: 3
        },
        inCome: {
          type: "int64",
          id: 4
        }
      }
    },
    EnterRoomMessage: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        totalGold: {
          type: "int64",
          id: 3
        },
        totalScore: {
          type: "int64",
          id: 4
        },
        isServerSide: {
          type: "bool",
          id: 5
        },
        webrtcClientID: {
          type: "string",
          id: 6
        },
        isMeOperation: {
          type: "bool",
          id: 7
        },
        giftID: {
          type: "string",
          id: 10
        },
      }
    },
    ExitRoomMessage: {
      fields: {
        userID: {
          type: "int64",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        isServerSide: {
          type: "bool",
          id: 3
        },
        webrtcClientID: {
          type: "string",
          id: 4
        }
      }
    },
    NumberOfPeopleInTheRoomMessage: {
      fields: {
        macNo: {
          type: "string",
          id: 1
        },
        numberOfPeopleInTheRoom: {
          type: "int32",
          id: 2
        }
      }
    },
    WawaMoveMessage: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        data: {
          type: "int32",
          id: 3
        }
      }
    },
    WawaResultMessage: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        data: {
          type: "int32",
          id: 3
        }
      }
    },
    PlayGameOrder: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        gameID: {
          type: "string",
          id: 2
        },
        macNo: {
          type: "string",
          id: 3
        },
        order: {
          type: "int32",
          id: 4
        },
        playStatus: {
          type: "string",
          id: 5
        },
        playTimes: {
          type: "int32",
          id: 6
        },
        currentServerTime: {
          type: "string",
          id: 7
        },
        lastGameTime: {
          type: "string",
          id: 8
        }
      }

    }
    ,
    TsetMessage:
    {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        giftID: {
          type: "string",
          id: 3
        },
        gameID: {
          type: "string",
          id: 4
        }
      }
    },
    CancelGameMessage: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        giftID: {
          type: "string",
          id: 8
        },
        gameID: {
          type: "string",
          id: 9
        }
      }
    },
    ExitGameMessage: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        giftID: {
          type: "string",
          id: 3
        },
        gameID: {
          type: "string",
          id: 4
        }
      }
    },
    GameCompletedMessage: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        giftID: {
          type: "string",
          id: 3
        },
        gameID: {
          type: "string",
          id: 4
        }
      }
    },
    MachineFailedMessage: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        giftID: {
          type: "string",
          id: 3
        },
        gameID: {
          type: "string",
          id: 4
        }
      }
    },
    GiftPriceMessage: {
      fields: {
        userID: {
          type: "string",
          id: 1
        },
        macNo: {
          type: "string",
          id: 2
        },
        giftID: {
          type: "string",
          id: 3
        },
        gameID: {
          type: "string",
          id: 4
        }
      }
    },

  });

export default $root;
