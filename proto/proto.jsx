/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const DataPackage = $root.DataPackage = (() => {

    /**
     * Properties of a DataPackage.
     * @exports IDataPackage
     * @interface IDataPackage
     * @property {PackageType|null} [packageType] DataPackage packageType
     * @property {ILoginMessage|null} [loginMessage] DataPackage loginMessage
     * @property {ISendMessageToRoomMate|null} [sendMessageToRoomMate] DataPackage sendMessageToRoomMate
     * @property {IStartQueueMessage|null} [startQueueMessage] DataPackage startQueueMessage
     * @property {IStartGameMessage|null} [startGameMessage] DataPackage startGameMessage
     * @property {IArmMoveMessage|null} [armMoveMessage] DataPackage armMoveMessage
     * @property {IHeartMessage|null} [heartMessage] DataPackage heartMessage
     * @property {IGameResultMessage|null} [gameResultMessage] DataPackage gameResultMessage
     * @property {IBallCountMessage|null} [ballCountMessage] DataPackage ballCountMessage
     * @property {IScoreMessage|null} [scoreMessage] DataPackage scoreMessage
     * @property {IEnterRoomMessage|null} [enterRoomMessage] DataPackage enterRoomMessage
     * @property {IExitRoomMessage|null} [exitRoomMessage] DataPackage exitRoomMessage
     * @property {INumberOfPeopleInTheRoomMessage|null} [numberOfPeopleInTheRoomMessage] DataPackage numberOfPeopleInTheRoomMessage
     * @property {IWawaMoveMessage|null} [wawaMoveMessage] DataPackage wawaMoveMessage
     * @property {IWawaResultMessage|null} [wawaResultMessage] DataPackage wawaResultMessage
     * @property {IPlayGameOrder|null} [playGameOrder] DataPackage playGameOrder
     * @property {ITestMessage|null} [tsetMessage] DataPackage tsetMessage
     * @property {ICancelGameMessage|null} [cancelGameMessage] DataPackage cancelGameMessage
     * @property {IExitGameMessage|null} [exitGameMessage] DataPackage exitGameMessage
     * @property {IGameCompletedMessage|null} [gameCompletedMessage] DataPackage gameCompletedMessage
     * @property {IMachineFailedMessage|null} [machineFailedMessage] DataPackage machineFailedMessage
     * @property {IGiftPriceMessage|null} [giftPriceMessage] DataPackage giftPriceMessage
     */

    /**
     * Constructs a new DataPackage.
     * @exports DataPackage
     * @classdesc Represents a DataPackage.
     * @implements IDataPackage
     * @constructor
     * @param {IDataPackage=} [properties] Properties to set
     */
    function DataPackage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DataPackage packageType.
     * @member {PackageType} packageType
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.packageType = 0;

    /**
     * DataPackage loginMessage.
     * @member {ILoginMessage|null|undefined} loginMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.loginMessage = null;

    /**
     * DataPackage sendMessageToRoomMate.
     * @member {ISendMessageToRoomMate|null|undefined} sendMessageToRoomMate
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.sendMessageToRoomMate = null;

    /**
     * DataPackage startQueueMessage.
     * @member {IStartQueueMessage|null|undefined} startQueueMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.startQueueMessage = null;

    /**
     * DataPackage startGameMessage.
     * @member {IStartGameMessage|null|undefined} startGameMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.startGameMessage = null;

    /**
     * DataPackage armMoveMessage.
     * @member {IArmMoveMessage|null|undefined} armMoveMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.armMoveMessage = null;

    /**
     * DataPackage heartMessage.
     * @member {IHeartMessage|null|undefined} heartMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.heartMessage = null;

    /**
     * DataPackage gameResultMessage.
     * @member {IGameResultMessage|null|undefined} gameResultMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.gameResultMessage = null;

    /**
     * DataPackage ballCountMessage.
     * @member {IBallCountMessage|null|undefined} ballCountMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.ballCountMessage = null;

    /**
     * DataPackage scoreMessage.
     * @member {IScoreMessage|null|undefined} scoreMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.scoreMessage = null;

    /**
     * DataPackage enterRoomMessage.
     * @member {IEnterRoomMessage|null|undefined} enterRoomMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.enterRoomMessage = null;

    /**
     * DataPackage exitRoomMessage.
     * @member {IExitRoomMessage|null|undefined} exitRoomMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.exitRoomMessage = null;

    /**
     * DataPackage numberOfPeopleInTheRoomMessage.
     * @member {INumberOfPeopleInTheRoomMessage|null|undefined} numberOfPeopleInTheRoomMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.numberOfPeopleInTheRoomMessage = null;

    /**
     * DataPackage wawaMoveMessage.
     * @member {IWawaMoveMessage|null|undefined} wawaMoveMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.wawaMoveMessage = null;

    /**
     * DataPackage wawaResultMessage.
     * @member {IWawaResultMessage|null|undefined} wawaResultMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.wawaResultMessage = null;

    /**
     * DataPackage playGameOrder.
     * @member {IPlayGameOrder|null|undefined} playGameOrder
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.playGameOrder = null;

    /**
     * DataPackage tsetMessage.
     * @member {ITestMessage|null|undefined} tsetMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.tsetMessage = null;

    /**
     * DataPackage cancelGameMessage.
     * @member {ICancelGameMessage|null|undefined} cancelGameMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.cancelGameMessage = null;

    /**
     * DataPackage exitGameMessage.
     * @member {IExitGameMessage|null|undefined} exitGameMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.exitGameMessage = null;

    /**
     * DataPackage gameCompletedMessage.
     * @member {IGameCompletedMessage|null|undefined} gameCompletedMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.gameCompletedMessage = null;

    /**
     * DataPackage machineFailedMessage.
     * @member {IMachineFailedMessage|null|undefined} machineFailedMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.machineFailedMessage = null;

    /**
     * DataPackage giftPriceMessage.
     * @member {IGiftPriceMessage|null|undefined} giftPriceMessage
     * @memberof DataPackage
     * @instance
     */
    DataPackage.prototype.giftPriceMessage = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * DataPackage Package.
     * @member {"loginMessage"|"sendMessageToRoomMate"|"startQueueMessage"|"startGameMessage"|"armMoveMessage"|"heartMessage"|"gameResultMessage"|"ballCountMessage"|"scoreMessage"|"enterRoomMessage"|"exitRoomMessage"|"numberOfPeopleInTheRoomMessage"|"wawaMoveMessage"|"wawaResultMessage"|"playGameOrder"|"tsetMessage"|"cancelGameMessage"|"exitGameMessage"|"gameCompletedMessage"|"machineFailedMessage"|"giftPriceMessage"|undefined} Package
     * @memberof DataPackage
     * @instance
     */
    Object.defineProperty(DataPackage.prototype, "Package", {
        get: $util.oneOfGetter($oneOfFields = ["loginMessage", "sendMessageToRoomMate", "startQueueMessage", "startGameMessage", "armMoveMessage", "heartMessage", "gameResultMessage", "ballCountMessage", "scoreMessage", "enterRoomMessage", "exitRoomMessage", "numberOfPeopleInTheRoomMessage", "wawaMoveMessage", "wawaResultMessage", "playGameOrder", "tsetMessage", "cancelGameMessage", "exitGameMessage", "gameCompletedMessage", "machineFailedMessage", "giftPriceMessage"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new DataPackage instance using the specified properties.
     * @function create
     * @memberof DataPackage
     * @static
     * @param {IDataPackage=} [properties] Properties to set
     * @returns {DataPackage} DataPackage instance
     */
    DataPackage.create = function create(properties) {
        return new DataPackage(properties);
    };

    /**
     * Encodes the specified DataPackage message. Does not implicitly {@link DataPackage.verify|verify} messages.
     * @function encode
     * @memberof DataPackage
     * @static
     * @param {IDataPackage} message DataPackage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DataPackage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.packageType != null && Object.hasOwnProperty.call(message, "packageType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.packageType);
        if (message.loginMessage != null && Object.hasOwnProperty.call(message, "loginMessage"))
            $root.LoginMessage.encode(message.loginMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.sendMessageToRoomMate != null && Object.hasOwnProperty.call(message, "sendMessageToRoomMate"))
            $root.SendMessageToRoomMate.encode(message.sendMessageToRoomMate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.startQueueMessage != null && Object.hasOwnProperty.call(message, "startQueueMessage"))
            $root.StartQueueMessage.encode(message.startQueueMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.startGameMessage != null && Object.hasOwnProperty.call(message, "startGameMessage"))
            $root.StartGameMessage.encode(message.startGameMessage, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.armMoveMessage != null && Object.hasOwnProperty.call(message, "armMoveMessage"))
            $root.ArmMoveMessage.encode(message.armMoveMessage, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.heartMessage != null && Object.hasOwnProperty.call(message, "heartMessage"))
            $root.HeartMessage.encode(message.heartMessage, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.gameResultMessage != null && Object.hasOwnProperty.call(message, "gameResultMessage"))
            $root.GameResultMessage.encode(message.gameResultMessage, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.ballCountMessage != null && Object.hasOwnProperty.call(message, "ballCountMessage"))
            $root.BallCountMessage.encode(message.ballCountMessage, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.scoreMessage != null && Object.hasOwnProperty.call(message, "scoreMessage"))
            $root.ScoreMessage.encode(message.scoreMessage, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.enterRoomMessage != null && Object.hasOwnProperty.call(message, "enterRoomMessage"))
            $root.EnterRoomMessage.encode(message.enterRoomMessage, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.exitRoomMessage != null && Object.hasOwnProperty.call(message, "exitRoomMessage"))
            $root.ExitRoomMessage.encode(message.exitRoomMessage, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.numberOfPeopleInTheRoomMessage != null && Object.hasOwnProperty.call(message, "numberOfPeopleInTheRoomMessage"))
            $root.NumberOfPeopleInTheRoomMessage.encode(message.numberOfPeopleInTheRoomMessage, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.wawaMoveMessage != null && Object.hasOwnProperty.call(message, "wawaMoveMessage"))
            $root.WawaMoveMessage.encode(message.wawaMoveMessage, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.wawaResultMessage != null && Object.hasOwnProperty.call(message, "wawaResultMessage"))
            $root.WawaResultMessage.encode(message.wawaResultMessage, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.playGameOrder != null && Object.hasOwnProperty.call(message, "playGameOrder"))
            $root.PlayGameOrder.encode(message.playGameOrder, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.tsetMessage != null && Object.hasOwnProperty.call(message, "tsetMessage"))
            $root.TestMessage.encode(message.tsetMessage, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.cancelGameMessage != null && Object.hasOwnProperty.call(message, "cancelGameMessage"))
            $root.CancelGameMessage.encode(message.cancelGameMessage, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.exitGameMessage != null && Object.hasOwnProperty.call(message, "exitGameMessage"))
            $root.ExitGameMessage.encode(message.exitGameMessage, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.gameCompletedMessage != null && Object.hasOwnProperty.call(message, "gameCompletedMessage"))
            $root.GameCompletedMessage.encode(message.gameCompletedMessage, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.machineFailedMessage != null && Object.hasOwnProperty.call(message, "machineFailedMessage"))
            $root.MachineFailedMessage.encode(message.machineFailedMessage, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.giftPriceMessage != null && Object.hasOwnProperty.call(message, "giftPriceMessage"))
            $root.GiftPriceMessage.encode(message.giftPriceMessage, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DataPackage message, length delimited. Does not implicitly {@link DataPackage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DataPackage
     * @static
     * @param {IDataPackage} message DataPackage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DataPackage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DataPackage message from the specified reader or buffer.
     * @function decode
     * @memberof DataPackage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DataPackage} DataPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DataPackage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataPackage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.packageType = reader.int32();
                    break;
                }
            case 2: {
                    message.loginMessage = $root.LoginMessage.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.sendMessageToRoomMate = $root.SendMessageToRoomMate.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.startQueueMessage = $root.StartQueueMessage.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.startGameMessage = $root.StartGameMessage.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.armMoveMessage = $root.ArmMoveMessage.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.heartMessage = $root.HeartMessage.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.gameResultMessage = $root.GameResultMessage.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.ballCountMessage = $root.BallCountMessage.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.scoreMessage = $root.ScoreMessage.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.enterRoomMessage = $root.EnterRoomMessage.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.exitRoomMessage = $root.ExitRoomMessage.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.numberOfPeopleInTheRoomMessage = $root.NumberOfPeopleInTheRoomMessage.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.wawaMoveMessage = $root.WawaMoveMessage.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.wawaResultMessage = $root.WawaResultMessage.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.playGameOrder = $root.PlayGameOrder.decode(reader, reader.uint32());
                    break;
                }
            case 17: {
                    message.tsetMessage = $root.TestMessage.decode(reader, reader.uint32());
                    break;
                }
            case 18: {
                    message.cancelGameMessage = $root.CancelGameMessage.decode(reader, reader.uint32());
                    break;
                }
            case 19: {
                    message.exitGameMessage = $root.ExitGameMessage.decode(reader, reader.uint32());
                    break;
                }
            case 20: {
                    message.gameCompletedMessage = $root.GameCompletedMessage.decode(reader, reader.uint32());
                    break;
                }
            case 21: {
                    message.machineFailedMessage = $root.MachineFailedMessage.decode(reader, reader.uint32());
                    break;
                }
            case 22: {
                    message.giftPriceMessage = $root.GiftPriceMessage.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DataPackage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DataPackage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DataPackage} DataPackage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DataPackage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DataPackage message.
     * @function verify
     * @memberof DataPackage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DataPackage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.packageType != null && message.hasOwnProperty("packageType"))
            switch (message.packageType) {
            default:
                return "packageType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
                break;
            }
        if (message.loginMessage != null && message.hasOwnProperty("loginMessage")) {
            properties.Package = 1;
            {
                let error = $root.LoginMessage.verify(message.loginMessage);
                if (error)
                    return "loginMessage." + error;
            }
        }
        if (message.sendMessageToRoomMate != null && message.hasOwnProperty("sendMessageToRoomMate")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.SendMessageToRoomMate.verify(message.sendMessageToRoomMate);
                if (error)
                    return "sendMessageToRoomMate." + error;
            }
        }
        if (message.startQueueMessage != null && message.hasOwnProperty("startQueueMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.StartQueueMessage.verify(message.startQueueMessage);
                if (error)
                    return "startQueueMessage." + error;
            }
        }
        if (message.startGameMessage != null && message.hasOwnProperty("startGameMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.StartGameMessage.verify(message.startGameMessage);
                if (error)
                    return "startGameMessage." + error;
            }
        }
        if (message.armMoveMessage != null && message.hasOwnProperty("armMoveMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.ArmMoveMessage.verify(message.armMoveMessage);
                if (error)
                    return "armMoveMessage." + error;
            }
        }
        if (message.heartMessage != null && message.hasOwnProperty("heartMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.HeartMessage.verify(message.heartMessage);
                if (error)
                    return "heartMessage." + error;
            }
        }
        if (message.gameResultMessage != null && message.hasOwnProperty("gameResultMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.GameResultMessage.verify(message.gameResultMessage);
                if (error)
                    return "gameResultMessage." + error;
            }
        }
        if (message.ballCountMessage != null && message.hasOwnProperty("ballCountMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.BallCountMessage.verify(message.ballCountMessage);
                if (error)
                    return "ballCountMessage." + error;
            }
        }
        if (message.scoreMessage != null && message.hasOwnProperty("scoreMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.ScoreMessage.verify(message.scoreMessage);
                if (error)
                    return "scoreMessage." + error;
            }
        }
        if (message.enterRoomMessage != null && message.hasOwnProperty("enterRoomMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.EnterRoomMessage.verify(message.enterRoomMessage);
                if (error)
                    return "enterRoomMessage." + error;
            }
        }
        if (message.exitRoomMessage != null && message.hasOwnProperty("exitRoomMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.ExitRoomMessage.verify(message.exitRoomMessage);
                if (error)
                    return "exitRoomMessage." + error;
            }
        }
        if (message.numberOfPeopleInTheRoomMessage != null && message.hasOwnProperty("numberOfPeopleInTheRoomMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.NumberOfPeopleInTheRoomMessage.verify(message.numberOfPeopleInTheRoomMessage);
                if (error)
                    return "numberOfPeopleInTheRoomMessage." + error;
            }
        }
        if (message.wawaMoveMessage != null && message.hasOwnProperty("wawaMoveMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.WawaMoveMessage.verify(message.wawaMoveMessage);
                if (error)
                    return "wawaMoveMessage." + error;
            }
        }
        if (message.wawaResultMessage != null && message.hasOwnProperty("wawaResultMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.WawaResultMessage.verify(message.wawaResultMessage);
                if (error)
                    return "wawaResultMessage." + error;
            }
        }
        if (message.playGameOrder != null && message.hasOwnProperty("playGameOrder")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.PlayGameOrder.verify(message.playGameOrder);
                if (error)
                    return "playGameOrder." + error;
            }
        }
        if (message.tsetMessage != null && message.hasOwnProperty("tsetMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.TestMessage.verify(message.tsetMessage);
                if (error)
                    return "tsetMessage." + error;
            }
        }
        if (message.cancelGameMessage != null && message.hasOwnProperty("cancelGameMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.CancelGameMessage.verify(message.cancelGameMessage);
                if (error)
                    return "cancelGameMessage." + error;
            }
        }
        if (message.exitGameMessage != null && message.hasOwnProperty("exitGameMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.ExitGameMessage.verify(message.exitGameMessage);
                if (error)
                    return "exitGameMessage." + error;
            }
        }
        if (message.gameCompletedMessage != null && message.hasOwnProperty("gameCompletedMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.GameCompletedMessage.verify(message.gameCompletedMessage);
                if (error)
                    return "gameCompletedMessage." + error;
            }
        }
        if (message.machineFailedMessage != null && message.hasOwnProperty("machineFailedMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.MachineFailedMessage.verify(message.machineFailedMessage);
                if (error)
                    return "machineFailedMessage." + error;
            }
        }
        if (message.giftPriceMessage != null && message.hasOwnProperty("giftPriceMessage")) {
            if (properties.Package === 1)
                return "Package: multiple values";
            properties.Package = 1;
            {
                let error = $root.GiftPriceMessage.verify(message.giftPriceMessage);
                if (error)
                    return "giftPriceMessage." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DataPackage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DataPackage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DataPackage} DataPackage
     */
    DataPackage.fromObject = function fromObject(object) {
        if (object instanceof $root.DataPackage)
            return object;
        let message = new $root.DataPackage();
        switch (object.packageType) {
        default:
            if (typeof object.packageType === "number") {
                message.packageType = object.packageType;
                break;
            }
            break;
        case "LOGIN":
        case 0:
            message.packageType = 0;
            break;
        case "SENDMESSAGETOROOMMATE":
        case 1:
            message.packageType = 1;
            break;
        case "STARTQUEUEMESSAGE":
        case 2:
            message.packageType = 2;
            break;
        case "STARTGAMEMESSAGE":
        case 3:
            message.packageType = 3;
            break;
        case "ARMMOVEMESSAGE":
        case 4:
            message.packageType = 4;
            break;
        case "HEARTMESSAGE":
        case 5:
            message.packageType = 5;
            break;
        case "GAMERESULTMESSAGE":
        case 6:
            message.packageType = 6;
            break;
        case "BALLCOUNTMESSAGE":
        case 7:
            message.packageType = 7;
            break;
        case "SCOREMESSAGE":
        case 8:
            message.packageType = 8;
            break;
        case "ENTERROOMMESSAGE":
        case 9:
            message.packageType = 9;
            break;
        case "EXITROOMMESSAGE":
        case 10:
            message.packageType = 10;
            break;
        case "NUMBEROfPEOPLEINTHEROOMMESSAGE":
        case 11:
            message.packageType = 11;
            break;
        case "WAWAMOVEMESSAGE":
        case 12:
            message.packageType = 12;
            break;
        case "WAWARESULTMESSAGE":
        case 13:
            message.packageType = 13;
            break;
        case "PLAYGAMEORDER":
        case 14:
            message.packageType = 14;
            break;
        case "TESTMESSAGE":
        case 15:
            message.packageType = 15;
            break;
        case "CANCELGAMEMESSAGE":
        case 16:
            message.packageType = 16;
            break;
        case "EXITGAMEMESSAGE":
        case 17:
            message.packageType = 17;
            break;
        case "GAMECOMPLETEDMESSAGE":
        case 18:
            message.packageType = 18;
            break;
        case "MACHINEFAILEDMESSAGE":
        case 19:
            message.packageType = 19;
            break;
        case "GIFTPRICEMESSAGE":
        case 20:
            message.packageType = 20;
            break;
        }
        if (object.loginMessage != null) {
            if (typeof object.loginMessage !== "object")
                throw TypeError(".DataPackage.loginMessage: object expected");
            message.loginMessage = $root.LoginMessage.fromObject(object.loginMessage);
        }
        if (object.sendMessageToRoomMate != null) {
            if (typeof object.sendMessageToRoomMate !== "object")
                throw TypeError(".DataPackage.sendMessageToRoomMate: object expected");
            message.sendMessageToRoomMate = $root.SendMessageToRoomMate.fromObject(object.sendMessageToRoomMate);
        }
        if (object.startQueueMessage != null) {
            if (typeof object.startQueueMessage !== "object")
                throw TypeError(".DataPackage.startQueueMessage: object expected");
            message.startQueueMessage = $root.StartQueueMessage.fromObject(object.startQueueMessage);
        }
        if (object.startGameMessage != null) {
            if (typeof object.startGameMessage !== "object")
                throw TypeError(".DataPackage.startGameMessage: object expected");
            message.startGameMessage = $root.StartGameMessage.fromObject(object.startGameMessage);
        }
        if (object.armMoveMessage != null) {
            if (typeof object.armMoveMessage !== "object")
                throw TypeError(".DataPackage.armMoveMessage: object expected");
            message.armMoveMessage = $root.ArmMoveMessage.fromObject(object.armMoveMessage);
        }
        if (object.heartMessage != null) {
            if (typeof object.heartMessage !== "object")
                throw TypeError(".DataPackage.heartMessage: object expected");
            message.heartMessage = $root.HeartMessage.fromObject(object.heartMessage);
        }
        if (object.gameResultMessage != null) {
            if (typeof object.gameResultMessage !== "object")
                throw TypeError(".DataPackage.gameResultMessage: object expected");
            message.gameResultMessage = $root.GameResultMessage.fromObject(object.gameResultMessage);
        }
        if (object.ballCountMessage != null) {
            if (typeof object.ballCountMessage !== "object")
                throw TypeError(".DataPackage.ballCountMessage: object expected");
            message.ballCountMessage = $root.BallCountMessage.fromObject(object.ballCountMessage);
        }
        if (object.scoreMessage != null) {
            if (typeof object.scoreMessage !== "object")
                throw TypeError(".DataPackage.scoreMessage: object expected");
            message.scoreMessage = $root.ScoreMessage.fromObject(object.scoreMessage);
        }
        if (object.enterRoomMessage != null) {
            if (typeof object.enterRoomMessage !== "object")
                throw TypeError(".DataPackage.enterRoomMessage: object expected");
            message.enterRoomMessage = $root.EnterRoomMessage.fromObject(object.enterRoomMessage);
        }
        if (object.exitRoomMessage != null) {
            if (typeof object.exitRoomMessage !== "object")
                throw TypeError(".DataPackage.exitRoomMessage: object expected");
            message.exitRoomMessage = $root.ExitRoomMessage.fromObject(object.exitRoomMessage);
        }
        if (object.numberOfPeopleInTheRoomMessage != null) {
            if (typeof object.numberOfPeopleInTheRoomMessage !== "object")
                throw TypeError(".DataPackage.numberOfPeopleInTheRoomMessage: object expected");
            message.numberOfPeopleInTheRoomMessage = $root.NumberOfPeopleInTheRoomMessage.fromObject(object.numberOfPeopleInTheRoomMessage);
        }
        if (object.wawaMoveMessage != null) {
            if (typeof object.wawaMoveMessage !== "object")
                throw TypeError(".DataPackage.wawaMoveMessage: object expected");
            message.wawaMoveMessage = $root.WawaMoveMessage.fromObject(object.wawaMoveMessage);
        }
        if (object.wawaResultMessage != null) {
            if (typeof object.wawaResultMessage !== "object")
                throw TypeError(".DataPackage.wawaResultMessage: object expected");
            message.wawaResultMessage = $root.WawaResultMessage.fromObject(object.wawaResultMessage);
        }
        if (object.playGameOrder != null) {
            if (typeof object.playGameOrder !== "object")
                throw TypeError(".DataPackage.playGameOrder: object expected");
            message.playGameOrder = $root.PlayGameOrder.fromObject(object.playGameOrder);
        }
        if (object.tsetMessage != null) {
            if (typeof object.tsetMessage !== "object")
                throw TypeError(".DataPackage.tsetMessage: object expected");
            message.tsetMessage = $root.TestMessage.fromObject(object.tsetMessage);
        }
        if (object.cancelGameMessage != null) {
            if (typeof object.cancelGameMessage !== "object")
                throw TypeError(".DataPackage.cancelGameMessage: object expected");
            message.cancelGameMessage = $root.CancelGameMessage.fromObject(object.cancelGameMessage);
        }
        if (object.exitGameMessage != null) {
            if (typeof object.exitGameMessage !== "object")
                throw TypeError(".DataPackage.exitGameMessage: object expected");
            message.exitGameMessage = $root.ExitGameMessage.fromObject(object.exitGameMessage);
        }
        if (object.gameCompletedMessage != null) {
            if (typeof object.gameCompletedMessage !== "object")
                throw TypeError(".DataPackage.gameCompletedMessage: object expected");
            message.gameCompletedMessage = $root.GameCompletedMessage.fromObject(object.gameCompletedMessage);
        }
        if (object.machineFailedMessage != null) {
            if (typeof object.machineFailedMessage !== "object")
                throw TypeError(".DataPackage.machineFailedMessage: object expected");
            message.machineFailedMessage = $root.MachineFailedMessage.fromObject(object.machineFailedMessage);
        }
        if (object.giftPriceMessage != null) {
            if (typeof object.giftPriceMessage !== "object")
                throw TypeError(".DataPackage.giftPriceMessage: object expected");
            message.giftPriceMessage = $root.GiftPriceMessage.fromObject(object.giftPriceMessage);
        }
        return message;
    };

    /**
     * Creates a plain object from a DataPackage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DataPackage
     * @static
     * @param {DataPackage} message DataPackage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DataPackage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.packageType = options.enums === String ? "LOGIN" : 0;
        if (message.packageType != null && message.hasOwnProperty("packageType"))
            object.packageType = options.enums === String ? $root.PackageType[message.packageType] === undefined ? message.packageType : $root.PackageType[message.packageType] : message.packageType;
        if (message.loginMessage != null && message.hasOwnProperty("loginMessage")) {
            object.loginMessage = $root.LoginMessage.toObject(message.loginMessage, options);
            if (options.oneofs)
                object.Package = "loginMessage";
        }
        if (message.sendMessageToRoomMate != null && message.hasOwnProperty("sendMessageToRoomMate")) {
            object.sendMessageToRoomMate = $root.SendMessageToRoomMate.toObject(message.sendMessageToRoomMate, options);
            if (options.oneofs)
                object.Package = "sendMessageToRoomMate";
        }
        if (message.startQueueMessage != null && message.hasOwnProperty("startQueueMessage")) {
            object.startQueueMessage = $root.StartQueueMessage.toObject(message.startQueueMessage, options);
            if (options.oneofs)
                object.Package = "startQueueMessage";
        }
        if (message.startGameMessage != null && message.hasOwnProperty("startGameMessage")) {
            object.startGameMessage = $root.StartGameMessage.toObject(message.startGameMessage, options);
            if (options.oneofs)
                object.Package = "startGameMessage";
        }
        if (message.armMoveMessage != null && message.hasOwnProperty("armMoveMessage")) {
            object.armMoveMessage = $root.ArmMoveMessage.toObject(message.armMoveMessage, options);
            if (options.oneofs)
                object.Package = "armMoveMessage";
        }
        if (message.heartMessage != null && message.hasOwnProperty("heartMessage")) {
            object.heartMessage = $root.HeartMessage.toObject(message.heartMessage, options);
            if (options.oneofs)
                object.Package = "heartMessage";
        }
        if (message.gameResultMessage != null && message.hasOwnProperty("gameResultMessage")) {
            object.gameResultMessage = $root.GameResultMessage.toObject(message.gameResultMessage, options);
            if (options.oneofs)
                object.Package = "gameResultMessage";
        }
        if (message.ballCountMessage != null && message.hasOwnProperty("ballCountMessage")) {
            object.ballCountMessage = $root.BallCountMessage.toObject(message.ballCountMessage, options);
            if (options.oneofs)
                object.Package = "ballCountMessage";
        }
        if (message.scoreMessage != null && message.hasOwnProperty("scoreMessage")) {
            object.scoreMessage = $root.ScoreMessage.toObject(message.scoreMessage, options);
            if (options.oneofs)
                object.Package = "scoreMessage";
        }
        if (message.enterRoomMessage != null && message.hasOwnProperty("enterRoomMessage")) {
            object.enterRoomMessage = $root.EnterRoomMessage.toObject(message.enterRoomMessage, options);
            if (options.oneofs)
                object.Package = "enterRoomMessage";
        }
        if (message.exitRoomMessage != null && message.hasOwnProperty("exitRoomMessage")) {
            object.exitRoomMessage = $root.ExitRoomMessage.toObject(message.exitRoomMessage, options);
            if (options.oneofs)
                object.Package = "exitRoomMessage";
        }
        if (message.numberOfPeopleInTheRoomMessage != null && message.hasOwnProperty("numberOfPeopleInTheRoomMessage")) {
            object.numberOfPeopleInTheRoomMessage = $root.NumberOfPeopleInTheRoomMessage.toObject(message.numberOfPeopleInTheRoomMessage, options);
            if (options.oneofs)
                object.Package = "numberOfPeopleInTheRoomMessage";
        }
        if (message.wawaMoveMessage != null && message.hasOwnProperty("wawaMoveMessage")) {
            object.wawaMoveMessage = $root.WawaMoveMessage.toObject(message.wawaMoveMessage, options);
            if (options.oneofs)
                object.Package = "wawaMoveMessage";
        }
        if (message.wawaResultMessage != null && message.hasOwnProperty("wawaResultMessage")) {
            object.wawaResultMessage = $root.WawaResultMessage.toObject(message.wawaResultMessage, options);
            if (options.oneofs)
                object.Package = "wawaResultMessage";
        }
        if (message.playGameOrder != null && message.hasOwnProperty("playGameOrder")) {
            object.playGameOrder = $root.PlayGameOrder.toObject(message.playGameOrder, options);
            if (options.oneofs)
                object.Package = "playGameOrder";
        }
        if (message.tsetMessage != null && message.hasOwnProperty("tsetMessage")) {
            object.tsetMessage = $root.TestMessage.toObject(message.tsetMessage, options);
            if (options.oneofs)
                object.Package = "tsetMessage";
        }
        if (message.cancelGameMessage != null && message.hasOwnProperty("cancelGameMessage")) {
            object.cancelGameMessage = $root.CancelGameMessage.toObject(message.cancelGameMessage, options);
            if (options.oneofs)
                object.Package = "cancelGameMessage";
        }
        if (message.exitGameMessage != null && message.hasOwnProperty("exitGameMessage")) {
            object.exitGameMessage = $root.ExitGameMessage.toObject(message.exitGameMessage, options);
            if (options.oneofs)
                object.Package = "exitGameMessage";
        }
        if (message.gameCompletedMessage != null && message.hasOwnProperty("gameCompletedMessage")) {
            object.gameCompletedMessage = $root.GameCompletedMessage.toObject(message.gameCompletedMessage, options);
            if (options.oneofs)
                object.Package = "gameCompletedMessage";
        }
        if (message.machineFailedMessage != null && message.hasOwnProperty("machineFailedMessage")) {
            object.machineFailedMessage = $root.MachineFailedMessage.toObject(message.machineFailedMessage, options);
            if (options.oneofs)
                object.Package = "machineFailedMessage";
        }
        if (message.giftPriceMessage != null && message.hasOwnProperty("giftPriceMessage")) {
            object.giftPriceMessage = $root.GiftPriceMessage.toObject(message.giftPriceMessage, options);
            if (options.oneofs)
                object.Package = "giftPriceMessage";
        }
        return object;
    };

    /**
     * Converts this DataPackage to JSON.
     * @function toJSON
     * @memberof DataPackage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DataPackage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DataPackage
     * @function getTypeUrl
     * @memberof DataPackage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DataPackage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DataPackage";
    };

    return DataPackage;
})();

/**
 * PackageType enum.
 * @exports PackageType
 * @enum {number}
 * @property {number} LOGIN=0 LOGIN value
 * @property {number} SENDMESSAGETOROOMMATE=1 SENDMESSAGETOROOMMATE value
 * @property {number} STARTQUEUEMESSAGE=2 STARTQUEUEMESSAGE value
 * @property {number} STARTGAMEMESSAGE=3 STARTGAMEMESSAGE value
 * @property {number} ARMMOVEMESSAGE=4 ARMMOVEMESSAGE value
 * @property {number} HEARTMESSAGE=5 HEARTMESSAGE value
 * @property {number} GAMERESULTMESSAGE=6 GAMERESULTMESSAGE value
 * @property {number} BALLCOUNTMESSAGE=7 BALLCOUNTMESSAGE value
 * @property {number} SCOREMESSAGE=8 SCOREMESSAGE value
 * @property {number} ENTERROOMMESSAGE=9 ENTERROOMMESSAGE value
 * @property {number} EXITROOMMESSAGE=10 EXITROOMMESSAGE value
 * @property {number} NUMBEROfPEOPLEINTHEROOMMESSAGE=11 NUMBEROfPEOPLEINTHEROOMMESSAGE value
 * @property {number} WAWAMOVEMESSAGE=12 WAWAMOVEMESSAGE value
 * @property {number} WAWARESULTMESSAGE=13 WAWARESULTMESSAGE value
 * @property {number} PLAYGAMEORDER=14 PLAYGAMEORDER value
 * @property {number} TESTMESSAGE=15 TESTMESSAGE value
 * @property {number} CANCELGAMEMESSAGE=16 CANCELGAMEMESSAGE value
 * @property {number} EXITGAMEMESSAGE=17 EXITGAMEMESSAGE value
 * @property {number} GAMECOMPLETEDMESSAGE=18 GAMECOMPLETEDMESSAGE value
 * @property {number} MACHINEFAILEDMESSAGE=19 MACHINEFAILEDMESSAGE value
 * @property {number} GIFTPRICEMESSAGE=20 GIFTPRICEMESSAGE value
 */
export const PackageType = $root.PackageType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "LOGIN"] = 0;
    values[valuesById[1] = "SENDMESSAGETOROOMMATE"] = 1;
    values[valuesById[2] = "STARTQUEUEMESSAGE"] = 2;
    values[valuesById[3] = "STARTGAMEMESSAGE"] = 3;
    values[valuesById[4] = "ARMMOVEMESSAGE"] = 4;
    values[valuesById[5] = "HEARTMESSAGE"] = 5;
    values[valuesById[6] = "GAMERESULTMESSAGE"] = 6;
    values[valuesById[7] = "BALLCOUNTMESSAGE"] = 7;
    values[valuesById[8] = "SCOREMESSAGE"] = 8;
    values[valuesById[9] = "ENTERROOMMESSAGE"] = 9;
    values[valuesById[10] = "EXITROOMMESSAGE"] = 10;
    values[valuesById[11] = "NUMBEROfPEOPLEINTHEROOMMESSAGE"] = 11;
    values[valuesById[12] = "WAWAMOVEMESSAGE"] = 12;
    values[valuesById[13] = "WAWARESULTMESSAGE"] = 13;
    values[valuesById[14] = "PLAYGAMEORDER"] = 14;
    values[valuesById[15] = "TESTMESSAGE"] = 15;
    values[valuesById[16] = "CANCELGAMEMESSAGE"] = 16;
    values[valuesById[17] = "EXITGAMEMESSAGE"] = 17;
    values[valuesById[18] = "GAMECOMPLETEDMESSAGE"] = 18;
    values[valuesById[19] = "MACHINEFAILEDMESSAGE"] = 19;
    values[valuesById[20] = "GIFTPRICEMESSAGE"] = 20;
    return values;
})();

export const LoginMessage = $root.LoginMessage = (() => {

    /**
     * Properties of a LoginMessage.
     * @exports ILoginMessage
     * @interface ILoginMessage
     * @property {string|null} [userID] LoginMessage userID
     * @property {string|null} [tempPasswd] LoginMessage tempPasswd
     * @property {boolean|null} [isServerSide] LoginMessage isServerSide
     * @property {boolean|null} [loginResult] LoginMessage loginResult
     * @property {string|null} [deviceID] LoginMessage deviceID
     */

    /**
     * Constructs a new LoginMessage.
     * @exports LoginMessage
     * @classdesc Represents a LoginMessage.
     * @implements ILoginMessage
     * @constructor
     * @param {ILoginMessage=} [properties] Properties to set
     */
    function LoginMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginMessage userID.
     * @member {string} userID
     * @memberof LoginMessage
     * @instance
     */
    LoginMessage.prototype.userID = "";

    /**
     * LoginMessage tempPasswd.
     * @member {string} tempPasswd
     * @memberof LoginMessage
     * @instance
     */
    LoginMessage.prototype.tempPasswd = "";

    /**
     * LoginMessage isServerSide.
     * @member {boolean} isServerSide
     * @memberof LoginMessage
     * @instance
     */
    LoginMessage.prototype.isServerSide = false;

    /**
     * LoginMessage loginResult.
     * @member {boolean} loginResult
     * @memberof LoginMessage
     * @instance
     */
    LoginMessage.prototype.loginResult = false;

    /**
     * LoginMessage deviceID.
     * @member {string} deviceID
     * @memberof LoginMessage
     * @instance
     */
    LoginMessage.prototype.deviceID = "";

    /**
     * Creates a new LoginMessage instance using the specified properties.
     * @function create
     * @memberof LoginMessage
     * @static
     * @param {ILoginMessage=} [properties] Properties to set
     * @returns {LoginMessage} LoginMessage instance
     */
    LoginMessage.create = function create(properties) {
        return new LoginMessage(properties);
    };

    /**
     * Encodes the specified LoginMessage message. Does not implicitly {@link LoginMessage.verify|verify} messages.
     * @function encode
     * @memberof LoginMessage
     * @static
     * @param {ILoginMessage} message LoginMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.tempPasswd != null && Object.hasOwnProperty.call(message, "tempPasswd"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tempPasswd);
        if (message.isServerSide != null && Object.hasOwnProperty.call(message, "isServerSide"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isServerSide);
        if (message.loginResult != null && Object.hasOwnProperty.call(message, "loginResult"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.loginResult);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified LoginMessage message, length delimited. Does not implicitly {@link LoginMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginMessage
     * @static
     * @param {ILoginMessage} message LoginMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginMessage message from the specified reader or buffer.
     * @function decode
     * @memberof LoginMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginMessage} LoginMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.tempPasswd = reader.string();
                    break;
                }
            case 3: {
                    message.isServerSide = reader.bool();
                    break;
                }
            case 4: {
                    message.loginResult = reader.bool();
                    break;
                }
            case 5: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoginMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginMessage} LoginMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginMessage message.
     * @function verify
     * @memberof LoginMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.tempPasswd != null && message.hasOwnProperty("tempPasswd"))
            if (!$util.isString(message.tempPasswd))
                return "tempPasswd: string expected";
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            if (typeof message.isServerSide !== "boolean")
                return "isServerSide: boolean expected";
        if (message.loginResult != null && message.hasOwnProperty("loginResult"))
            if (typeof message.loginResult !== "boolean")
                return "loginResult: boolean expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a LoginMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginMessage} LoginMessage
     */
    LoginMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginMessage)
            return object;
        let message = new $root.LoginMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.tempPasswd != null)
            message.tempPasswd = String(object.tempPasswd);
        if (object.isServerSide != null)
            message.isServerSide = Boolean(object.isServerSide);
        if (object.loginResult != null)
            message.loginResult = Boolean(object.loginResult);
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a LoginMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginMessage
     * @static
     * @param {LoginMessage} message LoginMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.tempPasswd = "";
            object.isServerSide = false;
            object.loginResult = false;
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.tempPasswd != null && message.hasOwnProperty("tempPasswd"))
            object.tempPasswd = message.tempPasswd;
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            object.isServerSide = message.isServerSide;
        if (message.loginResult != null && message.hasOwnProperty("loginResult"))
            object.loginResult = message.loginResult;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this LoginMessage to JSON.
     * @function toJSON
     * @memberof LoginMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LoginMessage
     * @function getTypeUrl
     * @memberof LoginMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LoginMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LoginMessage";
    };

    return LoginMessage;
})();

