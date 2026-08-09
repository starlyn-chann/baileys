import NodeCache from '@cacheable/node-cache';
import { Boom } from '@hapi/boom';
import { proto } from '../../WAProto/index.js';
import type { AnyMessageContent, MediaConnInfo, MessageReceiptType, MessageRelayOptions, MiscMessageGenerationOptions, SocketConfig, WAMessage, WAMessageKey } from '../Types/index.js';
import { type CapturedUnifiedResponse, type LatexExpressionInput, MessageRetryManager, type RenderLatexToPng, type RichContentOptions, type UploadFn } from '../Utils/index.js';
import { type BinaryNode, type JidWithDevice } from '../WABinary/index.js';
import { USyncQuery } from '../WAUSync/index.js';
export declare const makeMessagesSocket: (config: SocketConfig) => {
    userDevicesCache: import("../Types/index.js").PossiblyExtendedCacheStore | NodeCache<JidWithDevice[]>;
    devicesMutex: {
        mutex<T>(code: () => Promise<T> | T): Promise<T>;
    };
    issuePrivacyTokens: (jids: string[], timestamp?: number) => Promise<any>;
    assertSessions: (jids: string[], force?: boolean) => Promise<boolean>;
    relayMessage: (jid: string, message: proto.IMessage, { messageId: msgId, participant, additionalAttributes, additionalNodes, useUserDevicesCache, useCachedGroupMetadata, statusJidList }: MessageRelayOptions) => Promise<string>;
    sendStatusWhatsApp: (content: AnyMessageContent, jids?: string[]) => Promise<WAMessage>;
    sendReceipt: (jid: string, participant: string | undefined, messageIds: string[], type: MessageReceiptType) => Promise<void>;
    sendReceipts: (keys: WAMessageKey[], type: MessageReceiptType) => Promise<void>;
    readMessages: (keys: WAMessageKey[]) => Promise<void>;
    refreshMediaConn: (forceGet?: boolean) => Promise<MediaConnInfo>;
    resize: (buf: Buffer, width: number, height: number, opts?: {
        quality?: number;
    }) => Promise<Buffer>;
    convert: (buf: Buffer, opts: {
        to: string;
    }) => Promise<Buffer>;
    toSticker: (buf: Buffer, opts?: {
        quality?: number;
    }) => Promise<Buffer>;
    compress: (buf: Buffer, opts?: {
        quality?: number;
    }) => Promise<Buffer>;
    metadata: (buf: Buffer) => Promise<import("../Utils/index.js").MediaMetadataResult>;
    getMediaHost: () => string;
    waUploadToServer: import("../Types/index.js").WAMediaUploadFunction;
    fetchPrivacySettings: (force?: boolean) => Promise<{
        [_: string]: string;
    }>;
    sendPeerDataOperationMessage: (pdoMessage: proto.Message.IPeerDataOperationRequestMessage) => Promise<string>;
    createParticipantNodes: (recipientJids: string[], message: proto.IMessage, extraAttrs?: BinaryNode["attrs"], dsmMessage?: proto.IMessage) => Promise<{
        nodes: BinaryNode[];
        shouldIncludeDeviceIdentity: boolean;
    }>;
    getUSyncDevices: (jids: string[], useCache: boolean, ignoreZeroDevices: boolean) => Promise<(JidWithDevice & {
        jid: string;
    })[]>;
    messageRetryManager: MessageRetryManager | null;
    updateMemberLabel: (jid: string, memberLabel: string) => Promise<string>;
    updateMediaMessage: (message: WAMessage) => Promise<WAMessage>;
    captureUnifiedResponse: (msg?: proto.IMessage | null) => CapturedUnifiedResponse | null;
    sendTable: (jid: string, title: string, headers: string[], rows: unknown[][], quoted?: WAMessage, options?: RichContentOptions) => Promise<{
        message: proto.IMessage;
        messageId: string;
    }>;
    sendList: (jid: string, title: string, items: unknown[], quoted?: WAMessage, options?: RichContentOptions) => Promise<{
        message: proto.IMessage;
        messageId: string;
    }>;
    sendCodeBlock: (jid: string, code: string, quoted?: WAMessage, options?: RichContentOptions & {
        title?: string;
        language?: string;
    }) => Promise<{
        message: proto.IMessage;
        messageId: string;
    }>;
    sendLatex: (jid: string, quoted: WAMessage | undefined, options: RichContentOptions & {
        text?: string;
        expressions: LatexExpressionInput[];
    }) => Promise<{
        message: proto.IMessage;
        messageId: string;
    }>;
    sendLatexImage: (jid: string, quoted: WAMessage | undefined, options: RichContentOptions & {
        text?: string;
        expressions: LatexExpressionInput[];
    }, renderLatexToPng: RenderLatexToPng, uploadFn: UploadFn) => Promise<{
        message: proto.IMessage;
        messageId: string;
    }>;
    sendLatexInlineImage: (jid: string, quoted: WAMessage | undefined, options: RichContentOptions & {
        text?: string;
        expressions: LatexExpressionInput[];
    }, renderLatexToPng: RenderLatexToPng, uploadFn: UploadFn) => Promise<{
        message: proto.IMessage;
        messageId: string;
    }>;
    sendUnifiedResponse: (jid: string, quoted: WAMessage | undefined, captured: CapturedUnifiedResponse) => Promise<{
        message: proto.IMessage;
        messageId: string;
    }>;
    sendRichMessage: (jid: string, submessages: proto.IAIRichResponseSubMessage[], quoted?: WAMessage) => Promise<{
        message: proto.IMessage;
        messageId: string;
    }>;
    sendMessage: (jid: string, content: AnyMessageContent, options?: MiscMessageGenerationOptions) => Promise<WAMessage | {
        requestPaymentMessage: {
            expiryTimestamp: any;
            amount1000: any;
            currencyCodeIso4217: any;
            requestFrom: any;
            noteMessage: any;
            background: any;
        };
    } | {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: any;
                    };
                    footer: {
                        text: any;
                    };
                    header: {
                        title: any;
                        hasMediaAttachment: boolean;
                        productMessage: {
                            product: {
                                productImage: any;
                                productId: any;
                                title: any;
                                description: any;
                                currencyCode: any;
                                priceAmount1000: any;
                                retailerId: any;
                                url: any;
                                productImageCount: number;
                            };
                            businessOwnerJid: string;
                        };
                    };
                    nativeFlowMessage: {
                        buttons: any;
                    };
                };
            };
        };
    } | {
        interactiveMessage: any;
    } | {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {};
                    deviceListMetadataVersion: number;
                    messageSecret: NonSharedBuffer;
                };
                interactiveMessage: any;
            };
        };
    } | {
        key: {
            id: string;
            remoteJid: string;
            fromMe: boolean;
        };
        message: {
            messageContextInfo: {
                messageSecret: Buffer<ArrayBufferLike>;
            };
            groupStatusMessageV2: {
                message: any;
            };
        };
    } | undefined>;
    newsletterQuery: (jid: string, type: "get" | "set", content: any[]) => Promise<any>;
    newsletterCreate: (name: string, description?: string, picture?: import("../Types/index.js").WAMediaUpload) => Promise<import("../Types/index.js").NewsletterMetadata>;
    newsletterUpdate: (jid: string, updates: import("../Types/index.js").NewsletterUpdate) => Promise<unknown>;
    newsletterSubscribers: (jid: string) => Promise<{
        subscribers: number;
    }>;
    newsletterMetadata: (type: "invite" | "jid", key: string, viewRole?: string) => Promise<import("../Types/index.js").NewsletterMetadata | null>;
    newsletterFetchAllParticipating: (viewRole?: string) => Promise<Record<string, import("../Types/index.js").NewsletterMetadata>>;
    newsletterFollow: (jid: string) => Promise<void>;
    newsletterUnfollow: (jid: string) => Promise<void>;
    newsletterMute: (jid: string) => Promise<void>;
    newsletterUnmute: (jid: string) => Promise<void>;
    newsletterUpdateName: (jid: string, name: string) => Promise<unknown>;
    newsletterUpdateDescription: (jid: string, description: string) => Promise<unknown>;
    newsletterUpdatePicture: (jid: string, content: import("../Types/index.js").WAMediaUpload) => Promise<unknown>;
    newsletterRemovePicture: (jid: string) => Promise<unknown>;
    newsletterReactionMode: (jid: string, mode: string) => Promise<unknown>;
    newsletterReactMessage: (jid: string, serverId: string, reaction?: string) => Promise<void>;
    newsletterFetchMessages: {
        (type: "invite" | "jid", key: string, count: number, after?: number): Promise<any[]>;
        (jid: string, count: number, since?: number, after?: number): Promise<any[]>;
    };
    newsletterFetchUpdates: (jid: string, count: number, opts?: {
        since?: number;
        after?: number;
        decrypt?: boolean;
    }) => Promise<any[]>;
    subscribeNewsletterUpdates: (jid: string) => Promise<{
        duration: string;
    } | null>;
    newsletterAdminCount: (jid: string) => Promise<number>;
    newsletterChangeOwner: (jid: string, newOwnerJid: string) => Promise<void>;
    newsletterDemote: (jid: string, userJid: string) => Promise<void>;
    newsletterDelete: (jid: string) => Promise<void>;
    newsletterAction: (jid: string, type: "follow" | "unfollow" | "mute" | "unmute") => Promise<void>;
    groupMetadata: (jid: string) => Promise<import("../Types/index.js").GroupMetadata>;
    resolveLidPhone: (groupJid: string, lid: string) => Promise<string | undefined>;
    groupCreate: (subject: string, participants: string[]) => Promise<import("../Types/index.js").GroupMetadata>;
    groupLeave: (id: string) => Promise<void>;
    groupUpdateSubject: (jid: string, subject: string) => Promise<void>;
    groupRequestParticipantsList: (jid: string) => Promise<{
        [key: string]: string;
    }[]>;
    groupRequestParticipantsUpdate: (jid: string, participants: string[], action: "approve" | "reject") => Promise<{
        status: string;
        jid: string | undefined;
    }[]>;
    groupParticipantsUpdate: (jid: string, participants: string[], action: import("../Types/index.js").ParticipantAction) => Promise<{
        status: string;
        jid: string | undefined;
        content: BinaryNode;
    }[]>;
    groupUpdateDescription: (jid: string, description?: string) => Promise<void>;
    groupInviteCode: (jid: string) => Promise<string | undefined>;
    groupRevokeInvite: (jid: string) => Promise<string | undefined>;
    groupAcceptInvite: (code: string) => Promise<string | undefined>;
    groupRevokeInviteV4: (groupJid: string, invitedJid: string) => Promise<boolean>;
    groupAcceptInviteV4: (key: string | WAMessageKey, inviteMessage: proto.Message.IGroupInviteMessage) => Promise<any>;
    groupGetInviteInfo: (code: string) => Promise<import("../Types/index.js").GroupMetadata>;
    groupToggleEphemeral: (jid: string, ephemeralExpiration: number) => Promise<void>;
    groupSettingUpdate: (jid: string, setting: "announcement" | "not_announcement" | "locked" | "unlocked") => Promise<void>;
    groupMemberAddMode: (jid: string, mode: "admin_add" | "all_member_add") => Promise<void>;
    groupJoinApprovalMode: (jid: string, mode: "on" | "off") => Promise<void>;
    groupFetchAllParticipating: () => Promise<{
        [_: string]: import("../Types/index.js").GroupMetadata;
    }>;
    getAdminStatus: (groupJid: string, senderJid?: string) => Promise<{
        isAdmin: boolean;
        isBotAdmin: boolean;
    }>;
    serverProps: {
        privacyTokenOn1to1: boolean;
        profilePicPrivacyToken: boolean;
        lidTrustedTokenIssueToLid: boolean;
    };
    createCallLink: (type: "audio" | "video", event?: {
        startTime: number;
    }, timeoutMs?: number) => Promise<string | undefined>;
    getBotListV2: () => Promise<import("../Types/index.js").BotListInfo[]>;
    messageMutex: {
        mutex<T>(code: () => Promise<T> | T): Promise<T>;
    };
    receiptMutex: {
        mutex<T>(code: () => Promise<T> | T): Promise<T>;
    };
    appStatePatchMutex: {
        mutex<T>(code: () => Promise<T> | T): Promise<T>;
    };
    notificationMutex: {
        mutex<T>(code: () => Promise<T> | T): Promise<T>;
    };
    upsertMessage: (msg: WAMessage, type: import("../Types/index.js").MessageUpsertType) => Promise<void>;
    appPatch: (patchCreate: import("../Types/index.js").WAPatchCreate) => Promise<void>;
    sendPresenceUpdate: (type: import("../Types/index.js").WAPresence, toJid?: string) => Promise<void>;
    presenceSubscribe: (toJid: string) => Promise<void>;
    profilePictureUrl: (jid: string, type?: "preview" | "image", timeoutMs?: number) => Promise<string | undefined>;
    fetchBlocklist: () => Promise<(string | undefined)[]>;
    fetchStatus: (...jids: string[]) => Promise<import("../WAUSync/index.js").USyncQueryResultList[] | undefined>;
    fetchDisappearingDuration: (...jids: string[]) => Promise<import("../WAUSync/index.js").USyncQueryResultList[] | undefined>;
    findUserId: (pnOrLid: string) => Promise<{
        phoneNumber: string;
        lid: string;
    }>;
    updateProfilePicture: (jid: string, content: import("../Types/index.js").WAMediaUpload, dimensions?: {
        width: number;
        height: number;
    }, options?: {
        full?: boolean;
    }) => Promise<void>;
    removeProfilePicture: (jid: string) => Promise<void>;
    updateProfileStatus: (status: string) => Promise<void>;
    updateProfileName: (name: string) => Promise<void>;
    updateBlockStatus: (jid: string, action: "block" | "unblock") => Promise<void>;
    updateDisableLinkPreviewsPrivacy: (isPreviewsDisabled: boolean) => Promise<void>;
    updateCallPrivacy: (value: import("../Types/index.js").WAPrivacyCallValue) => Promise<void>;
    updateMessagesPrivacy: (value: import("../Types/index.js").WAPrivacyMessagesValue) => Promise<void>;
    updateLastSeenPrivacy: (value: import("../Types/index.js").WAPrivacyValue) => Promise<void>;
    updateOnlinePrivacy: (value: import("../Types/index.js").WAPrivacyOnlineValue) => Promise<void>;
    updateProfilePicturePrivacy: (value: import("../Types/index.js").WAPrivacyValue) => Promise<void>;
    updateStatusPrivacy: (value: import("../Types/index.js").WAPrivacyValue) => Promise<void>;
    updateReadReceiptsPrivacy: (value: import("../Types/index.js").WAReadReceiptsValue) => Promise<void>;
    updateGroupsAddPrivacy: (value: import("../Types/index.js").WAPrivacyGroupAddValue) => Promise<void>;
    updateDefaultDisappearingMode: (duration: number) => Promise<void>;
    getBusinessProfile: (jid: string) => Promise<import("../Types/index.js").WABusinessProfile | void>;
    resyncAppState: (collections: readonly ("critical_unblock_low" | "regular_high" | "regular_low" | "critical_block" | "regular")[], isInitialSync: boolean) => Promise<void>;
    chatModify: (mod: import("../Types/index.js").ChatModification, jid: string) => Promise<void>;
    cleanDirtyBits: (type: "account_sync" | "groups", fromTimestamp?: number | string) => Promise<void>;
    addOrEditContact: (jid: string, contact: proto.SyncActionValue.IContactAction) => Promise<void>;
    removeContact: (jid: string) => Promise<void>;
    placeholderResendCache: import("../Types/index.js").CacheStore;
    addLabel: (jid: string, labels: import("../Types/Label.js").LabelActionBody) => Promise<void>;
    addChatLabel: (jid: string, labelId: string) => Promise<void>;
    removeChatLabel: (jid: string, labelId: string) => Promise<void>;
    addMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    removeMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    star: (jid: string, messages: {
        id: string;
        fromMe?: boolean;
    }[], star: boolean) => Promise<void>;
    addOrEditQuickReply: (quickReply: import("../Types/Bussines.js").QuickReplyAction) => Promise<void>;
    removeQuickReply: (timestamp: string) => Promise<void>;
    clearMessage: (jid: string, key: WAMessageKey, timeStamp: number) => Promise<void>;
    getLidUser: (jid: string) => Promise<import("../WAUSync/index.js").USyncQueryResultList[] | undefined>;
    type: "md";
    ws: import("./Client/websocket.js").WebSocketClient;
    ev: import("../Types/index.js").BaileysEventEmitter & {
        process(handler: (events: Partial<import("../Types/index.js").BaileysEventMap>) => void | Promise<void>): () => void;
        buffer(): void;
        createBufferedFunction<A extends any[], T>(work: (...args: A) => Promise<T>): (...args: A) => Promise<T>;
        flush(): boolean;
        isBuffering(): boolean;
        destroy(): void;
    };
    authState: {
        creds: import("../Types/index.js").AuthenticationCreds;
        keys: import("../Types/index.js").SignalKeyStoreWithTransaction;
    };
    signalRepository: import("../Types/index.js").SignalRepositoryWithLIDStore;
    user: import("../Types/index.js").Contact | undefined;
    generateMessageTag: () => string;
    query: (node: BinaryNode, timeoutMs?: number) => Promise<any>;
    waitForMessage: <T>(msgId: string, timeoutMs?: number | undefined) => Promise<T | undefined>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: BinaryNode) => Promise<void>;
    logout: (msg?: string) => Promise<void>;
    end: (error: Error | undefined) => Promise<void>;
    registerSocketEndHandler: (handler: (error: Error | undefined) => void | Promise<void>) => void;
    onUnexpectedError: (err: Error | Boom, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    digestKeyBundle: () => Promise<void>;
    rotateSignedPreKey: () => Promise<void>;
    requestPairingCode: (phoneNumber: string, customPairingCode?: string) => Promise<string>;
    updateServerTimeOffset: ({ attrs }: BinaryNode) => void;
    sendUnifiedSession: () => Promise<void>;
    wamBuffer: import("../index.js").BinaryInfo;
    waitForConnectionUpdate: (check: (u: Partial<import("../Types/index.js").ConnectionState>) => Promise<boolean | undefined>, timeoutMs?: number) => Promise<void>;
    sendWAMBuffer: (wamBuffer: Buffer) => Promise<any>;
    executeUSyncQuery: (usyncQuery: USyncQuery) => Promise<import("../WAUSync/index.js").USyncQueryResult | undefined>;
    onWhatsApp: (...phoneNumber: string[]) => Promise<{
        jid: string;
        exists: boolean;
    }[] | undefined>;
    getJidByUsername: (...usernames: string[]) => Promise<{
        jid: string;
        exists: boolean;
    }[] | undefined>;
    fetchAccountReachoutTimelock: () => Promise<import("../Types/index.js").ReachoutTimelockState>;
    fetchNewChatMessageCap: () => Promise<import("../Types/index.js").NewChatMessageCapInfo>;
};
//# sourceMappingURL=messages-send.d.ts.map