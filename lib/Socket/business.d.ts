import type { GetCatalogOptions, ProductCreate, ProductUpdate, SocketConfig, WAMediaUpload } from '../Types/index.js';
import type { UpdateBussinesProfileProps } from '../Types/Bussines.js';
import { type BinaryNode } from '../WABinary/index.js';
export declare const makeBusinessSocket: (config: SocketConfig) => {
    logger: import("../Utils/logger.js").ILogger;
    getOrderDetails: (orderId: string, tokenBase64: string) => Promise<import("../index.js").OrderDetails>;
    getCatalog: ({ jid, limit, cursor }: GetCatalogOptions) => Promise<{
        products: import("../index.js").Product[];
        nextPageCursor: string | undefined;
    }>;
    getCollections: (jid?: string, limit?: number) => Promise<{
        collections: import("../index.js").CatalogCollection[];
    }>;
    productCreate: (create: ProductCreate) => Promise<import("../index.js").Product>;
    productDelete: (productIds: string[]) => Promise<{
        deleted: number;
    }>;
    productUpdate: (productId: string, update: ProductUpdate) => Promise<import("../index.js").Product>;
    updateBussinesProfile: (args: UpdateBussinesProfileProps) => Promise<any>;
    updateCoverPhoto: (photo: WAMediaUpload) => Promise<number>;
    removeCoverPhoto: (id: string) => Promise<any>;
    sendMessageAck: (node: BinaryNode, errorCode?: number) => Promise<void>;
    sendRetryRequest: (node: BinaryNode, forceIncludeKeys?: boolean) => Promise<void>;
    rejectCall: (callId: string, callFrom: string) => Promise<void>;
    fetchMessageHistory: (count: number, oldestMsgKey: import("../index.js").WAMessageKey, oldestMsgTimestamp: number | import("long").default) => Promise<string>;
    requestPlaceholderResend: (messageKey: import("../index.js").WAMessageKey, msgData?: Partial<import("../index.js").WAMessage>) => Promise<string | undefined>;
    messageRetryManager: import("../index.js").MessageRetryManager | null;
    userDevicesCache: import("../index.js").PossiblyExtendedCacheStore | import("@cacheable/node-cache").NodeCache<import("../index.js").JidWithDevice[]>;
    devicesMutex: {
        mutex<T>(code: () => Promise<T> | T): Promise<T>;
    };
    issuePrivacyTokens: (jids: string[], timestamp?: number) => Promise<any>;
    assertSessions: (jids: string[], force?: boolean) => Promise<boolean>;
    relayMessage: (jid: string, message: import("../index.js").proto.IMessage, { messageId: msgId, participant, additionalAttributes, additionalNodes, useUserDevicesCache, useCachedGroupMetadata, statusJidList }: import("../index.js").MessageRelayOptions) => Promise<string>;
    sendStatusWhatsApp: (content: import("../index.js").AnyMessageContent, jids?: string[]) => Promise<import("../index.js").WAMessage>;
    sendReceipt: (jid: string, participant: string | undefined, messageIds: string[], type: import("../index.js").MessageReceiptType) => Promise<void>;
    sendReceipts: (keys: import("../index.js").WAMessageKey[], type: import("../index.js").MessageReceiptType) => Promise<void>;
    readMessages: (keys: import("../index.js").WAMessageKey[]) => Promise<void>;
    refreshMediaConn: (forceGet?: boolean) => Promise<import("../index.js").MediaConnInfo>;
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
    metadata: (buf: Buffer) => Promise<import("../index.js").MediaMetadataResult>;
    getMediaHost: () => string;
    waUploadToServer: import("../index.js").WAMediaUploadFunction;
    fetchPrivacySettings: (force?: boolean) => Promise<{
        [_: string]: string;
    }>;
    sendPeerDataOperationMessage: (pdoMessage: import("../index.js").proto.Message.IPeerDataOperationRequestMessage) => Promise<string>;
    createParticipantNodes: (recipientJids: string[], message: import("../index.js").proto.IMessage, extraAttrs?: BinaryNode["attrs"], dsmMessage?: import("../index.js").proto.IMessage) => Promise<{
        nodes: BinaryNode[];
        shouldIncludeDeviceIdentity: boolean;
    }>;
    getUSyncDevices: (jids: string[], useCache: boolean, ignoreZeroDevices: boolean) => Promise<(import("../index.js").JidWithDevice & {
        jid: string;
    })[]>;
    updateMemberLabel: (jid: string, memberLabel: string) => Promise<string>;
    updateMediaMessage: (message: import("../index.js").WAMessage) => Promise<import("../index.js").WAMessage>;
    captureUnifiedResponse: (msg?: import("../index.js").proto.IMessage | null) => import("../index.js").CapturedUnifiedResponse | null;
    sendTable: (jid: string, title: string, headers: string[], rows: unknown[][], quoted?: import("../index.js").WAMessage, options?: import("../index.js").RichContentOptions) => Promise<{
        message: import("../index.js").proto.IMessage;
        messageId: string;
    }>;
    sendList: (jid: string, title: string, items: unknown[], quoted?: import("../index.js").WAMessage, options?: import("../index.js").RichContentOptions) => Promise<{
        message: import("../index.js").proto.IMessage;
        messageId: string;
    }>;
    sendCodeBlock: (jid: string, code: string, quoted?: import("../index.js").WAMessage, options?: import("../index.js").RichContentOptions & {
        title?: string;
        language?: string;
    }) => Promise<{
        message: import("../index.js").proto.IMessage;
        messageId: string;
    }>;
    sendLatex: (jid: string, quoted: import("../index.js").WAMessage | undefined, options: import("../index.js").RichContentOptions & {
        text?: string;
        expressions: import("../index.js").LatexExpressionInput[];
    }) => Promise<{
        message: import("../index.js").proto.IMessage;
        messageId: string;
    }>;
    sendLatexImage: (jid: string, quoted: import("../index.js").WAMessage | undefined, options: import("../index.js").RichContentOptions & {
        text?: string;
        expressions: import("../index.js").LatexExpressionInput[];
    }, renderLatexToPng: import("../index.js").RenderLatexToPng, uploadFn: import("../index.js").UploadFn) => Promise<{
        message: import("../index.js").proto.IMessage;
        messageId: string;
    }>;
    sendLatexInlineImage: (jid: string, quoted: import("../index.js").WAMessage | undefined, options: import("../index.js").RichContentOptions & {
        text?: string;
        expressions: import("../index.js").LatexExpressionInput[];
    }, renderLatexToPng: import("../index.js").RenderLatexToPng, uploadFn: import("../index.js").UploadFn) => Promise<{
        message: import("../index.js").proto.IMessage;
        messageId: string;
    }>;
    sendUnifiedResponse: (jid: string, quoted: import("../index.js").WAMessage | undefined, captured: import("../index.js").CapturedUnifiedResponse) => Promise<{
        message: import("../index.js").proto.IMessage;
        messageId: string;
    }>;
    sendRichMessage: (jid: string, submessages: import("../index.js").proto.IAIRichResponseSubMessage[], quoted?: import("../index.js").WAMessage) => Promise<{
        message: import("../index.js").proto.IMessage;
        messageId: string;
    }>;
    sendMessage: (jid: string, content: import("../index.js").AnyMessageContent, options?: import("../index.js").MiscMessageGenerationOptions) => Promise<import("../index.js").WAMessage | {
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
    newsletterCreate: (name: string, description?: string, picture?: WAMediaUpload) => Promise<import("../index.js").NewsletterMetadata>;
    newsletterUpdate: (jid: string, updates: import("../index.js").NewsletterUpdate) => Promise<unknown>;
    newsletterSubscribers: (jid: string) => Promise<{
        subscribers: number;
    }>;
    newsletterMetadata: (type: "invite" | "jid", key: string, viewRole?: string) => Promise<import("../index.js").NewsletterMetadata | null>;
    newsletterFetchAllParticipating: (viewRole?: string) => Promise<Record<string, import("../index.js").NewsletterMetadata>>;
    newsletterFollow: (jid: string) => Promise<void>;
    newsletterUnfollow: (jid: string) => Promise<void>;
    newsletterMute: (jid: string) => Promise<void>;
    newsletterUnmute: (jid: string) => Promise<void>;
    newsletterUpdateName: (jid: string, name: string) => Promise<unknown>;
    newsletterUpdateDescription: (jid: string, description: string) => Promise<unknown>;
    newsletterUpdatePicture: (jid: string, content: WAMediaUpload) => Promise<unknown>;
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
    groupMetadata: (jid: string) => Promise<import("../index.js").GroupMetadata>;
    resolveLidPhone: (groupJid: string, lid: string) => Promise<string | undefined>;
    groupCreate: (subject: string, participants: string[]) => Promise<import("../index.js").GroupMetadata>;
    groupLeave: (id: string) => Promise<void>;
    groupUpdateSubject: (jid: string, subject: string) => Promise<void>;
    groupRequestParticipantsList: (jid: string) => Promise<{
        [key: string]: string;
    }[]>;
    groupRequestParticipantsUpdate: (jid: string, participants: string[], action: "approve" | "reject") => Promise<{
        status: string;
        jid: string | undefined;
    }[]>;
    groupParticipantsUpdate: (jid: string, participants: string[], action: import("../index.js").ParticipantAction) => Promise<{
        status: string;
        jid: string | undefined;
        content: BinaryNode;
    }[]>;
    groupUpdateDescription: (jid: string, description?: string) => Promise<void>;
    groupInviteCode: (jid: string) => Promise<string | undefined>;
    groupRevokeInvite: (jid: string) => Promise<string | undefined>;
    groupAcceptInvite: (code: string) => Promise<string | undefined>;
    groupRevokeInviteV4: (groupJid: string, invitedJid: string) => Promise<boolean>;
    groupAcceptInviteV4: (key: string | import("../index.js").WAMessageKey, inviteMessage: import("../index.js").proto.Message.IGroupInviteMessage) => Promise<any>;
    groupGetInviteInfo: (code: string) => Promise<import("../index.js").GroupMetadata>;
    groupToggleEphemeral: (jid: string, ephemeralExpiration: number) => Promise<void>;
    groupSettingUpdate: (jid: string, setting: "announcement" | "not_announcement" | "locked" | "unlocked") => Promise<void>;
    groupMemberAddMode: (jid: string, mode: "admin_add" | "all_member_add") => Promise<void>;
    groupJoinApprovalMode: (jid: string, mode: "on" | "off") => Promise<void>;
    groupFetchAllParticipating: () => Promise<{
        [_: string]: import("../index.js").GroupMetadata;
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
    getBotListV2: () => Promise<import("../index.js").BotListInfo[]>;
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
    upsertMessage: (msg: import("../index.js").WAMessage, type: import("../index.js").MessageUpsertType) => Promise<void>;
    appPatch: (patchCreate: import("../index.js").WAPatchCreate) => Promise<void>;
    sendPresenceUpdate: (type: import("../index.js").WAPresence, toJid?: string) => Promise<void>;
    presenceSubscribe: (toJid: string) => Promise<void>;
    profilePictureUrl: (jid: string, type?: "preview" | "image", timeoutMs?: number) => Promise<string | undefined>;
    fetchBlocklist: () => Promise<(string | undefined)[]>;
    fetchStatus: (...jids: string[]) => Promise<import("../index.js").USyncQueryResultList[] | undefined>;
    fetchDisappearingDuration: (...jids: string[]) => Promise<import("../index.js").USyncQueryResultList[] | undefined>;
    findUserId: (pnOrLid: string) => Promise<{
        phoneNumber: string;
        lid: string;
    }>;
    updateProfilePicture: (jid: string, content: WAMediaUpload, dimensions?: {
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
    updateCallPrivacy: (value: import("../index.js").WAPrivacyCallValue) => Promise<void>;
    updateMessagesPrivacy: (value: import("../index.js").WAPrivacyMessagesValue) => Promise<void>;
    updateLastSeenPrivacy: (value: import("../index.js").WAPrivacyValue) => Promise<void>;
    updateOnlinePrivacy: (value: import("../index.js").WAPrivacyOnlineValue) => Promise<void>;
    updateProfilePicturePrivacy: (value: import("../index.js").WAPrivacyValue) => Promise<void>;
    updateStatusPrivacy: (value: import("../index.js").WAPrivacyValue) => Promise<void>;
    updateReadReceiptsPrivacy: (value: import("../index.js").WAReadReceiptsValue) => Promise<void>;
    updateGroupsAddPrivacy: (value: import("../index.js").WAPrivacyGroupAddValue) => Promise<void>;
    updateDefaultDisappearingMode: (duration: number) => Promise<void>;
    getBusinessProfile: (jid: string) => Promise<import("../index.js").WABusinessProfile | void>;
    resyncAppState: (collections: readonly ("critical_unblock_low" | "regular_high" | "regular_low" | "critical_block" | "regular")[], isInitialSync: boolean) => Promise<void>;
    chatModify: (mod: import("../index.js").ChatModification, jid: string) => Promise<void>;
    cleanDirtyBits: (type: "account_sync" | "groups", fromTimestamp?: number | string) => Promise<void>;
    addOrEditContact: (jid: string, contact: import("../index.js").proto.SyncActionValue.IContactAction) => Promise<void>;
    removeContact: (jid: string) => Promise<void>;
    placeholderResendCache: import("../index.js").CacheStore;
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
    clearMessage: (jid: string, key: import("../index.js").WAMessageKey, timeStamp: number) => Promise<void>;
    getLidUser: (jid: string) => Promise<import("../index.js").USyncQueryResultList[] | undefined>;
    type: "md";
    ws: import("./Client/index.js").WebSocketClient;
    ev: import("../index.js").BaileysEventEmitter & {
        process(handler: (events: Partial<import("../index.js").BaileysEventMap>) => void | Promise<void>): () => void;
        buffer(): void;
        createBufferedFunction<A extends any[], T>(work: (...args: A) => Promise<T>): (...args: A) => Promise<T>;
        flush(): boolean;
        isBuffering(): boolean;
        destroy(): void;
    };
    authState: {
        creds: import("../index.js").AuthenticationCreds;
        keys: import("../index.js").SignalKeyStoreWithTransaction;
    };
    signalRepository: import("../index.js").SignalRepositoryWithLIDStore;
    user: import("../index.js").Contact | undefined;
    generateMessageTag: () => string;
    query: (node: BinaryNode, timeoutMs?: number) => Promise<any>;
    waitForMessage: <T>(msgId: string, timeoutMs?: number | undefined) => Promise<T | undefined>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: BinaryNode) => Promise<void>;
    logout: (msg?: string) => Promise<void>;
    end: (error: Error | undefined) => Promise<void>;
    registerSocketEndHandler: (handler: (error: Error | undefined) => void | Promise<void>) => void;
    onUnexpectedError: (err: Error | import("@hapi/boom").Boom, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    digestKeyBundle: () => Promise<void>;
    rotateSignedPreKey: () => Promise<void>;
    requestPairingCode: (phoneNumber: string, customPairingCode?: string) => Promise<string>;
    updateServerTimeOffset: ({ attrs }: BinaryNode) => void;
    sendUnifiedSession: () => Promise<void>;
    wamBuffer: import("../index.js").BinaryInfo;
    waitForConnectionUpdate: (check: (u: Partial<import("../index.js").ConnectionState>) => Promise<boolean | undefined>, timeoutMs?: number) => Promise<void>;
    sendWAMBuffer: (wamBuffer: Buffer) => Promise<any>;
    executeUSyncQuery: (usyncQuery: import("../index.js").USyncQuery) => Promise<import("../index.js").USyncQueryResult | undefined>;
    onWhatsApp: (...phoneNumber: string[]) => Promise<{
        jid: string;
        exists: boolean;
    }[] | undefined>;
    getJidByUsername: (...usernames: string[]) => Promise<{
        jid: string;
        exists: boolean;
    }[] | undefined>;
    fetchAccountReachoutTimelock: () => Promise<import("../index.js").ReachoutTimelockState>;
    fetchNewChatMessageCap: () => Promise<import("../index.js").NewChatMessageCapInfo>;
};
//# sourceMappingURL=business.d.ts.map