export const SendMessageToRoomMate = $root.SendMessageToRoomMate = (() => {

    /**
     * Properties of a SendMessageToRoomMate.
     * @exports ISendMessageToRoomMate
     * @interface ISendMessageToRoomMate
     * @property {string|null} [senderUserID] SendMessageToRoomMate senderUserID
     * @property {string|null} [roomID] SendMessageToRoomMate roomID
     * @property {string|null} [msgData] SendMessageToRoomMate msgData
     * @property {string|null} [senderUserName] SendMessageToRoomMate senderUserName
     * @property {string|null} [deviceID] SendMessageToRoomMate deviceID
     */

    /**
     * Constructs a new SendMessageToRoomMate.
     * @exports SendMessageToRoomMate
     * @classdesc Represents a SendMessageToRoomMate.
     * @implements ISendMessageToRoomMate
     * @constructor
     * @param {ISendMessageToRoomMate=} [properties] Properties to set
     */
    function SendMessageToRoomMate(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendMessageToRoomMate senderUserID.
     * @member {string} senderUserID
     * @memberof SendMessageToRoomMate
     * @instance
     */
    SendMessageToRoomMate.prototype.senderUserID = "";

    /**
     * SendMessageToRoomMate roomID.
     * @member {string} roomID
     * @memberof SendMessageToRoomMate
     * @instance
     */
    SendMessageToRoomMate.prototype.roomID = "";

    /**
     * SendMessageToRoomMate msgData.
     * @member {string} msgData
     * @memberof SendMessageToRoomMate
     * @instance
     */
    SendMessageToRoomMate.prototype.msgData = "";

    /**
     * SendMessageToRoomMate senderUserName.
     * @member {string} senderUserName
     * @memberof SendMessageToRoomMate
     * @instance
     */
    SendMessageToRoomMate.prototype.senderUserName = "";

    /**
     * SendMessageToRoomMate deviceID.
     * @member {string} deviceID
     * @memberof SendMessageToRoomMate
     * @instance
     */
    SendMessageToRoomMate.prototype.deviceID = "";

    /**
     * Creates a new SendMessageToRoomMate instance using the specified properties.
     * @function create
     * @memberof SendMessageToRoomMate
     * @static
     * @param {ISendMessageToRoomMate=} [properties] Properties to set
     * @returns {SendMessageToRoomMate} SendMessageToRoomMate instance
     */
    SendMessageToRoomMate.create = function create(properties) {
        return new SendMessageToRoomMate(properties);
    };

    /**
     * Encodes the specified SendMessageToRoomMate message. Does not implicitly {@link SendMessageToRoomMate.verify|verify} messages.
     * @function encode
     * @memberof SendMessageToRoomMate
     * @static
     * @param {ISendMessageToRoomMate} message SendMessageToRoomMate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMessageToRoomMate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.senderUserID != null && Object.hasOwnProperty.call(message, "senderUserID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.senderUserID);
        if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomID);
        if (message.msgData != null && Object.hasOwnProperty.call(message, "msgData"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.msgData);
        if (message.senderUserName != null && Object.hasOwnProperty.call(message, "senderUserName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.senderUserName);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified SendMessageToRoomMate message, length delimited. Does not implicitly {@link SendMessageToRoomMate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendMessageToRoomMate
     * @static
     * @param {ISendMessageToRoomMate} message SendMessageToRoomMate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendMessageToRoomMate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendMessageToRoomMate message from the specified reader or buffer.
     * @function decode
     * @memberof SendMessageToRoomMate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendMessageToRoomMate} SendMessageToRoomMate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMessageToRoomMate.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendMessageToRoomMate();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.senderUserID = reader.string();
                    break;
                }
            case 2: {
                    message.roomID = reader.string();
                    break;
                }
            case 3: {
                    message.msgData = reader.string();
                    break;
                }
            case 4: {
                    message.senderUserName = reader.string();
                    break;
                }
            case 5: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SendMessageToRoomMate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendMessageToRoomMate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendMessageToRoomMate} SendMessageToRoomMate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendMessageToRoomMate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendMessageToRoomMate message.
     * @function verify
     * @memberof SendMessageToRoomMate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendMessageToRoomMate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.senderUserID != null && message.hasOwnProperty("senderUserID"))
            if (!$util.isString(message.senderUserID))
                return "senderUserID: string expected";
        if (message.roomID != null && message.hasOwnProperty("roomID"))
            if (!$util.isString(message.roomID))
                return "roomID: string expected";
        if (message.msgData != null && message.hasOwnProperty("msgData"))
            if (!$util.isString(message.msgData))
                return "msgData: string expected";
        if (message.senderUserName != null && message.hasOwnProperty("senderUserName"))
            if (!$util.isString(message.senderUserName))
                return "senderUserName: string expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a SendMessageToRoomMate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendMessageToRoomMate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendMessageToRoomMate} SendMessageToRoomMate
     */
    SendMessageToRoomMate.fromObject = function fromObject(object) {
        if (object instanceof $root.SendMessageToRoomMate)
            return object;
        let message = new $root.SendMessageToRoomMate();
        if (object.senderUserID != null)
            message.senderUserID = String(object.senderUserID);
        if (object.roomID != null)
            message.roomID = String(object.roomID);
        if (object.msgData != null)
            message.msgData = String(object.msgData);
        if (object.senderUserName != null)
            message.senderUserName = String(object.senderUserName);
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a SendMessageToRoomMate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendMessageToRoomMate
     * @static
     * @param {SendMessageToRoomMate} message SendMessageToRoomMate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendMessageToRoomMate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.senderUserID = "";
            object.roomID = "";
            object.msgData = "";
            object.senderUserName = "";
            object.deviceID = "";
        }
        if (message.senderUserID != null && message.hasOwnProperty("senderUserID"))
            object.senderUserID = message.senderUserID;
        if (message.roomID != null && message.hasOwnProperty("roomID"))
            object.roomID = message.roomID;
        if (message.msgData != null && message.hasOwnProperty("msgData"))
            object.msgData = message.msgData;
        if (message.senderUserName != null && message.hasOwnProperty("senderUserName"))
            object.senderUserName = message.senderUserName;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this SendMessageToRoomMate to JSON.
     * @function toJSON
     * @memberof SendMessageToRoomMate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendMessageToRoomMate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SendMessageToRoomMate
     * @function getTypeUrl
     * @memberof SendMessageToRoomMate
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SendMessageToRoomMate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SendMessageToRoomMate";
    };

    return SendMessageToRoomMate;
})();

export const StartQueueMessage = $root.StartQueueMessage = (() => {

    /**
     * Properties of a StartQueueMessage.
     * @exports IStartQueueMessage
     * @interface IStartQueueMessage
     * @property {string|null} [userID] StartQueueMessage userID
     * @property {string|null} [macNo] StartQueueMessage macNo
     * @property {boolean|null} [isServerSide] StartQueueMessage isServerSide
     * @property {number|null} [startQueueResult] StartQueueMessage startQueueResult
     * @property {string|null} [des] StartQueueMessage des
     * @property {number|Long|null} [totalGold] StartQueueMessage totalGold
     * @property {number|null} [gameDuring] StartQueueMessage gameDuring
     * @property {number|null} [playTimes] StartQueueMessage playTimes
     * @property {string|null} [giftID] StartQueueMessage giftID
     * @property {string|null} [gameID] StartQueueMessage gameID
     * @property {boolean|null} [playAgain] StartQueueMessage playAgain
     * @property {number|Long|null} [giftPrice] StartQueueMessage giftPrice
     * @property {string|null} [deviceID] StartQueueMessage deviceID
     */

    /**
     * Constructs a new StartQueueMessage.
     * @exports StartQueueMessage
     * @classdesc Represents a StartQueueMessage.
     * @implements IStartQueueMessage
     * @constructor
     * @param {IStartQueueMessage=} [properties] Properties to set
     */
    function StartQueueMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StartQueueMessage userID.
     * @member {string} userID
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.userID = "";

    /**
     * StartQueueMessage macNo.
     * @member {string} macNo
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.macNo = "";

    /**
     * StartQueueMessage isServerSide.
     * @member {boolean} isServerSide
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.isServerSide = false;

    /**
     * StartQueueMessage startQueueResult.
     * @member {number} startQueueResult
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.startQueueResult = 0;

    /**
     * StartQueueMessage des.
     * @member {string} des
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.des = "";

    /**
     * StartQueueMessage totalGold.
     * @member {number|Long} totalGold
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.totalGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * StartQueueMessage gameDuring.
     * @member {number} gameDuring
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.gameDuring = 0;

    /**
     * StartQueueMessage playTimes.
     * @member {number} playTimes
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.playTimes = 0;

    /**
     * StartQueueMessage giftID.
     * @member {string} giftID
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.giftID = "";

    /**
     * StartQueueMessage gameID.
     * @member {string} gameID
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.gameID = "";

    /**
     * StartQueueMessage playAgain.
     * @member {boolean} playAgain
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.playAgain = false;

    /**
     * StartQueueMessage giftPrice.
     * @member {number|Long} giftPrice
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.giftPrice = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * StartQueueMessage deviceID.
     * @member {string} deviceID
     * @memberof StartQueueMessage
     * @instance
     */
    StartQueueMessage.prototype.deviceID = "";

    /**
     * Creates a new StartQueueMessage instance using the specified properties.
     * @function create
     * @memberof StartQueueMessage
     * @static
     * @param {IStartQueueMessage=} [properties] Properties to set
     * @returns {StartQueueMessage} StartQueueMessage instance
     */
    StartQueueMessage.create = function create(properties) {
        return new StartQueueMessage(properties);
    };

    /**
     * Encodes the specified StartQueueMessage message. Does not implicitly {@link StartQueueMessage.verify|verify} messages.
     * @function encode
     * @memberof StartQueueMessage
     * @static
     * @param {IStartQueueMessage} message StartQueueMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartQueueMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.isServerSide != null && Object.hasOwnProperty.call(message, "isServerSide"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isServerSide);
        if (message.startQueueResult != null && Object.hasOwnProperty.call(message, "startQueueResult"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.startQueueResult);
        if (message.des != null && Object.hasOwnProperty.call(message, "des"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.des);
        if (message.totalGold != null && Object.hasOwnProperty.call(message, "totalGold"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.totalGold);
        if (message.gameDuring != null && Object.hasOwnProperty.call(message, "gameDuring"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.gameDuring);
        if (message.playTimes != null && Object.hasOwnProperty.call(message, "playTimes"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.playTimes);
        if (message.giftID != null && Object.hasOwnProperty.call(message, "giftID"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.giftID);
        if (message.gameID != null && Object.hasOwnProperty.call(message, "gameID"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.gameID);
        if (message.playAgain != null && Object.hasOwnProperty.call(message, "playAgain"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.playAgain);
        if (message.giftPrice != null && Object.hasOwnProperty.call(message, "giftPrice"))
            writer.uint32(/* id 12, wireType 0 =*/96).int64(message.giftPrice);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified StartQueueMessage message, length delimited. Does not implicitly {@link StartQueueMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartQueueMessage
     * @static
     * @param {IStartQueueMessage} message StartQueueMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartQueueMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StartQueueMessage message from the specified reader or buffer.
     * @function decode
     * @memberof StartQueueMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartQueueMessage} StartQueueMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartQueueMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.StartQueueMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.isServerSide = reader.bool();
                    break;
                }
            case 4: {
                    message.startQueueResult = reader.int32();
                    break;
                }
            case 5: {
                    message.des = reader.string();
                    break;
                }
            case 6: {
                    message.totalGold = reader.int64();
                    break;
                }
            case 7: {
                    message.gameDuring = reader.int32();
                    break;
                }
            case 8: {
                    message.playTimes = reader.int32();
                    break;
                }
            case 9: {
                    message.giftID = reader.string();
                    break;
                }
            case 10: {
                    message.gameID = reader.string();
                    break;
                }
            case 11: {
                    message.playAgain = reader.bool();
                    break;
                }
            case 12: {
                    message.giftPrice = reader.int64();
                    break;
                }
            case 13: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StartQueueMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StartQueueMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartQueueMessage} StartQueueMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartQueueMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StartQueueMessage message.
     * @function verify
     * @memberof StartQueueMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StartQueueMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            if (typeof message.isServerSide !== "boolean")
                return "isServerSide: boolean expected";
        if (message.startQueueResult != null && message.hasOwnProperty("startQueueResult"))
            if (!$util.isInteger(message.startQueueResult))
                return "startQueueResult: integer expected";
        if (message.des != null && message.hasOwnProperty("des"))
            if (!$util.isString(message.des))
                return "des: string expected";
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (!$util.isInteger(message.totalGold) && !(message.totalGold && $util.isInteger(message.totalGold.low) && $util.isInteger(message.totalGold.high)))
                return "totalGold: integer|Long expected";
        if (message.gameDuring != null && message.hasOwnProperty("gameDuring"))
            if (!$util.isInteger(message.gameDuring))
                return "gameDuring: integer expected";
        if (message.playTimes != null && message.hasOwnProperty("playTimes"))
            if (!$util.isInteger(message.playTimes))
                return "playTimes: integer expected";
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            if (!$util.isString(message.giftID))
                return "giftID: string expected";
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            if (!$util.isString(message.gameID))
                return "gameID: string expected";
        if (message.playAgain != null && message.hasOwnProperty("playAgain"))
            if (typeof message.playAgain !== "boolean")
                return "playAgain: boolean expected";
        if (message.giftPrice != null && message.hasOwnProperty("giftPrice"))
            if (!$util.isInteger(message.giftPrice) && !(message.giftPrice && $util.isInteger(message.giftPrice.low) && $util.isInteger(message.giftPrice.high)))
                return "giftPrice: integer|Long expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a StartQueueMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StartQueueMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartQueueMessage} StartQueueMessage
     */
    StartQueueMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.StartQueueMessage)
            return object;
        let message = new $root.StartQueueMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.isServerSide != null)
            message.isServerSide = Boolean(object.isServerSide);
        if (object.startQueueResult != null)
            message.startQueueResult = object.startQueueResult | 0;
        if (object.des != null)
            message.des = String(object.des);
        if (object.totalGold != null)
            if ($util.Long)
                (message.totalGold = $util.Long.fromValue(object.totalGold)).unsigned = false;
            else if (typeof object.totalGold === "string")
                message.totalGold = parseInt(object.totalGold, 10);
            else if (typeof object.totalGold === "number")
                message.totalGold = object.totalGold;
            else if (typeof object.totalGold === "object")
                message.totalGold = new $util.LongBits(object.totalGold.low >>> 0, object.totalGold.high >>> 0).toNumber();
        if (object.gameDuring != null)
            message.gameDuring = object.gameDuring | 0;
        if (object.playTimes != null)
            message.playTimes = object.playTimes | 0;
        if (object.giftID != null)
            message.giftID = String(object.giftID);
        if (object.gameID != null)
            message.gameID = String(object.gameID);
        if (object.playAgain != null)
            message.playAgain = Boolean(object.playAgain);
        if (object.giftPrice != null)
            if ($util.Long)
                (message.giftPrice = $util.Long.fromValue(object.giftPrice)).unsigned = false;
            else if (typeof object.giftPrice === "string")
                message.giftPrice = parseInt(object.giftPrice, 10);
            else if (typeof object.giftPrice === "number")
                message.giftPrice = object.giftPrice;
            else if (typeof object.giftPrice === "object")
                message.giftPrice = new $util.LongBits(object.giftPrice.low >>> 0, object.giftPrice.high >>> 0).toNumber();
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a StartQueueMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartQueueMessage
     * @static
     * @param {StartQueueMessage} message StartQueueMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StartQueueMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.isServerSide = false;
            object.startQueueResult = 0;
            object.des = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.totalGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalGold = options.longs === String ? "0" : 0;
            object.gameDuring = 0;
            object.playTimes = 0;
            object.giftID = "";
            object.gameID = "";
            object.playAgain = false;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.giftPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.giftPrice = options.longs === String ? "0" : 0;
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            object.isServerSide = message.isServerSide;
        if (message.startQueueResult != null && message.hasOwnProperty("startQueueResult"))
            object.startQueueResult = message.startQueueResult;
        if (message.des != null && message.hasOwnProperty("des"))
            object.des = message.des;
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (typeof message.totalGold === "number")
                object.totalGold = options.longs === String ? String(message.totalGold) : message.totalGold;
            else
                object.totalGold = options.longs === String ? $util.Long.prototype.toString.call(message.totalGold) : options.longs === Number ? new $util.LongBits(message.totalGold.low >>> 0, message.totalGold.high >>> 0).toNumber() : message.totalGold;
        if (message.gameDuring != null && message.hasOwnProperty("gameDuring"))
            object.gameDuring = message.gameDuring;
        if (message.playTimes != null && message.hasOwnProperty("playTimes"))
            object.playTimes = message.playTimes;
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            object.giftID = message.giftID;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.playAgain != null && message.hasOwnProperty("playAgain"))
            object.playAgain = message.playAgain;
        if (message.giftPrice != null && message.hasOwnProperty("giftPrice"))
            if (typeof message.giftPrice === "number")
                object.giftPrice = options.longs === String ? String(message.giftPrice) : message.giftPrice;
            else
                object.giftPrice = options.longs === String ? $util.Long.prototype.toString.call(message.giftPrice) : options.longs === Number ? new $util.LongBits(message.giftPrice.low >>> 0, message.giftPrice.high >>> 0).toNumber() : message.giftPrice;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this StartQueueMessage to JSON.
     * @function toJSON
     * @memberof StartQueueMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StartQueueMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for StartQueueMessage
     * @function getTypeUrl
     * @memberof StartQueueMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StartQueueMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StartQueueMessage";
    };

    return StartQueueMessage;
})();

export const StartGameMessage = $root.StartGameMessage = (() => {

    /**
     * Properties of a StartGameMessage.
     * @exports IStartGameMessage
     * @interface IStartGameMessage
     * @property {string|null} [userID] StartGameMessage userID
     * @property {string|null} [macNo] StartGameMessage macNo
     * @property {boolean|null} [isServerSide] StartGameMessage isServerSide
     * @property {number|null} [startGameResult] StartGameMessage startGameResult
     * @property {string|null} [des] StartGameMessage des
     * @property {number|null} [ballCount] StartGameMessage ballCount
     * @property {number|Long|null} [totalGold] StartGameMessage totalGold
     * @property {number|Long|null} [refundGold] StartGameMessage refundGold
     * @property {number|null} [gameDuring] StartGameMessage gameDuring
     * @property {number|null} [retryCount] StartGameMessage retryCount
     * @property {string|null} [giftID] StartGameMessage giftID
     * @property {string|null} [gameID] StartGameMessage gameID
     * @property {number|Long|null} [giftPrice] StartGameMessage giftPrice
     * @property {string|null} [deviceID] StartGameMessage deviceID
     */

    /**
     * Constructs a new StartGameMessage.
     * @exports StartGameMessage
     * @classdesc Represents a StartGameMessage.
     * @implements IStartGameMessage
     * @constructor
     * @param {IStartGameMessage=} [properties] Properties to set
     */
    function StartGameMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StartGameMessage userID.
     * @member {string} userID
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.userID = "";

    /**
     * StartGameMessage macNo.
     * @member {string} macNo
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.macNo = "";

    /**
     * StartGameMessage isServerSide.
     * @member {boolean} isServerSide
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.isServerSide = false;

    /**
     * StartGameMessage startGameResult.
     * @member {number} startGameResult
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.startGameResult = 0;

    /**
     * StartGameMessage des.
     * @member {string} des
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.des = "";

    /**
     * StartGameMessage ballCount.
     * @member {number} ballCount
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.ballCount = 0;

    /**
     * StartGameMessage totalGold.
     * @member {number|Long} totalGold
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.totalGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * StartGameMessage refundGold.
     * @member {number|Long} refundGold
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.refundGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * StartGameMessage gameDuring.
     * @member {number} gameDuring
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.gameDuring = 0;

    /**
     * StartGameMessage retryCount.
     * @member {number} retryCount
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.retryCount = 0;

    /**
     * StartGameMessage giftID.
     * @member {string} giftID
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.giftID = "";

    /**
     * StartGameMessage gameID.
     * @member {string} gameID
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.gameID = "";

    /**
     * StartGameMessage giftPrice.
     * @member {number|Long} giftPrice
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.giftPrice = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * StartGameMessage deviceID.
     * @member {string} deviceID
     * @memberof StartGameMessage
     * @instance
     */
    StartGameMessage.prototype.deviceID = "";

    /**
     * Creates a new StartGameMessage instance using the specified properties.
     * @function create
     * @memberof StartGameMessage
     * @static
     * @param {IStartGameMessage=} [properties] Properties to set
     * @returns {StartGameMessage} StartGameMessage instance
     */
    StartGameMessage.create = function create(properties) {
        return new StartGameMessage(properties);
    };

    /**
     * Encodes the specified StartGameMessage message. Does not implicitly {@link StartGameMessage.verify|verify} messages.
     * @function encode
     * @memberof StartGameMessage
     * @static
     * @param {IStartGameMessage} message StartGameMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartGameMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.isServerSide != null && Object.hasOwnProperty.call(message, "isServerSide"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isServerSide);
        if (message.startGameResult != null && Object.hasOwnProperty.call(message, "startGameResult"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.startGameResult);
        if (message.des != null && Object.hasOwnProperty.call(message, "des"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.des);
        if (message.ballCount != null && Object.hasOwnProperty.call(message, "ballCount"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ballCount);
        if (message.totalGold != null && Object.hasOwnProperty.call(message, "totalGold"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.totalGold);
        if (message.refundGold != null && Object.hasOwnProperty.call(message, "refundGold"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.refundGold);
        if (message.gameDuring != null && Object.hasOwnProperty.call(message, "gameDuring"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.gameDuring);
        if (message.retryCount != null && Object.hasOwnProperty.call(message, "retryCount"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.retryCount);
        if (message.giftID != null && Object.hasOwnProperty.call(message, "giftID"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.giftID);
        if (message.gameID != null && Object.hasOwnProperty.call(message, "gameID"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.gameID);
        if (message.giftPrice != null && Object.hasOwnProperty.call(message, "giftPrice"))
            writer.uint32(/* id 13, wireType 0 =*/104).int64(message.giftPrice);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified StartGameMessage message, length delimited. Does not implicitly {@link StartGameMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartGameMessage
     * @static
     * @param {IStartGameMessage} message StartGameMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartGameMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StartGameMessage message from the specified reader or buffer.
     * @function decode
     * @memberof StartGameMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartGameMessage} StartGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartGameMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.StartGameMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.isServerSide = reader.bool();
                    break;
                }
            case 4: {
                    message.startGameResult = reader.int32();
                    break;
                }
            case 5: {
                    message.des = reader.string();
                    break;
                }
            case 6: {
                    message.ballCount = reader.int32();
                    break;
                }
            case 7: {
                    message.totalGold = reader.int64();
                    break;
                }
            case 8: {
                    message.refundGold = reader.int64();
                    break;
                }
            case 9: {
                    message.gameDuring = reader.int32();
                    break;
                }
            case 10: {
                    message.retryCount = reader.int32();
                    break;
                }
            case 11: {
                    message.giftID = reader.string();
                    break;
                }
            case 12: {
                    message.gameID = reader.string();
                    break;
                }
            case 13: {
                    message.giftPrice = reader.int64();
                    break;
                }
            case 14: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StartGameMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StartGameMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartGameMessage} StartGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartGameMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StartGameMessage message.
     * @function verify
     * @memberof StartGameMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StartGameMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            if (typeof message.isServerSide !== "boolean")
                return "isServerSide: boolean expected";
        if (message.startGameResult != null && message.hasOwnProperty("startGameResult"))
            if (!$util.isInteger(message.startGameResult))
                return "startGameResult: integer expected";
        if (message.des != null && message.hasOwnProperty("des"))
            if (!$util.isString(message.des))
                return "des: string expected";
        if (message.ballCount != null && message.hasOwnProperty("ballCount"))
            if (!$util.isInteger(message.ballCount))
                return "ballCount: integer expected";
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (!$util.isInteger(message.totalGold) && !(message.totalGold && $util.isInteger(message.totalGold.low) && $util.isInteger(message.totalGold.high)))
                return "totalGold: integer|Long expected";
        if (message.refundGold != null && message.hasOwnProperty("refundGold"))
            if (!$util.isInteger(message.refundGold) && !(message.refundGold && $util.isInteger(message.refundGold.low) && $util.isInteger(message.refundGold.high)))
                return "refundGold: integer|Long expected";
        if (message.gameDuring != null && message.hasOwnProperty("gameDuring"))
            if (!$util.isInteger(message.gameDuring))
                return "gameDuring: integer expected";
        if (message.retryCount != null && message.hasOwnProperty("retryCount"))
            if (!$util.isInteger(message.retryCount))
                return "retryCount: integer expected";
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            if (!$util.isString(message.giftID))
                return "giftID: string expected";
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            if (!$util.isString(message.gameID))
                return "gameID: string expected";
        if (message.giftPrice != null && message.hasOwnProperty("giftPrice"))
            if (!$util.isInteger(message.giftPrice) && !(message.giftPrice && $util.isInteger(message.giftPrice.low) && $util.isInteger(message.giftPrice.high)))
                return "giftPrice: integer|Long expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a StartGameMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StartGameMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartGameMessage} StartGameMessage
     */
    StartGameMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.StartGameMessage)
            return object;
        let message = new $root.StartGameMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.isServerSide != null)
            message.isServerSide = Boolean(object.isServerSide);
        if (object.startGameResult != null)
            message.startGameResult = object.startGameResult | 0;
        if (object.des != null)
            message.des = String(object.des);
        if (object.ballCount != null)
            message.ballCount = object.ballCount | 0;
        if (object.totalGold != null)
            if ($util.Long)
                (message.totalGold = $util.Long.fromValue(object.totalGold)).unsigned = false;
            else if (typeof object.totalGold === "string")
                message.totalGold = parseInt(object.totalGold, 10);
            else if (typeof object.totalGold === "number")
                message.totalGold = object.totalGold;
            else if (typeof object.totalGold === "object")
                message.totalGold = new $util.LongBits(object.totalGold.low >>> 0, object.totalGold.high >>> 0).toNumber();
        if (object.refundGold != null)
            if ($util.Long)
                (message.refundGold = $util.Long.fromValue(object.refundGold)).unsigned = false;
            else if (typeof object.refundGold === "string")
                message.refundGold = parseInt(object.refundGold, 10);
            else if (typeof object.refundGold === "number")
                message.refundGold = object.refundGold;
            else if (typeof object.refundGold === "object")
                message.refundGold = new $util.LongBits(object.refundGold.low >>> 0, object.refundGold.high >>> 0).toNumber();
        if (object.gameDuring != null)
            message.gameDuring = object.gameDuring | 0;
        if (object.retryCount != null)
            message.retryCount = object.retryCount | 0;
        if (object.giftID != null)
            message.giftID = String(object.giftID);
        if (object.gameID != null)
            message.gameID = String(object.gameID);
        if (object.giftPrice != null)
            if ($util.Long)
                (message.giftPrice = $util.Long.fromValue(object.giftPrice)).unsigned = false;
            else if (typeof object.giftPrice === "string")
                message.giftPrice = parseInt(object.giftPrice, 10);
            else if (typeof object.giftPrice === "number")
                message.giftPrice = object.giftPrice;
            else if (typeof object.giftPrice === "object")
                message.giftPrice = new $util.LongBits(object.giftPrice.low >>> 0, object.giftPrice.high >>> 0).toNumber();
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a StartGameMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartGameMessage
     * @static
     * @param {StartGameMessage} message StartGameMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StartGameMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.isServerSide = false;
            object.startGameResult = 0;
            object.des = "";
            object.ballCount = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.totalGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalGold = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.refundGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.refundGold = options.longs === String ? "0" : 0;
            object.gameDuring = 0;
            object.retryCount = 0;
            object.giftID = "";
            object.gameID = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.giftPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.giftPrice = options.longs === String ? "0" : 0;
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            object.isServerSide = message.isServerSide;
        if (message.startGameResult != null && message.hasOwnProperty("startGameResult"))
            object.startGameResult = message.startGameResult;
        if (message.des != null && message.hasOwnProperty("des"))
            object.des = message.des;
        if (message.ballCount != null && message.hasOwnProperty("ballCount"))
            object.ballCount = message.ballCount;
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (typeof message.totalGold === "number")
                object.totalGold = options.longs === String ? String(message.totalGold) : message.totalGold;
            else
                object.totalGold = options.longs === String ? $util.Long.prototype.toString.call(message.totalGold) : options.longs === Number ? new $util.LongBits(message.totalGold.low >>> 0, message.totalGold.high >>> 0).toNumber() : message.totalGold;
        if (message.refundGold != null && message.hasOwnProperty("refundGold"))
            if (typeof message.refundGold === "number")
                object.refundGold = options.longs === String ? String(message.refundGold) : message.refundGold;
            else
                object.refundGold = options.longs === String ? $util.Long.prototype.toString.call(message.refundGold) : options.longs === Number ? new $util.LongBits(message.refundGold.low >>> 0, message.refundGold.high >>> 0).toNumber() : message.refundGold;
        if (message.gameDuring != null && message.hasOwnProperty("gameDuring"))
            object.gameDuring = message.gameDuring;
        if (message.retryCount != null && message.hasOwnProperty("retryCount"))
            object.retryCount = message.retryCount;
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            object.giftID = message.giftID;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.giftPrice != null && message.hasOwnProperty("giftPrice"))
            if (typeof message.giftPrice === "number")
                object.giftPrice = options.longs === String ? String(message.giftPrice) : message.giftPrice;
            else
                object.giftPrice = options.longs === String ? $util.Long.prototype.toString.call(message.giftPrice) : options.longs === Number ? new $util.LongBits(message.giftPrice.low >>> 0, message.giftPrice.high >>> 0).toNumber() : message.giftPrice;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this StartGameMessage to JSON.
     * @function toJSON
     * @memberof StartGameMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StartGameMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for StartGameMessage
     * @function getTypeUrl
     * @memberof StartGameMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StartGameMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StartGameMessage";
    };

    return StartGameMessage;
})();

export const ArmMoveMessage = $root.ArmMoveMessage = (() => {

    /**
     * Properties of an ArmMoveMessage.
     * @exports IArmMoveMessage
     * @interface IArmMoveMessage
     * @property {string|null} [userID] ArmMoveMessage userID
     * @property {string|null} [macNo] ArmMoveMessage macNo
     * @property {number|null} [data] ArmMoveMessage data
     * @property {string|null} [deviceID] ArmMoveMessage deviceID
     */

    /**
     * Constructs a new ArmMoveMessage.
     * @exports ArmMoveMessage
     * @classdesc Control the arm. When data == 0, the left arm moves. When data == 1, the right arm moves.
     * @implements IArmMoveMessage
     * @constructor
     * @param {IArmMoveMessage=} [properties] Properties to set
     */
    function ArmMoveMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ArmMoveMessage userID.
     * @member {string} userID
     * @memberof ArmMoveMessage
     * @instance
     */
    ArmMoveMessage.prototype.userID = "";

    /**
     * ArmMoveMessage macNo.
     * @member {string} macNo
     * @memberof ArmMoveMessage
     * @instance
     */
    ArmMoveMessage.prototype.macNo = "";

    /**
     * ArmMoveMessage data.
     * @member {number} data
     * @memberof ArmMoveMessage
     * @instance
     */
    ArmMoveMessage.prototype.data = 0;

    /**
     * ArmMoveMessage deviceID.
     * @member {string} deviceID
     * @memberof ArmMoveMessage
     * @instance
     */
    ArmMoveMessage.prototype.deviceID = "";

    /**
     * Creates a new ArmMoveMessage instance using the specified properties.
     * @function create
     * @memberof ArmMoveMessage
     * @static
     * @param {IArmMoveMessage=} [properties] Properties to set
     * @returns {ArmMoveMessage} ArmMoveMessage instance
     */
    ArmMoveMessage.create = function create(properties) {
        return new ArmMoveMessage(properties);
    };

    /**
     * Encodes the specified ArmMoveMessage message. Does not implicitly {@link ArmMoveMessage.verify|verify} messages.
     * @function encode
     * @memberof ArmMoveMessage
     * @static
     * @param {IArmMoveMessage} message ArmMoveMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ArmMoveMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.data);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified ArmMoveMessage message, length delimited. Does not implicitly {@link ArmMoveMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ArmMoveMessage
     * @static
     * @param {IArmMoveMessage} message ArmMoveMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ArmMoveMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ArmMoveMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ArmMoveMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ArmMoveMessage} ArmMoveMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ArmMoveMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ArmMoveMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.data = reader.int32();
                    break;
                }
            case 4: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ArmMoveMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ArmMoveMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ArmMoveMessage} ArmMoveMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ArmMoveMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ArmMoveMessage message.
     * @function verify
     * @memberof ArmMoveMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ArmMoveMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!$util.isInteger(message.data))
                return "data: integer expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates an ArmMoveMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ArmMoveMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ArmMoveMessage} ArmMoveMessage
     */
    ArmMoveMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ArmMoveMessage)
            return object;
        let message = new $root.ArmMoveMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.data != null)
            message.data = object.data | 0;
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from an ArmMoveMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ArmMoveMessage
     * @static
     * @param {ArmMoveMessage} message ArmMoveMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ArmMoveMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.data = 0;
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = message.data;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this ArmMoveMessage to JSON.
     * @function toJSON
     * @memberof ArmMoveMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ArmMoveMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ArmMoveMessage
     * @function getTypeUrl
     * @memberof ArmMoveMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ArmMoveMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ArmMoveMessage";
    };

    return ArmMoveMessage;
})();

export const HeartMessage = $root.HeartMessage = (() => {

    /**
     * Properties of a HeartMessage.
     * @exports IHeartMessage
     * @interface IHeartMessage
     * @property {string|null} [userID] HeartMessage userID
     * @property {string|null} [deviceID] HeartMessage deviceID
     */

    /**
     * Constructs a new HeartMessage.
     * @exports HeartMessage
     * @classdesc 心跳
     * @implements IHeartMessage
     * @constructor
     * @param {IHeartMessage=} [properties] Properties to set
     */
    function HeartMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HeartMessage userID.
     * @member {string} userID
     * @memberof HeartMessage
     * @instance
     */
    HeartMessage.prototype.userID = "";

    /**
     * HeartMessage deviceID.
     * @member {string} deviceID
     * @memberof HeartMessage
     * @instance
     */
    HeartMessage.prototype.deviceID = "";

    /**
     * Creates a new HeartMessage instance using the specified properties.
     * @function create
     * @memberof HeartMessage
     * @static
     * @param {IHeartMessage=} [properties] Properties to set
     * @returns {HeartMessage} HeartMessage instance
     */
    HeartMessage.create = function create(properties) {
        return new HeartMessage(properties);
    };

    /**
     * Encodes the specified HeartMessage message. Does not implicitly {@link HeartMessage.verify|verify} messages.
     * @function encode
     * @memberof HeartMessage
     * @static
     * @param {IHeartMessage} message HeartMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified HeartMessage message, length delimited. Does not implicitly {@link HeartMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartMessage
     * @static
     * @param {IHeartMessage} message HeartMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HeartMessage message from the specified reader or buffer.
     * @function decode
     * @memberof HeartMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartMessage} HeartMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.HeartMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HeartMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartMessage} HeartMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HeartMessage message.
     * @function verify
     * @memberof HeartMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HeartMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a HeartMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartMessage} HeartMessage
     */
    HeartMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.HeartMessage)
            return object;
        let message = new $root.HeartMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a HeartMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartMessage
     * @static
     * @param {HeartMessage} message HeartMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HeartMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this HeartMessage to JSON.
     * @function toJSON
     * @memberof HeartMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HeartMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HeartMessage
     * @function getTypeUrl
     * @memberof HeartMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HeartMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HeartMessage";
    };

    return HeartMessage;
})();

export const GameResultMessage = $root.GameResultMessage = (() => {

    /**
     * Properties of a GameResultMessage.
     * @exports IGameResultMessage
     * @interface IGameResultMessage
     * @property {string|null} [userID] GameResultMessage userID
     * @property {string|null} [macNo] GameResultMessage macNo
     * @property {number|null} [gameFinishFlag] GameResultMessage gameFinishFlag
     * @property {number|Long|null} [totalGold] GameResultMessage totalGold
     * @property {number|Long|null} [totalScore] GameResultMessage totalScore
     * @property {number|null} [playTimes] GameResultMessage playTimes
     * @property {string|null} [deviceID] GameResultMessage deviceID
     */

    /**
     * Constructs a new GameResultMessage.
     * @exports GameResultMessage
     * @classdesc The game ends and results are returned from the server
     * @implements IGameResultMessage
     * @constructor
     * @param {IGameResultMessage=} [properties] Properties to set
     */
    function GameResultMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameResultMessage userID.
     * @member {string} userID
     * @memberof GameResultMessage
     * @instance
     */
    GameResultMessage.prototype.userID = "";

    /**
     * GameResultMessage macNo.
     * @member {string} macNo
     * @memberof GameResultMessage
     * @instance
     */
    GameResultMessage.prototype.macNo = "";

    /**
     * GameResultMessage gameFinishFlag.
     * @member {number} gameFinishFlag
     * @memberof GameResultMessage
     * @instance
     */
    GameResultMessage.prototype.gameFinishFlag = 0;

    /**
     * GameResultMessage totalGold.
     * @member {number|Long} totalGold
     * @memberof GameResultMessage
     * @instance
     */
    GameResultMessage.prototype.totalGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameResultMessage totalScore.
     * @member {number|Long} totalScore
     * @memberof GameResultMessage
     * @instance
     */
    GameResultMessage.prototype.totalScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameResultMessage playTimes.
     * @member {number} playTimes
     * @memberof GameResultMessage
     * @instance
     */
    GameResultMessage.prototype.playTimes = 0;

    /**
     * GameResultMessage deviceID.
     * @member {string} deviceID
     * @memberof GameResultMessage
     * @instance
     */
    GameResultMessage.prototype.deviceID = "";

    /**
     * Creates a new GameResultMessage instance using the specified properties.
     * @function create
     * @memberof GameResultMessage
     * @static
     * @param {IGameResultMessage=} [properties] Properties to set
     * @returns {GameResultMessage} GameResultMessage instance
     */
    GameResultMessage.create = function create(properties) {
        return new GameResultMessage(properties);
    };

    /**
     * Encodes the specified GameResultMessage message. Does not implicitly {@link GameResultMessage.verify|verify} messages.
     * @function encode
     * @memberof GameResultMessage
     * @static
     * @param {IGameResultMessage} message GameResultMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameResultMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.gameFinishFlag != null && Object.hasOwnProperty.call(message, "gameFinishFlag"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameFinishFlag);
        if (message.totalGold != null && Object.hasOwnProperty.call(message, "totalGold"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.totalGold);
        if (message.totalScore != null && Object.hasOwnProperty.call(message, "totalScore"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.totalScore);
        if (message.playTimes != null && Object.hasOwnProperty.call(message, "playTimes"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.playTimes);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified GameResultMessage message, length delimited. Does not implicitly {@link GameResultMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameResultMessage
     * @static
     * @param {IGameResultMessage} message GameResultMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameResultMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameResultMessage message from the specified reader or buffer.
     * @function decode
     * @memberof GameResultMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameResultMessage} GameResultMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameResultMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameResultMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.gameFinishFlag = reader.int32();
                    break;
                }
            case 4: {
                    message.totalGold = reader.int64();
                    break;
                }
            case 5: {
                    message.totalScore = reader.int64();
                    break;
                }
            case 6: {
                    message.playTimes = reader.int32();
                    break;
                }
            case 7: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameResultMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameResultMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameResultMessage} GameResultMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameResultMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameResultMessage message.
     * @function verify
     * @memberof GameResultMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameResultMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.gameFinishFlag != null && message.hasOwnProperty("gameFinishFlag"))
            if (!$util.isInteger(message.gameFinishFlag))
                return "gameFinishFlag: integer expected";
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (!$util.isInteger(message.totalGold) && !(message.totalGold && $util.isInteger(message.totalGold.low) && $util.isInteger(message.totalGold.high)))
                return "totalGold: integer|Long expected";
        if (message.totalScore != null && message.hasOwnProperty("totalScore"))
            if (!$util.isInteger(message.totalScore) && !(message.totalScore && $util.isInteger(message.totalScore.low) && $util.isInteger(message.totalScore.high)))
                return "totalScore: integer|Long expected";
        if (message.playTimes != null && message.hasOwnProperty("playTimes"))
            if (!$util.isInteger(message.playTimes))
                return "playTimes: integer expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a GameResultMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameResultMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameResultMessage} GameResultMessage
     */
    GameResultMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.GameResultMessage)
            return object;
        let message = new $root.GameResultMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.gameFinishFlag != null)
            message.gameFinishFlag = object.gameFinishFlag | 0;
        if (object.totalGold != null)
            if ($util.Long)
                (message.totalGold = $util.Long.fromValue(object.totalGold)).unsigned = false;
            else if (typeof object.totalGold === "string")
                message.totalGold = parseInt(object.totalGold, 10);
            else if (typeof object.totalGold === "number")
                message.totalGold = object.totalGold;
            else if (typeof object.totalGold === "object")
                message.totalGold = new $util.LongBits(object.totalGold.low >>> 0, object.totalGold.high >>> 0).toNumber();
        if (object.totalScore != null)
            if ($util.Long)
                (message.totalScore = $util.Long.fromValue(object.totalScore)).unsigned = false;
            else if (typeof object.totalScore === "string")
                message.totalScore = parseInt(object.totalScore, 10);
            else if (typeof object.totalScore === "number")
                message.totalScore = object.totalScore;
            else if (typeof object.totalScore === "object")
                message.totalScore = new $util.LongBits(object.totalScore.low >>> 0, object.totalScore.high >>> 0).toNumber();
        if (object.playTimes != null)
            message.playTimes = object.playTimes | 0;
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a GameResultMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameResultMessage
     * @static
     * @param {GameResultMessage} message GameResultMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameResultMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.gameFinishFlag = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.totalGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalGold = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.totalScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalScore = options.longs === String ? "0" : 0;
            object.playTimes = 0;
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.gameFinishFlag != null && message.hasOwnProperty("gameFinishFlag"))
            object.gameFinishFlag = message.gameFinishFlag;
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (typeof message.totalGold === "number")
                object.totalGold = options.longs === String ? String(message.totalGold) : message.totalGold;
            else
                object.totalGold = options.longs === String ? $util.Long.prototype.toString.call(message.totalGold) : options.longs === Number ? new $util.LongBits(message.totalGold.low >>> 0, message.totalGold.high >>> 0).toNumber() : message.totalGold;
        if (message.totalScore != null && message.hasOwnProperty("totalScore"))
            if (typeof message.totalScore === "number")
                object.totalScore = options.longs === String ? String(message.totalScore) : message.totalScore;
            else
                object.totalScore = options.longs === String ? $util.Long.prototype.toString.call(message.totalScore) : options.longs === Number ? new $util.LongBits(message.totalScore.low >>> 0, message.totalScore.high >>> 0).toNumber() : message.totalScore;
        if (message.playTimes != null && message.hasOwnProperty("playTimes"))
            object.playTimes = message.playTimes;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this GameResultMessage to JSON.
     * @function toJSON
     * @memberof GameResultMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameResultMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GameResultMessage
     * @function getTypeUrl
     * @memberof GameResultMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GameResultMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GameResultMessage";
    };

    return GameResultMessage;
})();

export const BallCountMessage = $root.BallCountMessage = (() => {

    /**
     * Properties of a BallCountMessage.
     * @exports IBallCountMessage
     * @interface IBallCountMessage
     * @property {string|null} [userID] BallCountMessage userID
     * @property {string|null} [macNo] BallCountMessage macNo
     * @property {number|null} [ballCount] BallCountMessage ballCount
     */

    /**
     * Constructs a new BallCountMessage.
     * @exports BallCountMessage
     * @classdesc Number of balls remaining
     * @implements IBallCountMessage
     * @constructor
     * @param {IBallCountMessage=} [properties] Properties to set
     */
    function BallCountMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BallCountMessage userID.
     * @member {string} userID
     * @memberof BallCountMessage
     * @instance
     */
    BallCountMessage.prototype.userID = "";

    /**
     * BallCountMessage macNo.
     * @member {string} macNo
     * @memberof BallCountMessage
     * @instance
     */
    BallCountMessage.prototype.macNo = "";

    /**
     * BallCountMessage ballCount.
     * @member {number} ballCount
     * @memberof BallCountMessage
     * @instance
     */
    BallCountMessage.prototype.ballCount = 0;

    /**
     * Creates a new BallCountMessage instance using the specified properties.
     * @function create
     * @memberof BallCountMessage
     * @static
     * @param {IBallCountMessage=} [properties] Properties to set
     * @returns {BallCountMessage} BallCountMessage instance
     */
    BallCountMessage.create = function create(properties) {
        return new BallCountMessage(properties);
    };

    /**
     * Encodes the specified BallCountMessage message. Does not implicitly {@link BallCountMessage.verify|verify} messages.
     * @function encode
     * @memberof BallCountMessage
     * @static
     * @param {IBallCountMessage} message BallCountMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BallCountMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.ballCount != null && Object.hasOwnProperty.call(message, "ballCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ballCount);
        return writer;
    };

    /**
     * Encodes the specified BallCountMessage message, length delimited. Does not implicitly {@link BallCountMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BallCountMessage
     * @static
     * @param {IBallCountMessage} message BallCountMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BallCountMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BallCountMessage message from the specified reader or buffer.
     * @function decode
     * @memberof BallCountMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BallCountMessage} BallCountMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BallCountMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BallCountMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.ballCount = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BallCountMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BallCountMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BallCountMessage} BallCountMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BallCountMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BallCountMessage message.
     * @function verify
     * @memberof BallCountMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BallCountMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.ballCount != null && message.hasOwnProperty("ballCount"))
            if (!$util.isInteger(message.ballCount))
                return "ballCount: integer expected";
        return null;
    };

    /**
     * Creates a BallCountMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BallCountMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BallCountMessage} BallCountMessage
     */
    BallCountMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.BallCountMessage)
            return object;
        let message = new $root.BallCountMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.ballCount != null)
            message.ballCount = object.ballCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a BallCountMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BallCountMessage
     * @static
     * @param {BallCountMessage} message BallCountMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BallCountMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.ballCount = 0;
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.ballCount != null && message.hasOwnProperty("ballCount"))
            object.ballCount = message.ballCount;
        return object;
    };

    /**
     * Converts this BallCountMessage to JSON.
     * @function toJSON
     * @memberof BallCountMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BallCountMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for BallCountMessage
     * @function getTypeUrl
     * @memberof BallCountMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    BallCountMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/BallCountMessage";
    };

    return BallCountMessage;
})();

export const ScoreMessage = $root.ScoreMessage = (() => {

    /**
     * Properties of a ScoreMessage.
     * @exports IScoreMessage
     * @interface IScoreMessage
     * @property {string|null} [userID] ScoreMessage userID
     * @property {string|null} [macNo] ScoreMessage macNo
     * @property {number|null} [score] ScoreMessage score
     * @property {number|Long|null} [inCome] ScoreMessage inCome
     */

    /**
     * Constructs a new ScoreMessage.
     * @exports ScoreMessage
     * @classdesc Fraction
     * @implements IScoreMessage
     * @constructor
     * @param {IScoreMessage=} [properties] Properties to set
     */
    function ScoreMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ScoreMessage userID.
     * @member {string} userID
     * @memberof ScoreMessage
     * @instance
     */
    ScoreMessage.prototype.userID = "";

    /**
     * ScoreMessage macNo.
     * @member {string} macNo
     * @memberof ScoreMessage
     * @instance
     */
    ScoreMessage.prototype.macNo = "";

    /**
     * ScoreMessage score.
     * @member {number} score
     * @memberof ScoreMessage
     * @instance
     */
    ScoreMessage.prototype.score = 0;

    /**
     * ScoreMessage inCome.
     * @member {number|Long} inCome
     * @memberof ScoreMessage
     * @instance
     */
    ScoreMessage.prototype.inCome = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ScoreMessage instance using the specified properties.
     * @function create
     * @memberof ScoreMessage
     * @static
     * @param {IScoreMessage=} [properties] Properties to set
     * @returns {ScoreMessage} ScoreMessage instance
     */
    ScoreMessage.create = function create(properties) {
        return new ScoreMessage(properties);
    };

    /**
     * Encodes the specified ScoreMessage message. Does not implicitly {@link ScoreMessage.verify|verify} messages.
     * @function encode
     * @memberof ScoreMessage
     * @static
     * @param {IScoreMessage} message ScoreMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ScoreMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.score != null && Object.hasOwnProperty.call(message, "score"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
        if (message.inCome != null && Object.hasOwnProperty.call(message, "inCome"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.inCome);
        return writer;
    };

    /**
     * Encodes the specified ScoreMessage message, length delimited. Does not implicitly {@link ScoreMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ScoreMessage
     * @static
     * @param {IScoreMessage} message ScoreMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ScoreMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ScoreMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ScoreMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ScoreMessage} ScoreMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ScoreMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ScoreMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.score = reader.int32();
                    break;
                }
            case 4: {
                    message.inCome = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ScoreMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ScoreMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ScoreMessage} ScoreMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ScoreMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ScoreMessage message.
     * @function verify
     * @memberof ScoreMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ScoreMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.score != null && message.hasOwnProperty("score"))
            if (!$util.isInteger(message.score))
                return "score: integer expected";
        if (message.inCome != null && message.hasOwnProperty("inCome"))
            if (!$util.isInteger(message.inCome) && !(message.inCome && $util.isInteger(message.inCome.low) && $util.isInteger(message.inCome.high)))
                return "inCome: integer|Long expected";
        return null;
    };

    /**
     * Creates a ScoreMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ScoreMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ScoreMessage} ScoreMessage
     */
    ScoreMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ScoreMessage)
            return object;
        let message = new $root.ScoreMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.score != null)
            message.score = object.score | 0;
        if (object.inCome != null)
            if ($util.Long)
                (message.inCome = $util.Long.fromValue(object.inCome)).unsigned = false;
            else if (typeof object.inCome === "string")
                message.inCome = parseInt(object.inCome, 10);
            else if (typeof object.inCome === "number")
                message.inCome = object.inCome;
            else if (typeof object.inCome === "object")
                message.inCome = new $util.LongBits(object.inCome.low >>> 0, object.inCome.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ScoreMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ScoreMessage
     * @static
     * @param {ScoreMessage} message ScoreMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ScoreMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.score = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.inCome = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.inCome = options.longs === String ? "0" : 0;
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.score != null && message.hasOwnProperty("score"))
            object.score = message.score;
        if (message.inCome != null && message.hasOwnProperty("inCome"))
            if (typeof message.inCome === "number")
                object.inCome = options.longs === String ? String(message.inCome) : message.inCome;
            else
                object.inCome = options.longs === String ? $util.Long.prototype.toString.call(message.inCome) : options.longs === Number ? new $util.LongBits(message.inCome.low >>> 0, message.inCome.high >>> 0).toNumber() : message.inCome;
        return object;
    };

    /**
     * Converts this ScoreMessage to JSON.
     * @function toJSON
     * @memberof ScoreMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ScoreMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ScoreMessage
     * @function getTypeUrl
     * @memberof ScoreMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ScoreMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ScoreMessage";
    };

    return ScoreMessage;
})();

export const EnterRoomMessage = $root.EnterRoomMessage = (() => {

    /**
     * Properties of an EnterRoomMessage.
     * @exports IEnterRoomMessage
     * @interface IEnterRoomMessage
     * @property {string|null} [userID] EnterRoomMessage userID
     * @property {string|null} [macNo] EnterRoomMessage macNo
     * @property {string|null} [webrtcClientID] EnterRoomMessage webrtcClientID
     * @property {number|null} [numberOfPeopleInTheRoom] EnterRoomMessage numberOfPeopleInTheRoom
     * @property {number|null} [players] EnterRoomMessage players
     * @property {string|null} [playerPic] EnterRoomMessage playerPic
     * @property {string|null} [playerName] EnterRoomMessage playerName
     * @property {string|null} [lastWonGameID] EnterRoomMessage lastWonGameID
     * @property {string|null} [lastWonTime] EnterRoomMessage lastWonTime
     * @property {string|null} [giftID] EnterRoomMessage giftID
     * @property {string|null} [deviceID] EnterRoomMessage deviceID
     */

    /**
     * Constructs a new EnterRoomMessage.
     * @exports EnterRoomMessage
     * @classdesc Represents an EnterRoomMessage.
     * @implements IEnterRoomMessage
     * @constructor
     * @param {IEnterRoomMessage=} [properties] Properties to set
     */
    function EnterRoomMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterRoomMessage userID.
     * @member {string} userID
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.userID = "";

    /**
     * EnterRoomMessage macNo.
     * @member {string} macNo
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.macNo = "";

    /**
     * EnterRoomMessage webrtcClientID.
     * @member {string} webrtcClientID
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.webrtcClientID = "";

    /**
     * EnterRoomMessage numberOfPeopleInTheRoom.
     * @member {number} numberOfPeopleInTheRoom
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.numberOfPeopleInTheRoom = 0;

    /**
     * EnterRoomMessage players.
     * @member {number} players
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.players = 0;

    /**
     * EnterRoomMessage playerPic.
     * @member {string} playerPic
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.playerPic = "";

    /**
     * EnterRoomMessage playerName.
     * @member {string} playerName
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.playerName = "";

    /**
     * EnterRoomMessage lastWonGameID.
     * @member {string} lastWonGameID
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.lastWonGameID = "";

    /**
     * EnterRoomMessage lastWonTime.
     * @member {string} lastWonTime
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.lastWonTime = "";

    /**
     * EnterRoomMessage giftID.
     * @member {string} giftID
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.giftID = "";

    /**
     * EnterRoomMessage deviceID.
     * @member {string} deviceID
     * @memberof EnterRoomMessage
     * @instance
     */
    EnterRoomMessage.prototype.deviceID = "";

    /**
     * Creates a new EnterRoomMessage instance using the specified properties.
     * @function create
     * @memberof EnterRoomMessage
     * @static
     * @param {IEnterRoomMessage=} [properties] Properties to set
     * @returns {EnterRoomMessage} EnterRoomMessage instance
     */
    EnterRoomMessage.create = function create(properties) {
        return new EnterRoomMessage(properties);
    };

    /**
     * Encodes the specified EnterRoomMessage message. Does not implicitly {@link EnterRoomMessage.verify|verify} messages.
     * @function encode
     * @memberof EnterRoomMessage
     * @static
     * @param {IEnterRoomMessage} message EnterRoomMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterRoomMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.webrtcClientID != null && Object.hasOwnProperty.call(message, "webrtcClientID"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.webrtcClientID);
        if (message.numberOfPeopleInTheRoom != null && Object.hasOwnProperty.call(message, "numberOfPeopleInTheRoom"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.numberOfPeopleInTheRoom);
        if (message.players != null && Object.hasOwnProperty.call(message, "players"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.players);
        if (message.playerPic != null && Object.hasOwnProperty.call(message, "playerPic"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.playerPic);
        if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.playerName);
        if (message.lastWonGameID != null && Object.hasOwnProperty.call(message, "lastWonGameID"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.lastWonGameID);
        if (message.lastWonTime != null && Object.hasOwnProperty.call(message, "lastWonTime"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.lastWonTime);
        if (message.giftID != null && Object.hasOwnProperty.call(message, "giftID"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.giftID);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified EnterRoomMessage message, length delimited. Does not implicitly {@link EnterRoomMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterRoomMessage
     * @static
     * @param {IEnterRoomMessage} message EnterRoomMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterRoomMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterRoomMessage message from the specified reader or buffer.
     * @function decode
     * @memberof EnterRoomMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterRoomMessage} EnterRoomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterRoomMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterRoomMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.webrtcClientID = reader.string();
                    break;
                }
            case 4: {
                    message.numberOfPeopleInTheRoom = reader.int32();
                    break;
                }
            case 5: {
                    message.players = reader.int32();
                    break;
                }
            case 6: {
                    message.playerPic = reader.string();
                    break;
                }
            case 7: {
                    message.playerName = reader.string();
                    break;
                }
            case 8: {
                    message.lastWonGameID = reader.string();
                    break;
                }
            case 9: {
                    message.lastWonTime = reader.string();
                    break;
                }
            case 10: {
                    message.giftID = reader.string();
                    break;
                }
            case 11: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EnterRoomMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterRoomMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterRoomMessage} EnterRoomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterRoomMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterRoomMessage message.
     * @function verify
     * @memberof EnterRoomMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterRoomMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.webrtcClientID != null && message.hasOwnProperty("webrtcClientID"))
            if (!$util.isString(message.webrtcClientID))
                return "webrtcClientID: string expected";
        if (message.numberOfPeopleInTheRoom != null && message.hasOwnProperty("numberOfPeopleInTheRoom"))
            if (!$util.isInteger(message.numberOfPeopleInTheRoom))
                return "numberOfPeopleInTheRoom: integer expected";
        if (message.players != null && message.hasOwnProperty("players"))
            if (!$util.isInteger(message.players))
                return "players: integer expected";
        if (message.playerPic != null && message.hasOwnProperty("playerPic"))
            if (!$util.isString(message.playerPic))
                return "playerPic: string expected";
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            if (!$util.isString(message.playerName))
                return "playerName: string expected";
        if (message.lastWonGameID != null && message.hasOwnProperty("lastWonGameID"))
            if (!$util.isString(message.lastWonGameID))
                return "lastWonGameID: string expected";
        if (message.lastWonTime != null && message.hasOwnProperty("lastWonTime"))
            if (!$util.isString(message.lastWonTime))
                return "lastWonTime: string expected";
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            if (!$util.isString(message.giftID))
                return "giftID: string expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates an EnterRoomMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterRoomMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterRoomMessage} EnterRoomMessage
     */
    EnterRoomMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterRoomMessage)
            return object;
        let message = new $root.EnterRoomMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.webrtcClientID != null)
            message.webrtcClientID = String(object.webrtcClientID);
        if (object.numberOfPeopleInTheRoom != null)
            message.numberOfPeopleInTheRoom = object.numberOfPeopleInTheRoom | 0;
        if (object.players != null)
            message.players = object.players | 0;
        if (object.playerPic != null)
            message.playerPic = String(object.playerPic);
        if (object.playerName != null)
            message.playerName = String(object.playerName);
        if (object.lastWonGameID != null)
            message.lastWonGameID = String(object.lastWonGameID);
        if (object.lastWonTime != null)
            message.lastWonTime = String(object.lastWonTime);
        if (object.giftID != null)
            message.giftID = String(object.giftID);
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from an EnterRoomMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterRoomMessage
     * @static
     * @param {EnterRoomMessage} message EnterRoomMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterRoomMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.webrtcClientID = "";
            object.numberOfPeopleInTheRoom = 0;
            object.players = 0;
            object.playerPic = "";
            object.playerName = "";
            object.lastWonGameID = "";
            object.lastWonTime = "";
            object.giftID = "";
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.webrtcClientID != null && message.hasOwnProperty("webrtcClientID"))
            object.webrtcClientID = message.webrtcClientID;
        if (message.numberOfPeopleInTheRoom != null && message.hasOwnProperty("numberOfPeopleInTheRoom"))
            object.numberOfPeopleInTheRoom = message.numberOfPeopleInTheRoom;
        if (message.players != null && message.hasOwnProperty("players"))
            object.players = message.players;
        if (message.playerPic != null && message.hasOwnProperty("playerPic"))
            object.playerPic = message.playerPic;
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            object.playerName = message.playerName;
        if (message.lastWonGameID != null && message.hasOwnProperty("lastWonGameID"))
            object.lastWonGameID = message.lastWonGameID;
        if (message.lastWonTime != null && message.hasOwnProperty("lastWonTime"))
            object.lastWonTime = message.lastWonTime;
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            object.giftID = message.giftID;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this EnterRoomMessage to JSON.
     * @function toJSON
     * @memberof EnterRoomMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterRoomMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for EnterRoomMessage
     * @function getTypeUrl
     * @memberof EnterRoomMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EnterRoomMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EnterRoomMessage";
    };

    return EnterRoomMessage;
})();

export const EnterRoomMessageBackup = $root.EnterRoomMessageBackup = (() => {

    /**
     * Properties of an EnterRoomMessageBackup.
     * @exports IEnterRoomMessageBackup
     * @interface IEnterRoomMessageBackup
     * @property {string|null} [userID] EnterRoomMessageBackup userID
     * @property {string|null} [macNo] EnterRoomMessageBackup macNo
     * @property {number|Long|null} [totalGold] EnterRoomMessageBackup totalGold
     * @property {boolean|null} [isServerSide] EnterRoomMessageBackup isServerSide
     * @property {string|null} [webrtcClientID] EnterRoomMessageBackup webrtcClientID
     * @property {number|null} [playTimes] EnterRoomMessageBackup playTimes
     * @property {number|null} [numberOfPeopleInTheRoom] EnterRoomMessageBackup numberOfPeopleInTheRoom
     * @property {number|null} [order] EnterRoomMessageBackup order
     * @property {number|null} [players] EnterRoomMessageBackup players
     * @property {string|null} [playerPic] EnterRoomMessageBackup playerPic
     * @property {string|null} [giftID] EnterRoomMessageBackup giftID
     * @property {string|null} [gameID] EnterRoomMessageBackup gameID
     * @property {EnterRoomMessageBackup.PLAY_STATUS|null} [playStatus] EnterRoomMessageBackup playStatus
     * @property {string|null} [playerName] EnterRoomMessageBackup playerName
     * @property {string|null} [lastWonGameID] EnterRoomMessageBackup lastWonGameID
     * @property {string|null} [lastWonTime] EnterRoomMessageBackup lastWonTime
     * @property {string|null} [lastGameTime] EnterRoomMessageBackup lastGameTime
     * @property {string|null} [currentServerTime] EnterRoomMessageBackup currentServerTime
     */

    /**
     * Constructs a new EnterRoomMessageBackup.
     * @exports EnterRoomMessageBackup
     * @classdesc Represents an EnterRoomMessageBackup.
     * @implements IEnterRoomMessageBackup
     * @constructor
     * @param {IEnterRoomMessageBackup=} [properties] Properties to set
     */
    function EnterRoomMessageBackup(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterRoomMessageBackup userID.
     * @member {string} userID
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.userID = "";

    /**
     * EnterRoomMessageBackup macNo.
     * @member {string} macNo
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.macNo = "";

    /**
     * EnterRoomMessageBackup totalGold.
     * @member {number|Long} totalGold
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.totalGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * EnterRoomMessageBackup isServerSide.
     * @member {boolean} isServerSide
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.isServerSide = false;

    /**
     * EnterRoomMessageBackup webrtcClientID.
     * @member {string} webrtcClientID
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.webrtcClientID = "";

    /**
     * EnterRoomMessageBackup playTimes.
     * @member {number} playTimes
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.playTimes = 0;

    /**
     * EnterRoomMessageBackup numberOfPeopleInTheRoom.
     * @member {number} numberOfPeopleInTheRoom
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.numberOfPeopleInTheRoom = 0;

    /**
     * EnterRoomMessageBackup order.
     * @member {number} order
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.order = 0;

    /**
     * EnterRoomMessageBackup players.
     * @member {number} players
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.players = 0;

    /**
     * EnterRoomMessageBackup playerPic.
     * @member {string} playerPic
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.playerPic = "";

    /**
     * EnterRoomMessageBackup giftID.
     * @member {string} giftID
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.giftID = "";

    /**
     * EnterRoomMessageBackup gameID.
     * @member {string} gameID
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.gameID = "";

    /**
     * EnterRoomMessageBackup playStatus.
     * @member {EnterRoomMessageBackup.PLAY_STATUS} playStatus
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.playStatus = 0;

    /**
     * EnterRoomMessageBackup playerName.
     * @member {string} playerName
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.playerName = "";

    /**
     * EnterRoomMessageBackup lastWonGameID.
     * @member {string} lastWonGameID
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.lastWonGameID = "";

    /**
     * EnterRoomMessageBackup lastWonTime.
     * @member {string} lastWonTime
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.lastWonTime = "";

    /**
     * EnterRoomMessageBackup lastGameTime.
     * @member {string} lastGameTime
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.lastGameTime = "";

    /**
     * EnterRoomMessageBackup currentServerTime.
     * @member {string} currentServerTime
     * @memberof EnterRoomMessageBackup
     * @instance
     */
    EnterRoomMessageBackup.prototype.currentServerTime = "";

    /**
     * Creates a new EnterRoomMessageBackup instance using the specified properties.
     * @function create
     * @memberof EnterRoomMessageBackup
     * @static
     * @param {IEnterRoomMessageBackup=} [properties] Properties to set
     * @returns {EnterRoomMessageBackup} EnterRoomMessageBackup instance
     */
    EnterRoomMessageBackup.create = function create(properties) {
        return new EnterRoomMessageBackup(properties);
    };

    /**
     * Encodes the specified EnterRoomMessageBackup message. Does not implicitly {@link EnterRoomMessageBackup.verify|verify} messages.
     * @function encode
     * @memberof EnterRoomMessageBackup
     * @static
     * @param {IEnterRoomMessageBackup} message EnterRoomMessageBackup message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterRoomMessageBackup.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.totalGold != null && Object.hasOwnProperty.call(message, "totalGold"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.totalGold);
        if (message.isServerSide != null && Object.hasOwnProperty.call(message, "isServerSide"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isServerSide);
        if (message.webrtcClientID != null && Object.hasOwnProperty.call(message, "webrtcClientID"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.webrtcClientID);
        if (message.playTimes != null && Object.hasOwnProperty.call(message, "playTimes"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.playTimes);
        if (message.numberOfPeopleInTheRoom != null && Object.hasOwnProperty.call(message, "numberOfPeopleInTheRoom"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.numberOfPeopleInTheRoom);
        if (message.order != null && Object.hasOwnProperty.call(message, "order"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.order);
        if (message.players != null && Object.hasOwnProperty.call(message, "players"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.players);
        if (message.playerPic != null && Object.hasOwnProperty.call(message, "playerPic"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.playerPic);
        if (message.giftID != null && Object.hasOwnProperty.call(message, "giftID"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.giftID);
        if (message.gameID != null && Object.hasOwnProperty.call(message, "gameID"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.gameID);
        if (message.playStatus != null && Object.hasOwnProperty.call(message, "playStatus"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.playStatus);
        if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.playerName);
        if (message.lastWonGameID != null && Object.hasOwnProperty.call(message, "lastWonGameID"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.lastWonGameID);
        if (message.lastWonTime != null && Object.hasOwnProperty.call(message, "lastWonTime"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.lastWonTime);
        if (message.lastGameTime != null && Object.hasOwnProperty.call(message, "lastGameTime"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.lastGameTime);
        if (message.currentServerTime != null && Object.hasOwnProperty.call(message, "currentServerTime"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.currentServerTime);
        return writer;
    };

    /**
     * Encodes the specified EnterRoomMessageBackup message, length delimited. Does not implicitly {@link EnterRoomMessageBackup.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterRoomMessageBackup
     * @static
     * @param {IEnterRoomMessageBackup} message EnterRoomMessageBackup message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterRoomMessageBackup.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterRoomMessageBackup message from the specified reader or buffer.
     * @function decode
     * @memberof EnterRoomMessageBackup
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterRoomMessageBackup} EnterRoomMessageBackup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterRoomMessageBackup.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterRoomMessageBackup();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.totalGold = reader.int64();
                    break;
                }
            case 4: {
                    message.isServerSide = reader.bool();
                    break;
                }
            case 5: {
                    message.webrtcClientID = reader.string();
                    break;
                }
            case 6: {
                    message.playTimes = reader.int32();
                    break;
                }
            case 7: {
                    message.numberOfPeopleInTheRoom = reader.int32();
                    break;
                }
            case 8: {
                    message.order = reader.int32();
                    break;
                }
            case 9: {
                    message.players = reader.int32();
                    break;
                }
            case 10: {
                    message.playerPic = reader.string();
                    break;
                }
            case 11: {
                    message.giftID = reader.string();
                    break;
                }
            case 12: {
                    message.gameID = reader.string();
                    break;
                }
            case 13: {
                    message.playStatus = reader.int32();
                    break;
                }
            case 14: {
                    message.playerName = reader.string();
                    break;
                }
            case 15: {
                    message.lastWonGameID = reader.string();
                    break;
                }
            case 16: {
                    message.lastWonTime = reader.string();
                    break;
                }
            case 17: {
                    message.lastGameTime = reader.string();
                    break;
                }
            case 18: {
                    message.currentServerTime = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EnterRoomMessageBackup message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterRoomMessageBackup
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterRoomMessageBackup} EnterRoomMessageBackup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterRoomMessageBackup.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterRoomMessageBackup message.
     * @function verify
     * @memberof EnterRoomMessageBackup
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterRoomMessageBackup.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (!$util.isInteger(message.totalGold) && !(message.totalGold && $util.isInteger(message.totalGold.low) && $util.isInteger(message.totalGold.high)))
                return "totalGold: integer|Long expected";
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            if (typeof message.isServerSide !== "boolean")
                return "isServerSide: boolean expected";
        if (message.webrtcClientID != null && message.hasOwnProperty("webrtcClientID"))
            if (!$util.isString(message.webrtcClientID))
                return "webrtcClientID: string expected";
        if (message.playTimes != null && message.hasOwnProperty("playTimes"))
            if (!$util.isInteger(message.playTimes))
                return "playTimes: integer expected";
        if (message.numberOfPeopleInTheRoom != null && message.hasOwnProperty("numberOfPeopleInTheRoom"))
            if (!$util.isInteger(message.numberOfPeopleInTheRoom))
                return "numberOfPeopleInTheRoom: integer expected";
        if (message.order != null && message.hasOwnProperty("order"))
            if (!$util.isInteger(message.order))
                return "order: integer expected";
        if (message.players != null && message.hasOwnProperty("players"))
            if (!$util.isInteger(message.players))
                return "players: integer expected";
        if (message.playerPic != null && message.hasOwnProperty("playerPic"))
            if (!$util.isString(message.playerPic))
                return "playerPic: string expected";
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            if (!$util.isString(message.giftID))
                return "giftID: string expected";
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            if (!$util.isString(message.gameID))
                return "gameID: string expected";
        if (message.playStatus != null && message.hasOwnProperty("playStatus"))
            switch (message.playStatus) {
            default:
                return "playStatus: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            if (!$util.isString(message.playerName))
                return "playerName: string expected";
        if (message.lastWonGameID != null && message.hasOwnProperty("lastWonGameID"))
            if (!$util.isString(message.lastWonGameID))
                return "lastWonGameID: string expected";
        if (message.lastWonTime != null && message.hasOwnProperty("lastWonTime"))
            if (!$util.isString(message.lastWonTime))
                return "lastWonTime: string expected";
        if (message.lastGameTime != null && message.hasOwnProperty("lastGameTime"))
            if (!$util.isString(message.lastGameTime))
                return "lastGameTime: string expected";
        if (message.currentServerTime != null && message.hasOwnProperty("currentServerTime"))
            if (!$util.isString(message.currentServerTime))
                return "currentServerTime: string expected";
        return null;
    };

    /**
     * Creates an EnterRoomMessageBackup message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterRoomMessageBackup
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterRoomMessageBackup} EnterRoomMessageBackup
     */
    EnterRoomMessageBackup.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterRoomMessageBackup)
            return object;
        let message = new $root.EnterRoomMessageBackup();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.totalGold != null)
            if ($util.Long)
                (message.totalGold = $util.Long.fromValue(object.totalGold)).unsigned = false;
            else if (typeof object.totalGold === "string")
                message.totalGold = parseInt(object.totalGold, 10);
            else if (typeof object.totalGold === "number")
                message.totalGold = object.totalGold;
            else if (typeof object.totalGold === "object")
                message.totalGold = new $util.LongBits(object.totalGold.low >>> 0, object.totalGold.high >>> 0).toNumber();
        if (object.isServerSide != null)
            message.isServerSide = Boolean(object.isServerSide);
        if (object.webrtcClientID != null)
            message.webrtcClientID = String(object.webrtcClientID);
        if (object.playTimes != null)
            message.playTimes = object.playTimes | 0;
        if (object.numberOfPeopleInTheRoom != null)
            message.numberOfPeopleInTheRoom = object.numberOfPeopleInTheRoom | 0;
        if (object.order != null)
            message.order = object.order | 0;
        if (object.players != null)
            message.players = object.players | 0;
        if (object.playerPic != null)
            message.playerPic = String(object.playerPic);
        if (object.giftID != null)
            message.giftID = String(object.giftID);
        if (object.gameID != null)
            message.gameID = String(object.gameID);
        switch (object.playStatus) {
        default:
            if (typeof object.playStatus === "number") {
                message.playStatus = object.playStatus;
                break;
            }
            break;
        case "QUEUE":
        case 0:
            message.playStatus = 0;
            break;
        case "PLAYING":
        case 1:
            message.playStatus = 1;
            break;
        case "READYTOPLAY":
        case 2:
            message.playStatus = 2;
            break;
        }
        if (object.playerName != null)
            message.playerName = String(object.playerName);
        if (object.lastWonGameID != null)
            message.lastWonGameID = String(object.lastWonGameID);
        if (object.lastWonTime != null)
            message.lastWonTime = String(object.lastWonTime);
        if (object.lastGameTime != null)
            message.lastGameTime = String(object.lastGameTime);
        if (object.currentServerTime != null)
            message.currentServerTime = String(object.currentServerTime);
        return message;
    };

    /**
     * Creates a plain object from an EnterRoomMessageBackup message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterRoomMessageBackup
     * @static
     * @param {EnterRoomMessageBackup} message EnterRoomMessageBackup
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterRoomMessageBackup.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.totalGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalGold = options.longs === String ? "0" : 0;
            object.isServerSide = false;
            object.webrtcClientID = "";
            object.playTimes = 0;
            object.numberOfPeopleInTheRoom = 0;
            object.order = 0;
            object.players = 0;
            object.playerPic = "";
            object.giftID = "";
            object.gameID = "";
            object.playStatus = options.enums === String ? "QUEUE" : 0;
            object.playerName = "";
            object.lastWonGameID = "";
            object.lastWonTime = "";
            object.lastGameTime = "";
            object.currentServerTime = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (typeof message.totalGold === "number")
                object.totalGold = options.longs === String ? String(message.totalGold) : message.totalGold;
            else
                object.totalGold = options.longs === String ? $util.Long.prototype.toString.call(message.totalGold) : options.longs === Number ? new $util.LongBits(message.totalGold.low >>> 0, message.totalGold.high >>> 0).toNumber() : message.totalGold;
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            object.isServerSide = message.isServerSide;
        if (message.webrtcClientID != null && message.hasOwnProperty("webrtcClientID"))
            object.webrtcClientID = message.webrtcClientID;
        if (message.playTimes != null && message.hasOwnProperty("playTimes"))
            object.playTimes = message.playTimes;
        if (message.numberOfPeopleInTheRoom != null && message.hasOwnProperty("numberOfPeopleInTheRoom"))
            object.numberOfPeopleInTheRoom = message.numberOfPeopleInTheRoom;
        if (message.order != null && message.hasOwnProperty("order"))
            object.order = message.order;
        if (message.players != null && message.hasOwnProperty("players"))
            object.players = message.players;
        if (message.playerPic != null && message.hasOwnProperty("playerPic"))
            object.playerPic = message.playerPic;
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            object.giftID = message.giftID;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.playStatus != null && message.hasOwnProperty("playStatus"))
            object.playStatus = options.enums === String ? $root.EnterRoomMessageBackup.PLAY_STATUS[message.playStatus] === undefined ? message.playStatus : $root.EnterRoomMessageBackup.PLAY_STATUS[message.playStatus] : message.playStatus;
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            object.playerName = message.playerName;
        if (message.lastWonGameID != null && message.hasOwnProperty("lastWonGameID"))
            object.lastWonGameID = message.lastWonGameID;
        if (message.lastWonTime != null && message.hasOwnProperty("lastWonTime"))
            object.lastWonTime = message.lastWonTime;
        if (message.lastGameTime != null && message.hasOwnProperty("lastGameTime"))
            object.lastGameTime = message.lastGameTime;
        if (message.currentServerTime != null && message.hasOwnProperty("currentServerTime"))
            object.currentServerTime = message.currentServerTime;
        return object;
    };

    /**
     * Converts this EnterRoomMessageBackup to JSON.
     * @function toJSON
     * @memberof EnterRoomMessageBackup
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterRoomMessageBackup.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for EnterRoomMessageBackup
     * @function getTypeUrl
     * @memberof EnterRoomMessageBackup
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EnterRoomMessageBackup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EnterRoomMessageBackup";
    };

    /**
     * PLAY_STATUS enum.
     * @name EnterRoomMessageBackup.PLAY_STATUS
     * @enum {number}
     * @property {number} QUEUE=0 QUEUE value
     * @property {number} PLAYING=1 PLAYING value
     * @property {number} READYTOPLAY=2 READYTOPLAY value
     */
    EnterRoomMessageBackup.PLAY_STATUS = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "QUEUE"] = 0;
        values[valuesById[1] = "PLAYING"] = 1;
        values[valuesById[2] = "READYTOPLAY"] = 2;
        return values;
    })();

    return EnterRoomMessageBackup;
})();

export const ExitRoomMessage = $root.ExitRoomMessage = (() => {

    /**
     * Properties of an ExitRoomMessage.
     * @exports IExitRoomMessage
     * @interface IExitRoomMessage
     * @property {string|null} [userID] ExitRoomMessage userID
     * @property {string|null} [macNo] ExitRoomMessage macNo
     * @property {boolean|null} [isServerSide] ExitRoomMessage isServerSide
     * @property {string|null} [webrtcClientID] ExitRoomMessage webrtcClientID
     * @property {string|null} [deviceID] ExitRoomMessage deviceID
     */

    /**
     * Constructs a new ExitRoomMessage.
     * @exports ExitRoomMessage
     * @classdesc Represents an ExitRoomMessage.
     * @implements IExitRoomMessage
     * @constructor
     * @param {IExitRoomMessage=} [properties] Properties to set
     */
    function ExitRoomMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ExitRoomMessage userID.
     * @member {string} userID
     * @memberof ExitRoomMessage
     * @instance
     */
    ExitRoomMessage.prototype.userID = "";

    /**
     * ExitRoomMessage macNo.
     * @member {string} macNo
     * @memberof ExitRoomMessage
     * @instance
     */
    ExitRoomMessage.prototype.macNo = "";

    /**
     * ExitRoomMessage isServerSide.
     * @member {boolean} isServerSide
     * @memberof ExitRoomMessage
     * @instance
     */
    ExitRoomMessage.prototype.isServerSide = false;

    /**
     * ExitRoomMessage webrtcClientID.
     * @member {string} webrtcClientID
     * @memberof ExitRoomMessage
     * @instance
     */
    ExitRoomMessage.prototype.webrtcClientID = "";

    /**
     * ExitRoomMessage deviceID.
     * @member {string} deviceID
     * @memberof ExitRoomMessage
     * @instance
     */
    ExitRoomMessage.prototype.deviceID = "";

    /**
     * Creates a new ExitRoomMessage instance using the specified properties.
     * @function create
     * @memberof ExitRoomMessage
     * @static
     * @param {IExitRoomMessage=} [properties] Properties to set
     * @returns {ExitRoomMessage} ExitRoomMessage instance
     */
    ExitRoomMessage.create = function create(properties) {
        return new ExitRoomMessage(properties);
    };

    /**
     * Encodes the specified ExitRoomMessage message. Does not implicitly {@link ExitRoomMessage.verify|verify} messages.
     * @function encode
     * @memberof ExitRoomMessage
     * @static
     * @param {IExitRoomMessage} message ExitRoomMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitRoomMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.isServerSide != null && Object.hasOwnProperty.call(message, "isServerSide"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isServerSide);
        if (message.webrtcClientID != null && Object.hasOwnProperty.call(message, "webrtcClientID"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.webrtcClientID);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified ExitRoomMessage message, length delimited. Does not implicitly {@link ExitRoomMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExitRoomMessage
     * @static
     * @param {IExitRoomMessage} message ExitRoomMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitRoomMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExitRoomMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ExitRoomMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExitRoomMessage} ExitRoomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExitRoomMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExitRoomMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.isServerSide = reader.bool();
                    break;
                }
            case 4: {
                    message.webrtcClientID = reader.string();
                    break;
                }
            case 5: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ExitRoomMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ExitRoomMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExitRoomMessage} ExitRoomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExitRoomMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ExitRoomMessage message.
     * @function verify
     * @memberof ExitRoomMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExitRoomMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            if (typeof message.isServerSide !== "boolean")
                return "isServerSide: boolean expected";
        if (message.webrtcClientID != null && message.hasOwnProperty("webrtcClientID"))
            if (!$util.isString(message.webrtcClientID))
                return "webrtcClientID: string expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates an ExitRoomMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExitRoomMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExitRoomMessage} ExitRoomMessage
     */
    ExitRoomMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ExitRoomMessage)
            return object;
        let message = new $root.ExitRoomMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.isServerSide != null)
            message.isServerSide = Boolean(object.isServerSide);
        if (object.webrtcClientID != null)
            message.webrtcClientID = String(object.webrtcClientID);
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from an ExitRoomMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExitRoomMessage
     * @static
     * @param {ExitRoomMessage} message ExitRoomMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExitRoomMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.isServerSide = false;
            object.webrtcClientID = "";
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            object.isServerSide = message.isServerSide;
        if (message.webrtcClientID != null && message.hasOwnProperty("webrtcClientID"))
            object.webrtcClientID = message.webrtcClientID;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this ExitRoomMessage to JSON.
     * @function toJSON
     * @memberof ExitRoomMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExitRoomMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ExitRoomMessage
     * @function getTypeUrl
     * @memberof ExitRoomMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ExitRoomMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ExitRoomMessage";
    };

    return ExitRoomMessage;
})();

export const NumberOfPeopleInTheRoomMessage = $root.NumberOfPeopleInTheRoomMessage = (() => {

    /**
     * Properties of a NumberOfPeopleInTheRoomMessage.
     * @exports INumberOfPeopleInTheRoomMessage
     * @interface INumberOfPeopleInTheRoomMessage
     * @property {string|null} [macNo] NumberOfPeopleInTheRoomMessage macNo
     * @property {number|null} [numberOfPeopleInTheRoom] NumberOfPeopleInTheRoomMessage numberOfPeopleInTheRoom
     */

    /**
     * Constructs a new NumberOfPeopleInTheRoomMessage.
     * @exports NumberOfPeopleInTheRoomMessage
     * @classdesc Represents a NumberOfPeopleInTheRoomMessage.
     * @implements INumberOfPeopleInTheRoomMessage
     * @constructor
     * @param {INumberOfPeopleInTheRoomMessage=} [properties] Properties to set
     */
    function NumberOfPeopleInTheRoomMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NumberOfPeopleInTheRoomMessage macNo.
     * @member {string} macNo
     * @memberof NumberOfPeopleInTheRoomMessage
     * @instance
     */
    NumberOfPeopleInTheRoomMessage.prototype.macNo = "";

    /**
     * NumberOfPeopleInTheRoomMessage numberOfPeopleInTheRoom.
     * @member {number} numberOfPeopleInTheRoom
     * @memberof NumberOfPeopleInTheRoomMessage
     * @instance
     */
    NumberOfPeopleInTheRoomMessage.prototype.numberOfPeopleInTheRoom = 0;

    /**
     * Creates a new NumberOfPeopleInTheRoomMessage instance using the specified properties.
     * @function create
     * @memberof NumberOfPeopleInTheRoomMessage
     * @static
     * @param {INumberOfPeopleInTheRoomMessage=} [properties] Properties to set
     * @returns {NumberOfPeopleInTheRoomMessage} NumberOfPeopleInTheRoomMessage instance
     */
    NumberOfPeopleInTheRoomMessage.create = function create(properties) {
        return new NumberOfPeopleInTheRoomMessage(properties);
    };

    /**
     * Encodes the specified NumberOfPeopleInTheRoomMessage message. Does not implicitly {@link NumberOfPeopleInTheRoomMessage.verify|verify} messages.
     * @function encode
     * @memberof NumberOfPeopleInTheRoomMessage
     * @static
     * @param {INumberOfPeopleInTheRoomMessage} message NumberOfPeopleInTheRoomMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NumberOfPeopleInTheRoomMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.macNo);
        if (message.numberOfPeopleInTheRoom != null && Object.hasOwnProperty.call(message, "numberOfPeopleInTheRoom"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numberOfPeopleInTheRoom);
        return writer;
    };

    /**
     * Encodes the specified NumberOfPeopleInTheRoomMessage message, length delimited. Does not implicitly {@link NumberOfPeopleInTheRoomMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NumberOfPeopleInTheRoomMessage
     * @static
     * @param {INumberOfPeopleInTheRoomMessage} message NumberOfPeopleInTheRoomMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NumberOfPeopleInTheRoomMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NumberOfPeopleInTheRoomMessage message from the specified reader or buffer.
     * @function decode
     * @memberof NumberOfPeopleInTheRoomMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NumberOfPeopleInTheRoomMessage} NumberOfPeopleInTheRoomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NumberOfPeopleInTheRoomMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NumberOfPeopleInTheRoomMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.macNo = reader.string();
                    break;
                }
            case 2: {
                    message.numberOfPeopleInTheRoom = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NumberOfPeopleInTheRoomMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NumberOfPeopleInTheRoomMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NumberOfPeopleInTheRoomMessage} NumberOfPeopleInTheRoomMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NumberOfPeopleInTheRoomMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NumberOfPeopleInTheRoomMessage message.
     * @function verify
     * @memberof NumberOfPeopleInTheRoomMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NumberOfPeopleInTheRoomMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.numberOfPeopleInTheRoom != null && message.hasOwnProperty("numberOfPeopleInTheRoom"))
            if (!$util.isInteger(message.numberOfPeopleInTheRoom))
                return "numberOfPeopleInTheRoom: integer expected";
        return null;
    };

    /**
     * Creates a NumberOfPeopleInTheRoomMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NumberOfPeopleInTheRoomMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NumberOfPeopleInTheRoomMessage} NumberOfPeopleInTheRoomMessage
     */
    NumberOfPeopleInTheRoomMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.NumberOfPeopleInTheRoomMessage)
            return object;
        let message = new $root.NumberOfPeopleInTheRoomMessage();
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.numberOfPeopleInTheRoom != null)
            message.numberOfPeopleInTheRoom = object.numberOfPeopleInTheRoom | 0;
        return message;
    };

    /**
     * Creates a plain object from a NumberOfPeopleInTheRoomMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NumberOfPeopleInTheRoomMessage
     * @static
     * @param {NumberOfPeopleInTheRoomMessage} message NumberOfPeopleInTheRoomMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NumberOfPeopleInTheRoomMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.macNo = "";
            object.numberOfPeopleInTheRoom = 0;
        }
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.numberOfPeopleInTheRoom != null && message.hasOwnProperty("numberOfPeopleInTheRoom"))
            object.numberOfPeopleInTheRoom = message.numberOfPeopleInTheRoom;
        return object;
    };

    /**
     * Converts this NumberOfPeopleInTheRoomMessage to JSON.
     * @function toJSON
     * @memberof NumberOfPeopleInTheRoomMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NumberOfPeopleInTheRoomMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NumberOfPeopleInTheRoomMessage
     * @function getTypeUrl
     * @memberof NumberOfPeopleInTheRoomMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NumberOfPeopleInTheRoomMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NumberOfPeopleInTheRoomMessage";
    };

    return NumberOfPeopleInTheRoomMessage;
})();

export const WawaMoveMessage = $root.WawaMoveMessage = (() => {

    /**
     * Properties of a WawaMoveMessage.
     * @exports IWawaMoveMessage
     * @interface IWawaMoveMessage
     * @property {string|null} [userID] WawaMoveMessage userID
     * @property {string|null} [macNo] WawaMoveMessage macNo
     * @property {number|null} [data] WawaMoveMessage data
     * @property {string|null} [deviceID] WawaMoveMessage deviceID
     */

    /**
     * Constructs a new WawaMoveMessage.
     * @exports WawaMoveMessage
     * @classdesc Represents a WawaMoveMessage.
     * @implements IWawaMoveMessage
     * @constructor
     * @param {IWawaMoveMessage=} [properties] Properties to set
     */
    function WawaMoveMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WawaMoveMessage userID.
     * @member {string} userID
     * @memberof WawaMoveMessage
     * @instance
     */
    WawaMoveMessage.prototype.userID = "";

    /**
     * WawaMoveMessage macNo.
     * @member {string} macNo
     * @memberof WawaMoveMessage
     * @instance
     */
    WawaMoveMessage.prototype.macNo = "";

    /**
     * WawaMoveMessage data.
     * @member {number} data
     * @memberof WawaMoveMessage
     * @instance
     */
    WawaMoveMessage.prototype.data = 0;

    /**
     * WawaMoveMessage deviceID.
     * @member {string} deviceID
     * @memberof WawaMoveMessage
     * @instance
     */
    WawaMoveMessage.prototype.deviceID = "";

    /**
     * Creates a new WawaMoveMessage instance using the specified properties.
     * @function create
     * @memberof WawaMoveMessage
     * @static
     * @param {IWawaMoveMessage=} [properties] Properties to set
     * @returns {WawaMoveMessage} WawaMoveMessage instance
     */
    WawaMoveMessage.create = function create(properties) {
        return new WawaMoveMessage(properties);
    };

    /**
     * Encodes the specified WawaMoveMessage message. Does not implicitly {@link WawaMoveMessage.verify|verify} messages.
     * @function encode
     * @memberof WawaMoveMessage
     * @static
     * @param {IWawaMoveMessage} message WawaMoveMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WawaMoveMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.data);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified WawaMoveMessage message, length delimited. Does not implicitly {@link WawaMoveMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WawaMoveMessage
     * @static
     * @param {IWawaMoveMessage} message WawaMoveMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WawaMoveMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WawaMoveMessage message from the specified reader or buffer.
     * @function decode
     * @memberof WawaMoveMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WawaMoveMessage} WawaMoveMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WawaMoveMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WawaMoveMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.data = reader.int32();
                    break;
                }
            case 4: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WawaMoveMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WawaMoveMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WawaMoveMessage} WawaMoveMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WawaMoveMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WawaMoveMessage message.
     * @function verify
     * @memberof WawaMoveMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WawaMoveMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!$util.isInteger(message.data))
                return "data: integer expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a WawaMoveMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WawaMoveMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WawaMoveMessage} WawaMoveMessage
     */
    WawaMoveMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.WawaMoveMessage)
            return object;
        let message = new $root.WawaMoveMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.data != null)
            message.data = object.data | 0;
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a WawaMoveMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WawaMoveMessage
     * @static
     * @param {WawaMoveMessage} message WawaMoveMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WawaMoveMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.data = 0;
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = message.data;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this WawaMoveMessage to JSON.
     * @function toJSON
     * @memberof WawaMoveMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WawaMoveMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for WawaMoveMessage
     * @function getTypeUrl
     * @memberof WawaMoveMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WawaMoveMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WawaMoveMessage";
    };

    return WawaMoveMessage;
})();

export const WawaResultMessage = $root.WawaResultMessage = (() => {

    /**
     * Properties of a WawaResultMessage.
     * @exports IWawaResultMessage
     * @interface IWawaResultMessage
     * @property {string|null} [userID] WawaResultMessage userID
     * @property {string|null} [macNo] WawaResultMessage macNo
     * @property {number|null} [data] WawaResultMessage data
     * @property {string|null} [deviceID] WawaResultMessage deviceID
     */

    /**
     * Constructs a new WawaResultMessage.
     * @exports WawaResultMessage
     * @classdesc Represents a WawaResultMessage.
     * @implements IWawaResultMessage
     * @constructor
     * @param {IWawaResultMessage=} [properties] Properties to set
     */
    function WawaResultMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WawaResultMessage userID.
     * @member {string} userID
     * @memberof WawaResultMessage
     * @instance
     */
    WawaResultMessage.prototype.userID = "";

    /**
     * WawaResultMessage macNo.
     * @member {string} macNo
     * @memberof WawaResultMessage
     * @instance
     */
    WawaResultMessage.prototype.macNo = "";

    /**
     * WawaResultMessage data.
     * @member {number} data
     * @memberof WawaResultMessage
     * @instance
     */
    WawaResultMessage.prototype.data = 0;

    /**
     * WawaResultMessage deviceID.
     * @member {string} deviceID
     * @memberof WawaResultMessage
     * @instance
     */
    WawaResultMessage.prototype.deviceID = "";

    /**
     * Creates a new WawaResultMessage instance using the specified properties.
     * @function create
     * @memberof WawaResultMessage
     * @static
     * @param {IWawaResultMessage=} [properties] Properties to set
     * @returns {WawaResultMessage} WawaResultMessage instance
     */
    WawaResultMessage.create = function create(properties) {
        return new WawaResultMessage(properties);
    };

    /**
     * Encodes the specified WawaResultMessage message. Does not implicitly {@link WawaResultMessage.verify|verify} messages.
     * @function encode
     * @memberof WawaResultMessage
     * @static
     * @param {IWawaResultMessage} message WawaResultMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WawaResultMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.data);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified WawaResultMessage message, length delimited. Does not implicitly {@link WawaResultMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WawaResultMessage
     * @static
     * @param {IWawaResultMessage} message WawaResultMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WawaResultMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WawaResultMessage message from the specified reader or buffer.
     * @function decode
     * @memberof WawaResultMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WawaResultMessage} WawaResultMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WawaResultMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WawaResultMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.data = reader.int32();
                    break;
                }
            case 4: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WawaResultMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WawaResultMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WawaResultMessage} WawaResultMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WawaResultMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WawaResultMessage message.
     * @function verify
     * @memberof WawaResultMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WawaResultMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!$util.isInteger(message.data))
                return "data: integer expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a WawaResultMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WawaResultMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WawaResultMessage} WawaResultMessage
     */
    WawaResultMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.WawaResultMessage)
            return object;
        let message = new $root.WawaResultMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.data != null)
            message.data = object.data | 0;
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a WawaResultMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WawaResultMessage
     * @static
     * @param {WawaResultMessage} message WawaResultMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WawaResultMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.data = 0;
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = message.data;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this WawaResultMessage to JSON.
     * @function toJSON
     * @memberof WawaResultMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WawaResultMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for WawaResultMessage
     * @function getTypeUrl
     * @memberof WawaResultMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WawaResultMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WawaResultMessage";
    };

    return WawaResultMessage;
})();

export const PlayGameOrder = $root.PlayGameOrder = (() => {

    /**
     * Properties of a PlayGameOrder.
     * @exports IPlayGameOrder
     * @interface IPlayGameOrder
     * @property {string|null} [userID] PlayGameOrder userID
     * @property {string|null} [gameID] PlayGameOrder gameID
     * @property {string|null} [macNo] PlayGameOrder macNo
     * @property {number|null} [order] PlayGameOrder order
     * @property {PlayGameOrder.PLAY_STATUS|null} [playStatus] PlayGameOrder playStatus
     * @property {number|null} [playTimes] PlayGameOrder playTimes
     * @property {string|null} [currentServerTime] PlayGameOrder currentServerTime
     * @property {string|null} [lastGameTime] PlayGameOrder lastGameTime
     * @property {number|null} [timeLeft] PlayGameOrder timeLeft
     * @property {string|null} [deviceID] PlayGameOrder deviceID
     * @property {boolean|null} [playControls] PlayGameOrder playControls
     */

    /**
     * Constructs a new PlayGameOrder.
     * @exports PlayGameOrder
     * @classdesc Represents a PlayGameOrder.
     * @implements IPlayGameOrder
     * @constructor
     * @param {IPlayGameOrder=} [properties] Properties to set
     */
    function PlayGameOrder(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayGameOrder userID.
     * @member {string} userID
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.userID = "";

    /**
     * PlayGameOrder gameID.
     * @member {string} gameID
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.gameID = "";

    /**
     * PlayGameOrder macNo.
     * @member {string} macNo
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.macNo = "";

    /**
     * PlayGameOrder order.
     * @member {number} order
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.order = 0;

    /**
     * PlayGameOrder playStatus.
     * @member {PlayGameOrder.PLAY_STATUS} playStatus
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.playStatus = 0;

    /**
     * PlayGameOrder playTimes.
     * @member {number} playTimes
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.playTimes = 0;

    /**
     * PlayGameOrder currentServerTime.
     * @member {string} currentServerTime
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.currentServerTime = "";

    /**
     * PlayGameOrder lastGameTime.
     * @member {string} lastGameTime
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.lastGameTime = "";

    /**
     * PlayGameOrder timeLeft.
     * @member {number} timeLeft
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.timeLeft = 0;

    /**
     * PlayGameOrder deviceID.
     * @member {string} deviceID
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.deviceID = "";

    /**
     * PlayGameOrder playControls.
     * @member {boolean} playControls
     * @memberof PlayGameOrder
     * @instance
     */
    PlayGameOrder.prototype.playControls = false;

    /**
     * Creates a new PlayGameOrder instance using the specified properties.
     * @function create
     * @memberof PlayGameOrder
     * @static
     * @param {IPlayGameOrder=} [properties] Properties to set
     * @returns {PlayGameOrder} PlayGameOrder instance
     */
    PlayGameOrder.create = function create(properties) {
        return new PlayGameOrder(properties);
    };

    /**
     * Encodes the specified PlayGameOrder message. Does not implicitly {@link PlayGameOrder.verify|verify} messages.
     * @function encode
     * @memberof PlayGameOrder
     * @static
     * @param {IPlayGameOrder} message PlayGameOrder message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayGameOrder.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.gameID != null && Object.hasOwnProperty.call(message, "gameID"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.macNo);
        if (message.order != null && Object.hasOwnProperty.call(message, "order"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.order);
        if (message.playStatus != null && Object.hasOwnProperty.call(message, "playStatus"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.playStatus);
        if (message.playTimes != null && Object.hasOwnProperty.call(message, "playTimes"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.playTimes);
        if (message.currentServerTime != null && Object.hasOwnProperty.call(message, "currentServerTime"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.currentServerTime);
        if (message.lastGameTime != null && Object.hasOwnProperty.call(message, "lastGameTime"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.lastGameTime);
        if (message.timeLeft != null && Object.hasOwnProperty.call(message, "timeLeft"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.timeLeft);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.deviceID);
        if (message.playControls != null && Object.hasOwnProperty.call(message, "playControls"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.playControls);
        return writer;
    };

    /**
     * Encodes the specified PlayGameOrder message, length delimited. Does not implicitly {@link PlayGameOrder.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayGameOrder
     * @static
     * @param {IPlayGameOrder} message PlayGameOrder message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayGameOrder.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayGameOrder message from the specified reader or buffer.
     * @function decode
     * @memberof PlayGameOrder
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayGameOrder} PlayGameOrder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayGameOrder.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayGameOrder();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.gameID = reader.string();
                    break;
                }
            case 3: {
                    message.macNo = reader.string();
                    break;
                }
            case 4: {
                    message.order = reader.int32();
                    break;
                }
            case 5: {
                    message.playStatus = reader.int32();
                    break;
                }
            case 6: {
                    message.playTimes = reader.int32();
                    break;
                }
            case 7: {
                    message.currentServerTime = reader.string();
                    break;
                }
            case 8: {
                    message.lastGameTime = reader.string();
                    break;
                }
            case 9: {
                    message.timeLeft = reader.int32();
                    break;
                }
            case 10: {
                    message.deviceID = reader.string();
                    break;
                }
            case 11: {
                    message.playControls = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlayGameOrder message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayGameOrder
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayGameOrder} PlayGameOrder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayGameOrder.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayGameOrder message.
     * @function verify
     * @memberof PlayGameOrder
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayGameOrder.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            if (!$util.isString(message.gameID))
                return "gameID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.order != null && message.hasOwnProperty("order"))
            if (!$util.isInteger(message.order))
                return "order: integer expected";
        if (message.playStatus != null && message.hasOwnProperty("playStatus"))
            switch (message.playStatus) {
            default:
                return "playStatus: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.playTimes != null && message.hasOwnProperty("playTimes"))
            if (!$util.isInteger(message.playTimes))
                return "playTimes: integer expected";
        if (message.currentServerTime != null && message.hasOwnProperty("currentServerTime"))
            if (!$util.isString(message.currentServerTime))
                return "currentServerTime: string expected";
        if (message.lastGameTime != null && message.hasOwnProperty("lastGameTime"))
            if (!$util.isString(message.lastGameTime))
                return "lastGameTime: string expected";
        if (message.timeLeft != null && message.hasOwnProperty("timeLeft"))
            if (!$util.isInteger(message.timeLeft))
                return "timeLeft: integer expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        if (message.playControls != null && message.hasOwnProperty("playControls"))
            if (typeof message.playControls !== "boolean")
                return "playControls: boolean expected";
        return null;
    };

    /**
     * Creates a PlayGameOrder message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayGameOrder
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayGameOrder} PlayGameOrder
     */
    PlayGameOrder.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayGameOrder)
            return object;
        let message = new $root.PlayGameOrder();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.gameID != null)
            message.gameID = String(object.gameID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.order != null)
            message.order = object.order | 0;
        switch (object.playStatus) {
        default:
            if (typeof object.playStatus === "number") {
                message.playStatus = object.playStatus;
                break;
            }
            break;
        case "QUEUE":
        case 0:
            message.playStatus = 0;
            break;
        case "PLAYING":
        case 1:
            message.playStatus = 1;
            break;
        case "READYTOPLAY":
        case 2:
            message.playStatus = 2;
            break;
        }
        if (object.playTimes != null)
            message.playTimes = object.playTimes | 0;
        if (object.currentServerTime != null)
            message.currentServerTime = String(object.currentServerTime);
        if (object.lastGameTime != null)
            message.lastGameTime = String(object.lastGameTime);
        if (object.timeLeft != null)
            message.timeLeft = object.timeLeft | 0;
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        if (object.playControls != null)
            message.playControls = Boolean(object.playControls);
        return message;
    };

    /**
     * Creates a plain object from a PlayGameOrder message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayGameOrder
     * @static
     * @param {PlayGameOrder} message PlayGameOrder
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayGameOrder.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.gameID = "";
            object.macNo = "";
            object.order = 0;
            object.playStatus = options.enums === String ? "QUEUE" : 0;
            object.playTimes = 0;
            object.currentServerTime = "";
            object.lastGameTime = "";
            object.timeLeft = 0;
            object.deviceID = "";
            object.playControls = false;
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.order != null && message.hasOwnProperty("order"))
            object.order = message.order;
        if (message.playStatus != null && message.hasOwnProperty("playStatus"))
            object.playStatus = options.enums === String ? $root.PlayGameOrder.PLAY_STATUS[message.playStatus] === undefined ? message.playStatus : $root.PlayGameOrder.PLAY_STATUS[message.playStatus] : message.playStatus;
        if (message.playTimes != null && message.hasOwnProperty("playTimes"))
            object.playTimes = message.playTimes;
        if (message.currentServerTime != null && message.hasOwnProperty("currentServerTime"))
            object.currentServerTime = message.currentServerTime;
        if (message.lastGameTime != null && message.hasOwnProperty("lastGameTime"))
            object.lastGameTime = message.lastGameTime;
        if (message.timeLeft != null && message.hasOwnProperty("timeLeft"))
            object.timeLeft = message.timeLeft;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        if (message.playControls != null && message.hasOwnProperty("playControls"))
            object.playControls = message.playControls;
        return object;
    };

    /**
     * Converts this PlayGameOrder to JSON.
     * @function toJSON
     * @memberof PlayGameOrder
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayGameOrder.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PlayGameOrder
     * @function getTypeUrl
     * @memberof PlayGameOrder
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PlayGameOrder.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PlayGameOrder";
    };

    /**
     * PLAY_STATUS enum.
     * @name PlayGameOrder.PLAY_STATUS
     * @enum {number}
     * @property {number} QUEUE=0 QUEUE value
     * @property {number} PLAYING=1 PLAYING value
     * @property {number} READYTOPLAY=2 READYTOPLAY value
     */
    PlayGameOrder.PLAY_STATUS = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "QUEUE"] = 0;
        values[valuesById[1] = "PLAYING"] = 1;
        values[valuesById[2] = "READYTOPLAY"] = 2;
        return values;
    })();

    return PlayGameOrder;
})();

export const TestMessage = $root.TestMessage = (() => {

    /**
     * Properties of a TestMessage.
     * @exports ITestMessage
     * @interface ITestMessage
     * @property {string|null} [msg] TestMessage msg
     * @property {number|null} [uid] TestMessage uid
     * @property {boolean|null} [result] TestMessage result
     */

    /**
     * Constructs a new TestMessage.
     * @exports TestMessage
     * @classdesc Represents a TestMessage.
     * @implements ITestMessage
     * @constructor
     * @param {ITestMessage=} [properties] Properties to set
     */
    function TestMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TestMessage msg.
     * @member {string} msg
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.msg = "";

    /**
     * TestMessage uid.
     * @member {number} uid
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.uid = 0;

    /**
     * TestMessage result.
     * @member {boolean} result
     * @memberof TestMessage
     * @instance
     */
    TestMessage.prototype.result = false;

    /**
     * Creates a new TestMessage instance using the specified properties.
     * @function create
     * @memberof TestMessage
     * @static
     * @param {ITestMessage=} [properties] Properties to set
     * @returns {TestMessage} TestMessage instance
     */
    TestMessage.create = function create(properties) {
        return new TestMessage(properties);
    };

    /**
     * Encodes the specified TestMessage message. Does not implicitly {@link TestMessage.verify|verify} messages.
     * @function encode
     * @memberof TestMessage
     * @static
     * @param {ITestMessage} message TestMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.result);
        return writer;
    };

    /**
     * Encodes the specified TestMessage message, length delimited. Does not implicitly {@link TestMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TestMessage
     * @static
     * @param {ITestMessage} message TestMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TestMessage message from the specified reader or buffer.
     * @function decode
     * @memberof TestMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TestMessage} TestMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.msg = reader.string();
                    break;
                }
            case 2: {
                    message.uid = reader.int32();
                    break;
                }
            case 3: {
                    message.result = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TestMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TestMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TestMessage} TestMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TestMessage message.
     * @function verify
     * @memberof TestMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TestMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (typeof message.result !== "boolean")
                return "result: boolean expected";
        return null;
    };

    /**
     * Creates a TestMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TestMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TestMessage} TestMessage
     */
    TestMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.TestMessage)
            return object;
        let message = new $root.TestMessage();
        if (object.msg != null)
            message.msg = String(object.msg);
        if (object.uid != null)
            message.uid = object.uid | 0;
        if (object.result != null)
            message.result = Boolean(object.result);
        return message;
    };

    /**
     * Creates a plain object from a TestMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TestMessage
     * @static
     * @param {TestMessage} message TestMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TestMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.msg = "";
            object.uid = 0;
            object.result = false;
        }
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = message.uid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this TestMessage to JSON.
     * @function toJSON
     * @memberof TestMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TestMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TestMessage
     * @function getTypeUrl
     * @memberof TestMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TestMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TestMessage";
    };

    return TestMessage;
})();

export const CancelGameMessage = $root.CancelGameMessage = (() => {

    /**
     * Properties of a CancelGameMessage.
     * @exports ICancelGameMessage
     * @interface ICancelGameMessage
     * @property {string|null} [userID] CancelGameMessage userID
     * @property {string|null} [macNo] CancelGameMessage macNo
     * @property {boolean|null} [isServerSide] CancelGameMessage isServerSide
     * @property {number|null} [cancelResult] CancelGameMessage cancelResult
     * @property {string|null} [des] CancelGameMessage des
     * @property {number|Long|null} [totalGold] CancelGameMessage totalGold
     * @property {number|Long|null} [refundGold] CancelGameMessage refundGold
     * @property {string|null} [giftID] CancelGameMessage giftID
     * @property {string|null} [gameID] CancelGameMessage gameID
     * @property {number|Long|null} [giftPrice] CancelGameMessage giftPrice
     * @property {string|null} [deviceID] CancelGameMessage deviceID
     */

    /**
     * Constructs a new CancelGameMessage.
     * @exports CancelGameMessage
     * @classdesc Represents a CancelGameMessage.
     * @implements ICancelGameMessage
     * @constructor
     * @param {ICancelGameMessage=} [properties] Properties to set
     */
    function CancelGameMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CancelGameMessage userID.
     * @member {string} userID
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.userID = "";

    /**
     * CancelGameMessage macNo.
     * @member {string} macNo
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.macNo = "";

    /**
     * CancelGameMessage isServerSide.
     * @member {boolean} isServerSide
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.isServerSide = false;

    /**
     * CancelGameMessage cancelResult.
     * @member {number} cancelResult
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.cancelResult = 0;

    /**
     * CancelGameMessage des.
     * @member {string} des
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.des = "";

    /**
     * CancelGameMessage totalGold.
     * @member {number|Long} totalGold
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.totalGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CancelGameMessage refundGold.
     * @member {number|Long} refundGold
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.refundGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CancelGameMessage giftID.
     * @member {string} giftID
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.giftID = "";

    /**
     * CancelGameMessage gameID.
     * @member {string} gameID
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.gameID = "";

    /**
     * CancelGameMessage giftPrice.
     * @member {number|Long} giftPrice
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.giftPrice = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CancelGameMessage deviceID.
     * @member {string} deviceID
     * @memberof CancelGameMessage
     * @instance
     */
    CancelGameMessage.prototype.deviceID = "";

    /**
     * Creates a new CancelGameMessage instance using the specified properties.
     * @function create
     * @memberof CancelGameMessage
     * @static
     * @param {ICancelGameMessage=} [properties] Properties to set
     * @returns {CancelGameMessage} CancelGameMessage instance
     */
    CancelGameMessage.create = function create(properties) {
        return new CancelGameMessage(properties);
    };

    /**
     * Encodes the specified CancelGameMessage message. Does not implicitly {@link CancelGameMessage.verify|verify} messages.
     * @function encode
     * @memberof CancelGameMessage
     * @static
     * @param {ICancelGameMessage} message CancelGameMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CancelGameMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.isServerSide != null && Object.hasOwnProperty.call(message, "isServerSide"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isServerSide);
        if (message.cancelResult != null && Object.hasOwnProperty.call(message, "cancelResult"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cancelResult);
        if (message.des != null && Object.hasOwnProperty.call(message, "des"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.des);
        if (message.totalGold != null && Object.hasOwnProperty.call(message, "totalGold"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.totalGold);
        if (message.refundGold != null && Object.hasOwnProperty.call(message, "refundGold"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.refundGold);
        if (message.giftID != null && Object.hasOwnProperty.call(message, "giftID"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.giftID);
        if (message.gameID != null && Object.hasOwnProperty.call(message, "gameID"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.gameID);
        if (message.giftPrice != null && Object.hasOwnProperty.call(message, "giftPrice"))
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.giftPrice);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified CancelGameMessage message, length delimited. Does not implicitly {@link CancelGameMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CancelGameMessage
     * @static
     * @param {ICancelGameMessage} message CancelGameMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CancelGameMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CancelGameMessage message from the specified reader or buffer.
     * @function decode
     * @memberof CancelGameMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CancelGameMessage} CancelGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CancelGameMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CancelGameMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.isServerSide = reader.bool();
                    break;
                }
            case 4: {
                    message.cancelResult = reader.int32();
                    break;
                }
            case 5: {
                    message.des = reader.string();
                    break;
                }
            case 6: {
                    message.totalGold = reader.int64();
                    break;
                }
            case 7: {
                    message.refundGold = reader.int64();
                    break;
                }
            case 8: {
                    message.giftID = reader.string();
                    break;
                }
            case 9: {
                    message.gameID = reader.string();
                    break;
                }
            case 10: {
                    message.giftPrice = reader.int64();
                    break;
                }
            case 11: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CancelGameMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CancelGameMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CancelGameMessage} CancelGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CancelGameMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CancelGameMessage message.
     * @function verify
     * @memberof CancelGameMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CancelGameMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            if (typeof message.isServerSide !== "boolean")
                return "isServerSide: boolean expected";
        if (message.cancelResult != null && message.hasOwnProperty("cancelResult"))
            if (!$util.isInteger(message.cancelResult))
                return "cancelResult: integer expected";
        if (message.des != null && message.hasOwnProperty("des"))
            if (!$util.isString(message.des))
                return "des: string expected";
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (!$util.isInteger(message.totalGold) && !(message.totalGold && $util.isInteger(message.totalGold.low) && $util.isInteger(message.totalGold.high)))
                return "totalGold: integer|Long expected";
        if (message.refundGold != null && message.hasOwnProperty("refundGold"))
            if (!$util.isInteger(message.refundGold) && !(message.refundGold && $util.isInteger(message.refundGold.low) && $util.isInteger(message.refundGold.high)))
                return "refundGold: integer|Long expected";
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            if (!$util.isString(message.giftID))
                return "giftID: string expected";
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            if (!$util.isString(message.gameID))
                return "gameID: string expected";
        if (message.giftPrice != null && message.hasOwnProperty("giftPrice"))
            if (!$util.isInteger(message.giftPrice) && !(message.giftPrice && $util.isInteger(message.giftPrice.low) && $util.isInteger(message.giftPrice.high)))
                return "giftPrice: integer|Long expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a CancelGameMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CancelGameMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CancelGameMessage} CancelGameMessage
     */
    CancelGameMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.CancelGameMessage)
            return object;
        let message = new $root.CancelGameMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.isServerSide != null)
            message.isServerSide = Boolean(object.isServerSide);
        if (object.cancelResult != null)
            message.cancelResult = object.cancelResult | 0;
        if (object.des != null)
            message.des = String(object.des);
        if (object.totalGold != null)
            if ($util.Long)
                (message.totalGold = $util.Long.fromValue(object.totalGold)).unsigned = false;
            else if (typeof object.totalGold === "string")
                message.totalGold = parseInt(object.totalGold, 10);
            else if (typeof object.totalGold === "number")
                message.totalGold = object.totalGold;
            else if (typeof object.totalGold === "object")
                message.totalGold = new $util.LongBits(object.totalGold.low >>> 0, object.totalGold.high >>> 0).toNumber();
        if (object.refundGold != null)
            if ($util.Long)
                (message.refundGold = $util.Long.fromValue(object.refundGold)).unsigned = false;
            else if (typeof object.refundGold === "string")
                message.refundGold = parseInt(object.refundGold, 10);
            else if (typeof object.refundGold === "number")
                message.refundGold = object.refundGold;
            else if (typeof object.refundGold === "object")
                message.refundGold = new $util.LongBits(object.refundGold.low >>> 0, object.refundGold.high >>> 0).toNumber();
        if (object.giftID != null)
            message.giftID = String(object.giftID);
        if (object.gameID != null)
            message.gameID = String(object.gameID);
        if (object.giftPrice != null)
            if ($util.Long)
                (message.giftPrice = $util.Long.fromValue(object.giftPrice)).unsigned = false;
            else if (typeof object.giftPrice === "string")
                message.giftPrice = parseInt(object.giftPrice, 10);
            else if (typeof object.giftPrice === "number")
                message.giftPrice = object.giftPrice;
            else if (typeof object.giftPrice === "object")
                message.giftPrice = new $util.LongBits(object.giftPrice.low >>> 0, object.giftPrice.high >>> 0).toNumber();
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a CancelGameMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CancelGameMessage
     * @static
     * @param {CancelGameMessage} message CancelGameMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CancelGameMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.isServerSide = false;
            object.cancelResult = 0;
            object.des = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.totalGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalGold = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.refundGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.refundGold = options.longs === String ? "0" : 0;
            object.giftID = "";
            object.gameID = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.giftPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.giftPrice = options.longs === String ? "0" : 0;
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            object.isServerSide = message.isServerSide;
        if (message.cancelResult != null && message.hasOwnProperty("cancelResult"))
            object.cancelResult = message.cancelResult;
        if (message.des != null && message.hasOwnProperty("des"))
            object.des = message.des;
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (typeof message.totalGold === "number")
                object.totalGold = options.longs === String ? String(message.totalGold) : message.totalGold;
            else
                object.totalGold = options.longs === String ? $util.Long.prototype.toString.call(message.totalGold) : options.longs === Number ? new $util.LongBits(message.totalGold.low >>> 0, message.totalGold.high >>> 0).toNumber() : message.totalGold;
        if (message.refundGold != null && message.hasOwnProperty("refundGold"))
            if (typeof message.refundGold === "number")
                object.refundGold = options.longs === String ? String(message.refundGold) : message.refundGold;
            else
                object.refundGold = options.longs === String ? $util.Long.prototype.toString.call(message.refundGold) : options.longs === Number ? new $util.LongBits(message.refundGold.low >>> 0, message.refundGold.high >>> 0).toNumber() : message.refundGold;
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            object.giftID = message.giftID;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.giftPrice != null && message.hasOwnProperty("giftPrice"))
            if (typeof message.giftPrice === "number")
                object.giftPrice = options.longs === String ? String(message.giftPrice) : message.giftPrice;
            else
                object.giftPrice = options.longs === String ? $util.Long.prototype.toString.call(message.giftPrice) : options.longs === Number ? new $util.LongBits(message.giftPrice.low >>> 0, message.giftPrice.high >>> 0).toNumber() : message.giftPrice;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this CancelGameMessage to JSON.
     * @function toJSON
     * @memberof CancelGameMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CancelGameMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CancelGameMessage
     * @function getTypeUrl
     * @memberof CancelGameMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CancelGameMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CancelGameMessage";
    };

    return CancelGameMessage;
})();

export const ExitGameMessage = $root.ExitGameMessage = (() => {

    /**
     * Properties of an ExitGameMessage.
     * @exports IExitGameMessage
     * @interface IExitGameMessage
     * @property {string|null} [userID] ExitGameMessage userID
     * @property {string|null} [macNo] ExitGameMessage macNo
     * @property {boolean|null} [isServerSide] ExitGameMessage isServerSide
     * @property {number|null} [exitResult] ExitGameMessage exitResult
     * @property {string|null} [des] ExitGameMessage des
     * @property {number|Long|null} [totalGold] ExitGameMessage totalGold
     * @property {string|null} [giftID] ExitGameMessage giftID
     * @property {string|null} [gameID] ExitGameMessage gameID
     * @property {number|Long|null} [giftPrice] ExitGameMessage giftPrice
     * @property {string|null} [deviceID] ExitGameMessage deviceID
     */

    /**
     * Constructs a new ExitGameMessage.
     * @exports ExitGameMessage
     * @classdesc Represents an ExitGameMessage.
     * @implements IExitGameMessage
     * @constructor
     * @param {IExitGameMessage=} [properties] Properties to set
     */
    function ExitGameMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ExitGameMessage userID.
     * @member {string} userID
     * @memberof ExitGameMessage
     * @instance
     */
    ExitGameMessage.prototype.userID = "";

    /**
     * ExitGameMessage macNo.
     * @member {string} macNo
     * @memberof ExitGameMessage
     * @instance
     */
    ExitGameMessage.prototype.macNo = "";

    /**
     * ExitGameMessage isServerSide.
     * @member {boolean} isServerSide
     * @memberof ExitGameMessage
     * @instance
     */
    ExitGameMessage.prototype.isServerSide = false;

    /**
     * ExitGameMessage exitResult.
     * @member {number} exitResult
     * @memberof ExitGameMessage
     * @instance
     */
    ExitGameMessage.prototype.exitResult = 0;

    /**
     * ExitGameMessage des.
     * @member {string} des
     * @memberof ExitGameMessage
     * @instance
     */
    ExitGameMessage.prototype.des = "";

    /**
     * ExitGameMessage totalGold.
     * @member {number|Long} totalGold
     * @memberof ExitGameMessage
     * @instance
     */
    ExitGameMessage.prototype.totalGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ExitGameMessage giftID.
     * @member {string} giftID
     * @memberof ExitGameMessage
     * @instance
     */
    ExitGameMessage.prototype.giftID = "";

    /**
     * ExitGameMessage gameID.
     * @member {string} gameID
     * @memberof ExitGameMessage
     * @instance
     */
    ExitGameMessage.prototype.gameID = "";

    /**
     * ExitGameMessage giftPrice.
     * @member {number|Long} giftPrice
     * @memberof ExitGameMessage
     * @instance
     */
    ExitGameMessage.prototype.giftPrice = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ExitGameMessage deviceID.
     * @member {string} deviceID
     * @memberof ExitGameMessage
     * @instance
     */
    ExitGameMessage.prototype.deviceID = "";

    /**
     * Creates a new ExitGameMessage instance using the specified properties.
     * @function create
     * @memberof ExitGameMessage
     * @static
     * @param {IExitGameMessage=} [properties] Properties to set
     * @returns {ExitGameMessage} ExitGameMessage instance
     */
    ExitGameMessage.create = function create(properties) {
        return new ExitGameMessage(properties);
    };

    /**
     * Encodes the specified ExitGameMessage message. Does not implicitly {@link ExitGameMessage.verify|verify} messages.
     * @function encode
     * @memberof ExitGameMessage
     * @static
     * @param {IExitGameMessage} message ExitGameMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitGameMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.isServerSide != null && Object.hasOwnProperty.call(message, "isServerSide"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isServerSide);
        if (message.exitResult != null && Object.hasOwnProperty.call(message, "exitResult"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.exitResult);
        if (message.des != null && Object.hasOwnProperty.call(message, "des"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.des);
        if (message.totalGold != null && Object.hasOwnProperty.call(message, "totalGold"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.totalGold);
        if (message.giftID != null && Object.hasOwnProperty.call(message, "giftID"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.giftID);
        if (message.gameID != null && Object.hasOwnProperty.call(message, "gameID"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.gameID);
        if (message.giftPrice != null && Object.hasOwnProperty.call(message, "giftPrice"))
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.giftPrice);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified ExitGameMessage message, length delimited. Does not implicitly {@link ExitGameMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExitGameMessage
     * @static
     * @param {IExitGameMessage} message ExitGameMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExitGameMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExitGameMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ExitGameMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExitGameMessage} ExitGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExitGameMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExitGameMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.isServerSide = reader.bool();
                    break;
                }
            case 4: {
                    message.exitResult = reader.int32();
                    break;
                }
            case 5: {
                    message.des = reader.string();
                    break;
                }
            case 6: {
                    message.totalGold = reader.int64();
                    break;
                }
            case 7: {
                    message.giftID = reader.string();
                    break;
                }
            case 8: {
                    message.gameID = reader.string();
                    break;
                }
            case 9: {
                    message.giftPrice = reader.int64();
                    break;
                }
            case 10: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ExitGameMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ExitGameMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExitGameMessage} ExitGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExitGameMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ExitGameMessage message.
     * @function verify
     * @memberof ExitGameMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExitGameMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            if (typeof message.isServerSide !== "boolean")
                return "isServerSide: boolean expected";
        if (message.exitResult != null && message.hasOwnProperty("exitResult"))
            if (!$util.isInteger(message.exitResult))
                return "exitResult: integer expected";
        if (message.des != null && message.hasOwnProperty("des"))
            if (!$util.isString(message.des))
                return "des: string expected";
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (!$util.isInteger(message.totalGold) && !(message.totalGold && $util.isInteger(message.totalGold.low) && $util.isInteger(message.totalGold.high)))
                return "totalGold: integer|Long expected";
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            if (!$util.isString(message.giftID))
                return "giftID: string expected";
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            if (!$util.isString(message.gameID))
                return "gameID: string expected";
        if (message.giftPrice != null && message.hasOwnProperty("giftPrice"))
            if (!$util.isInteger(message.giftPrice) && !(message.giftPrice && $util.isInteger(message.giftPrice.low) && $util.isInteger(message.giftPrice.high)))
                return "giftPrice: integer|Long expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates an ExitGameMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExitGameMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExitGameMessage} ExitGameMessage
     */
    ExitGameMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ExitGameMessage)
            return object;
        let message = new $root.ExitGameMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.isServerSide != null)
            message.isServerSide = Boolean(object.isServerSide);
        if (object.exitResult != null)
            message.exitResult = object.exitResult | 0;
        if (object.des != null)
            message.des = String(object.des);
        if (object.totalGold != null)
            if ($util.Long)
                (message.totalGold = $util.Long.fromValue(object.totalGold)).unsigned = false;
            else if (typeof object.totalGold === "string")
                message.totalGold = parseInt(object.totalGold, 10);
            else if (typeof object.totalGold === "number")
                message.totalGold = object.totalGold;
            else if (typeof object.totalGold === "object")
                message.totalGold = new $util.LongBits(object.totalGold.low >>> 0, object.totalGold.high >>> 0).toNumber();
        if (object.giftID != null)
            message.giftID = String(object.giftID);
        if (object.gameID != null)
            message.gameID = String(object.gameID);
        if (object.giftPrice != null)
            if ($util.Long)
                (message.giftPrice = $util.Long.fromValue(object.giftPrice)).unsigned = false;
            else if (typeof object.giftPrice === "string")
                message.giftPrice = parseInt(object.giftPrice, 10);
            else if (typeof object.giftPrice === "number")
                message.giftPrice = object.giftPrice;
            else if (typeof object.giftPrice === "object")
                message.giftPrice = new $util.LongBits(object.giftPrice.low >>> 0, object.giftPrice.high >>> 0).toNumber();
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from an ExitGameMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExitGameMessage
     * @static
     * @param {ExitGameMessage} message ExitGameMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExitGameMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.isServerSide = false;
            object.exitResult = 0;
            object.des = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.totalGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalGold = options.longs === String ? "0" : 0;
            object.giftID = "";
            object.gameID = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.giftPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.giftPrice = options.longs === String ? "0" : 0;
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.isServerSide != null && message.hasOwnProperty("isServerSide"))
            object.isServerSide = message.isServerSide;
        if (message.exitResult != null && message.hasOwnProperty("exitResult"))
            object.exitResult = message.exitResult;
        if (message.des != null && message.hasOwnProperty("des"))
            object.des = message.des;
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (typeof message.totalGold === "number")
                object.totalGold = options.longs === String ? String(message.totalGold) : message.totalGold;
            else
                object.totalGold = options.longs === String ? $util.Long.prototype.toString.call(message.totalGold) : options.longs === Number ? new $util.LongBits(message.totalGold.low >>> 0, message.totalGold.high >>> 0).toNumber() : message.totalGold;
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            object.giftID = message.giftID;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.giftPrice != null && message.hasOwnProperty("giftPrice"))
            if (typeof message.giftPrice === "number")
                object.giftPrice = options.longs === String ? String(message.giftPrice) : message.giftPrice;
            else
                object.giftPrice = options.longs === String ? $util.Long.prototype.toString.call(message.giftPrice) : options.longs === Number ? new $util.LongBits(message.giftPrice.low >>> 0, message.giftPrice.high >>> 0).toNumber() : message.giftPrice;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this ExitGameMessage to JSON.
     * @function toJSON
     * @memberof ExitGameMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExitGameMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ExitGameMessage
     * @function getTypeUrl
     * @memberof ExitGameMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ExitGameMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ExitGameMessage";
    };

    return ExitGameMessage;
})();

export const GameCompletedMessage = $root.GameCompletedMessage = (() => {

    /**
     * Properties of a GameCompletedMessage.
     * @exports IGameCompletedMessage
     * @interface IGameCompletedMessage
     * @property {string|null} [userID] GameCompletedMessage userID
     * @property {string|null} [macNo] GameCompletedMessage macNo
     * @property {string|null} [gameID] GameCompletedMessage gameID
     * @property {string|null} [deviceID] GameCompletedMessage deviceID
     */

    /**
     * Constructs a new GameCompletedMessage.
     * @exports GameCompletedMessage
     * @classdesc Represents a GameCompletedMessage.
     * @implements IGameCompletedMessage
     * @constructor
     * @param {IGameCompletedMessage=} [properties] Properties to set
     */
    function GameCompletedMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameCompletedMessage userID.
     * @member {string} userID
     * @memberof GameCompletedMessage
     * @instance
     */
    GameCompletedMessage.prototype.userID = "";

    /**
     * GameCompletedMessage macNo.
     * @member {string} macNo
     * @memberof GameCompletedMessage
     * @instance
     */
    GameCompletedMessage.prototype.macNo = "";

    /**
     * GameCompletedMessage gameID.
     * @member {string} gameID
     * @memberof GameCompletedMessage
     * @instance
     */
    GameCompletedMessage.prototype.gameID = "";

    /**
     * GameCompletedMessage deviceID.
     * @member {string} deviceID
     * @memberof GameCompletedMessage
     * @instance
     */
    GameCompletedMessage.prototype.deviceID = "";

    /**
     * Creates a new GameCompletedMessage instance using the specified properties.
     * @function create
     * @memberof GameCompletedMessage
     * @static
     * @param {IGameCompletedMessage=} [properties] Properties to set
     * @returns {GameCompletedMessage} GameCompletedMessage instance
     */
    GameCompletedMessage.create = function create(properties) {
        return new GameCompletedMessage(properties);
    };

    /**
     * Encodes the specified GameCompletedMessage message. Does not implicitly {@link GameCompletedMessage.verify|verify} messages.
     * @function encode
     * @memberof GameCompletedMessage
     * @static
     * @param {IGameCompletedMessage} message GameCompletedMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameCompletedMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.gameID != null && Object.hasOwnProperty.call(message, "gameID"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameID);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified GameCompletedMessage message, length delimited. Does not implicitly {@link GameCompletedMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameCompletedMessage
     * @static
     * @param {IGameCompletedMessage} message GameCompletedMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameCompletedMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameCompletedMessage message from the specified reader or buffer.
     * @function decode
     * @memberof GameCompletedMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameCompletedMessage} GameCompletedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameCompletedMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameCompletedMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.gameID = reader.string();
                    break;
                }
            case 4: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameCompletedMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameCompletedMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameCompletedMessage} GameCompletedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameCompletedMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameCompletedMessage message.
     * @function verify
     * @memberof GameCompletedMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameCompletedMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            if (!$util.isString(message.gameID))
                return "gameID: string expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a GameCompletedMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameCompletedMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameCompletedMessage} GameCompletedMessage
     */
    GameCompletedMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.GameCompletedMessage)
            return object;
        let message = new $root.GameCompletedMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.gameID != null)
            message.gameID = String(object.gameID);
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a GameCompletedMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameCompletedMessage
     * @static
     * @param {GameCompletedMessage} message GameCompletedMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameCompletedMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.gameID = "";
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this GameCompletedMessage to JSON.
     * @function toJSON
     * @memberof GameCompletedMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameCompletedMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GameCompletedMessage
     * @function getTypeUrl
     * @memberof GameCompletedMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GameCompletedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GameCompletedMessage";
    };

    return GameCompletedMessage;
})();

export const MachineFailedMessage = $root.MachineFailedMessage = (() => {

    /**
     * Properties of a MachineFailedMessage.
     * @exports IMachineFailedMessage
     * @interface IMachineFailedMessage
     * @property {string|null} [userID] MachineFailedMessage userID
     * @property {string|null} [macNo] MachineFailedMessage macNo
     * @property {string|null} [gameID] MachineFailedMessage gameID
     * @property {string|null} [des] MachineFailedMessage des
     * @property {number|Long|null} [totalGold] MachineFailedMessage totalGold
     * @property {number|Long|null} [refundGold] MachineFailedMessage refundGold
     * @property {string|null} [deviceID] MachineFailedMessage deviceID
     */

    /**
     * Constructs a new MachineFailedMessage.
     * @exports MachineFailedMessage
     * @classdesc Represents a MachineFailedMessage.
     * @implements IMachineFailedMessage
     * @constructor
     * @param {IMachineFailedMessage=} [properties] Properties to set
     */
    function MachineFailedMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MachineFailedMessage userID.
     * @member {string} userID
     * @memberof MachineFailedMessage
     * @instance
     */
    MachineFailedMessage.prototype.userID = "";

    /**
     * MachineFailedMessage macNo.
     * @member {string} macNo
     * @memberof MachineFailedMessage
     * @instance
     */
    MachineFailedMessage.prototype.macNo = "";

    /**
     * MachineFailedMessage gameID.
     * @member {string} gameID
     * @memberof MachineFailedMessage
     * @instance
     */
    MachineFailedMessage.prototype.gameID = "";

    /**
     * MachineFailedMessage des.
     * @member {string} des
     * @memberof MachineFailedMessage
     * @instance
     */
    MachineFailedMessage.prototype.des = "";

    /**
     * MachineFailedMessage totalGold.
     * @member {number|Long} totalGold
     * @memberof MachineFailedMessage
     * @instance
     */
    MachineFailedMessage.prototype.totalGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MachineFailedMessage refundGold.
     * @member {number|Long} refundGold
     * @memberof MachineFailedMessage
     * @instance
     */
    MachineFailedMessage.prototype.refundGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MachineFailedMessage deviceID.
     * @member {string} deviceID
     * @memberof MachineFailedMessage
     * @instance
     */
    MachineFailedMessage.prototype.deviceID = "";

    /**
     * Creates a new MachineFailedMessage instance using the specified properties.
     * @function create
     * @memberof MachineFailedMessage
     * @static
     * @param {IMachineFailedMessage=} [properties] Properties to set
     * @returns {MachineFailedMessage} MachineFailedMessage instance
     */
    MachineFailedMessage.create = function create(properties) {
        return new MachineFailedMessage(properties);
    };

    /**
     * Encodes the specified MachineFailedMessage message. Does not implicitly {@link MachineFailedMessage.verify|verify} messages.
     * @function encode
     * @memberof MachineFailedMessage
     * @static
     * @param {IMachineFailedMessage} message MachineFailedMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MachineFailedMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
        if (message.macNo != null && Object.hasOwnProperty.call(message, "macNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.macNo);
        if (message.gameID != null && Object.hasOwnProperty.call(message, "gameID"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameID);
        if (message.des != null && Object.hasOwnProperty.call(message, "des"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.des);
        if (message.totalGold != null && Object.hasOwnProperty.call(message, "totalGold"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.totalGold);
        if (message.refundGold != null && Object.hasOwnProperty.call(message, "refundGold"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.refundGold);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified MachineFailedMessage message, length delimited. Does not implicitly {@link MachineFailedMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MachineFailedMessage
     * @static
     * @param {IMachineFailedMessage} message MachineFailedMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MachineFailedMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MachineFailedMessage message from the specified reader or buffer.
     * @function decode
     * @memberof MachineFailedMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MachineFailedMessage} MachineFailedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MachineFailedMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MachineFailedMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.userID = reader.string();
                    break;
                }
            case 2: {
                    message.macNo = reader.string();
                    break;
                }
            case 3: {
                    message.gameID = reader.string();
                    break;
                }
            case 4: {
                    message.des = reader.string();
                    break;
                }
            case 5: {
                    message.totalGold = reader.int64();
                    break;
                }
            case 6: {
                    message.refundGold = reader.int64();
                    break;
                }
            case 7: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MachineFailedMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MachineFailedMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MachineFailedMessage} MachineFailedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MachineFailedMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MachineFailedMessage message.
     * @function verify
     * @memberof MachineFailedMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MachineFailedMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userID != null && message.hasOwnProperty("userID"))
            if (!$util.isString(message.userID))
                return "userID: string expected";
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            if (!$util.isString(message.macNo))
                return "macNo: string expected";
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            if (!$util.isString(message.gameID))
                return "gameID: string expected";
        if (message.des != null && message.hasOwnProperty("des"))
            if (!$util.isString(message.des))
                return "des: string expected";
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (!$util.isInteger(message.totalGold) && !(message.totalGold && $util.isInteger(message.totalGold.low) && $util.isInteger(message.totalGold.high)))
                return "totalGold: integer|Long expected";
        if (message.refundGold != null && message.hasOwnProperty("refundGold"))
            if (!$util.isInteger(message.refundGold) && !(message.refundGold && $util.isInteger(message.refundGold.low) && $util.isInteger(message.refundGold.high)))
                return "refundGold: integer|Long expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a MachineFailedMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MachineFailedMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MachineFailedMessage} MachineFailedMessage
     */
    MachineFailedMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.MachineFailedMessage)
            return object;
        let message = new $root.MachineFailedMessage();
        if (object.userID != null)
            message.userID = String(object.userID);
        if (object.macNo != null)
            message.macNo = String(object.macNo);
        if (object.gameID != null)
            message.gameID = String(object.gameID);
        if (object.des != null)
            message.des = String(object.des);
        if (object.totalGold != null)
            if ($util.Long)
                (message.totalGold = $util.Long.fromValue(object.totalGold)).unsigned = false;
            else if (typeof object.totalGold === "string")
                message.totalGold = parseInt(object.totalGold, 10);
            else if (typeof object.totalGold === "number")
                message.totalGold = object.totalGold;
            else if (typeof object.totalGold === "object")
                message.totalGold = new $util.LongBits(object.totalGold.low >>> 0, object.totalGold.high >>> 0).toNumber();
        if (object.refundGold != null)
            if ($util.Long)
                (message.refundGold = $util.Long.fromValue(object.refundGold)).unsigned = false;
            else if (typeof object.refundGold === "string")
                message.refundGold = parseInt(object.refundGold, 10);
            else if (typeof object.refundGold === "number")
                message.refundGold = object.refundGold;
            else if (typeof object.refundGold === "object")
                message.refundGold = new $util.LongBits(object.refundGold.low >>> 0, object.refundGold.high >>> 0).toNumber();
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a MachineFailedMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MachineFailedMessage
     * @static
     * @param {MachineFailedMessage} message MachineFailedMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MachineFailedMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userID = "";
            object.macNo = "";
            object.gameID = "";
            object.des = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.totalGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalGold = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.refundGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.refundGold = options.longs === String ? "0" : 0;
            object.deviceID = "";
        }
        if (message.userID != null && message.hasOwnProperty("userID"))
            object.userID = message.userID;
        if (message.macNo != null && message.hasOwnProperty("macNo"))
            object.macNo = message.macNo;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.des != null && message.hasOwnProperty("des"))
            object.des = message.des;
        if (message.totalGold != null && message.hasOwnProperty("totalGold"))
            if (typeof message.totalGold === "number")
                object.totalGold = options.longs === String ? String(message.totalGold) : message.totalGold;
            else
                object.totalGold = options.longs === String ? $util.Long.prototype.toString.call(message.totalGold) : options.longs === Number ? new $util.LongBits(message.totalGold.low >>> 0, message.totalGold.high >>> 0).toNumber() : message.totalGold;
        if (message.refundGold != null && message.hasOwnProperty("refundGold"))
            if (typeof message.refundGold === "number")
                object.refundGold = options.longs === String ? String(message.refundGold) : message.refundGold;
            else
                object.refundGold = options.longs === String ? $util.Long.prototype.toString.call(message.refundGold) : options.longs === Number ? new $util.LongBits(message.refundGold.low >>> 0, message.refundGold.high >>> 0).toNumber() : message.refundGold;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this MachineFailedMessage to JSON.
     * @function toJSON
     * @memberof MachineFailedMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MachineFailedMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MachineFailedMessage
     * @function getTypeUrl
     * @memberof MachineFailedMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MachineFailedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MachineFailedMessage";
    };

    return MachineFailedMessage;
})();

export const GiftPriceMessage = $root.GiftPriceMessage = (() => {

    /**
     * Properties of a GiftPriceMessage.
     * @exports IGiftPriceMessage
     * @interface IGiftPriceMessage
     * @property {string|null} [giftID] GiftPriceMessage giftID
     * @property {number|Long|null} [oldPrice] GiftPriceMessage oldPrice
     * @property {number|Long|null} [newPrice] GiftPriceMessage newPrice
     * @property {string|null} [deviceID] GiftPriceMessage deviceID
     */

    /**
     * Constructs a new GiftPriceMessage.
     * @exports GiftPriceMessage
     * @classdesc Represents a GiftPriceMessage.
     * @implements IGiftPriceMessage
     * @constructor
     * @param {IGiftPriceMessage=} [properties] Properties to set
     */
    function GiftPriceMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GiftPriceMessage giftID.
     * @member {string} giftID
     * @memberof GiftPriceMessage
     * @instance
     */
    GiftPriceMessage.prototype.giftID = "";

    /**
     * GiftPriceMessage oldPrice.
     * @member {number|Long} oldPrice
     * @memberof GiftPriceMessage
     * @instance
     */
    GiftPriceMessage.prototype.oldPrice = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GiftPriceMessage newPrice.
     * @member {number|Long} newPrice
     * @memberof GiftPriceMessage
     * @instance
     */
    GiftPriceMessage.prototype.newPrice = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GiftPriceMessage deviceID.
     * @member {string} deviceID
     * @memberof GiftPriceMessage
     * @instance
     */
    GiftPriceMessage.prototype.deviceID = "";

    /**
     * Creates a new GiftPriceMessage instance using the specified properties.
     * @function create
     * @memberof GiftPriceMessage
     * @static
     * @param {IGiftPriceMessage=} [properties] Properties to set
     * @returns {GiftPriceMessage} GiftPriceMessage instance
     */
    GiftPriceMessage.create = function create(properties) {
        return new GiftPriceMessage(properties);
    };

    /**
     * Encodes the specified GiftPriceMessage message. Does not implicitly {@link GiftPriceMessage.verify|verify} messages.
     * @function encode
     * @memberof GiftPriceMessage
     * @static
     * @param {IGiftPriceMessage} message GiftPriceMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiftPriceMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.giftID != null && Object.hasOwnProperty.call(message, "giftID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.giftID);
        if (message.oldPrice != null && Object.hasOwnProperty.call(message, "oldPrice"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.oldPrice);
        if (message.newPrice != null && Object.hasOwnProperty.call(message, "newPrice"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.newPrice);
        if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceID);
        return writer;
    };

    /**
     * Encodes the specified GiftPriceMessage message, length delimited. Does not implicitly {@link GiftPriceMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GiftPriceMessage
     * @static
     * @param {IGiftPriceMessage} message GiftPriceMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiftPriceMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GiftPriceMessage message from the specified reader or buffer.
     * @function decode
     * @memberof GiftPriceMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GiftPriceMessage} GiftPriceMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiftPriceMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GiftPriceMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.giftID = reader.string();
                    break;
                }
            case 2: {
                    message.oldPrice = reader.int64();
                    break;
                }
            case 3: {
                    message.newPrice = reader.int64();
                    break;
                }
            case 4: {
                    message.deviceID = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GiftPriceMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GiftPriceMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GiftPriceMessage} GiftPriceMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiftPriceMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GiftPriceMessage message.
     * @function verify
     * @memberof GiftPriceMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GiftPriceMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            if (!$util.isString(message.giftID))
                return "giftID: string expected";
        if (message.oldPrice != null && message.hasOwnProperty("oldPrice"))
            if (!$util.isInteger(message.oldPrice) && !(message.oldPrice && $util.isInteger(message.oldPrice.low) && $util.isInteger(message.oldPrice.high)))
                return "oldPrice: integer|Long expected";
        if (message.newPrice != null && message.hasOwnProperty("newPrice"))
            if (!$util.isInteger(message.newPrice) && !(message.newPrice && $util.isInteger(message.newPrice.low) && $util.isInteger(message.newPrice.high)))
                return "newPrice: integer|Long expected";
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            if (!$util.isString(message.deviceID))
                return "deviceID: string expected";
        return null;
    };

    /**
     * Creates a GiftPriceMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GiftPriceMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GiftPriceMessage} GiftPriceMessage
     */
    GiftPriceMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.GiftPriceMessage)
            return object;
        let message = new $root.GiftPriceMessage();
        if (object.giftID != null)
            message.giftID = String(object.giftID);
        if (object.oldPrice != null)
            if ($util.Long)
                (message.oldPrice = $util.Long.fromValue(object.oldPrice)).unsigned = false;
            else if (typeof object.oldPrice === "string")
                message.oldPrice = parseInt(object.oldPrice, 10);
            else if (typeof object.oldPrice === "number")
                message.oldPrice = object.oldPrice;
            else if (typeof object.oldPrice === "object")
                message.oldPrice = new $util.LongBits(object.oldPrice.low >>> 0, object.oldPrice.high >>> 0).toNumber();
        if (object.newPrice != null)
            if ($util.Long)
                (message.newPrice = $util.Long.fromValue(object.newPrice)).unsigned = false;
            else if (typeof object.newPrice === "string")
                message.newPrice = parseInt(object.newPrice, 10);
            else if (typeof object.newPrice === "number")
                message.newPrice = object.newPrice;
            else if (typeof object.newPrice === "object")
                message.newPrice = new $util.LongBits(object.newPrice.low >>> 0, object.newPrice.high >>> 0).toNumber();
        if (object.deviceID != null)
            message.deviceID = String(object.deviceID);
        return message;
    };

    /**
     * Creates a plain object from a GiftPriceMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GiftPriceMessage
     * @static
     * @param {GiftPriceMessage} message GiftPriceMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GiftPriceMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.giftID = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.oldPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.oldPrice = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.newPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.newPrice = options.longs === String ? "0" : 0;
            object.deviceID = "";
        }
        if (message.giftID != null && message.hasOwnProperty("giftID"))
            object.giftID = message.giftID;
        if (message.oldPrice != null && message.hasOwnProperty("oldPrice"))
            if (typeof message.oldPrice === "number")
                object.oldPrice = options.longs === String ? String(message.oldPrice) : message.oldPrice;
            else
                object.oldPrice = options.longs === String ? $util.Long.prototype.toString.call(message.oldPrice) : options.longs === Number ? new $util.LongBits(message.oldPrice.low >>> 0, message.oldPrice.high >>> 0).toNumber() : message.oldPrice;
        if (message.newPrice != null && message.hasOwnProperty("newPrice"))
            if (typeof message.newPrice === "number")
                object.newPrice = options.longs === String ? String(message.newPrice) : message.newPrice;
            else
                object.newPrice = options.longs === String ? $util.Long.prototype.toString.call(message.newPrice) : options.longs === Number ? new $util.LongBits(message.newPrice.low >>> 0, message.newPrice.high >>> 0).toNumber() : message.newPrice;
        if (message.deviceID != null && message.hasOwnProperty("deviceID"))
            object.deviceID = message.deviceID;
        return object;
    };

    /**
     * Converts this GiftPriceMessage to JSON.
     * @function toJSON
     * @memberof GiftPriceMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GiftPriceMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GiftPriceMessage
     * @function getTypeUrl
     * @memberof GiftPriceMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GiftPriceMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GiftPriceMessage";
    };

    return GiftPriceMessage;
})();

export { $root as default };
