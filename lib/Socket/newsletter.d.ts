import type { NewsletterMetadata, NewsletterUpdate, SocketConfig, WAMediaUpload } from '../Types/index.js';
export declare const makeNewsletterSocket: (config: SocketConfig) => {
    newsletterQuery: (jid: string, type: "get" | "set", content: any[]) => Promise<any>;
    newsletterCreate: (name: string, description?: string, picture?: WAMediaUpload) => Promise<NewsletterMetadata>;
    newsletterUpdate: (jid: string, updates: NewsletterUpdate) => Promise<unknown>;
    newsletterSubscribers: (jid: string) => Promise<{
        subscribers: number;
    }>;
    newsletterMetadata: (type: "invite" | "jid", key: string, viewRole?: string) => Promise<NewsletterMetadata | null>;
    newsletterFetchAllParticipating: (viewRole?: string) => Promise<Record<string, NewsletterMetadata>>;
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
        content: import("../index.js").BinaryNode;
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
    fetchPrivacySettings: (force?: boolean) => Promise<{
        [_: string]: string;
    }>;
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
    query: (node: import("../index.js").BinaryNode, timeoutMs?: number) => Promise<any>;
    waitForMessage: <T>(msgId: string, timeoutMs?: number | undefined) => Promise<T | undefined>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: import("../index.js").BinaryNode) => Promise<void>;
    logout: (msg?: string) => Promise<void>;
    end: (error: Error | undefined) => Promise<void>;
    registerSocketEndHandler: (handler: (error: Error | undefined) => void | Promise<void>) => void;
    onUnexpectedError: (err: Error | import("@hapi/boom").Boom, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    digestKeyBundle: () => Promise<void>;
    rotateSignedPreKey: () => Promise<void>;
    requestPairingCode: (phoneNumber: string, customPairingCode?: string) => Promise<string>;
    updateServerTimeOffset: ({ attrs }: import("../index.js").BinaryNode) => void;
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
export declare const extractNewsletterMetadata: (node: any, isCreate?: boolean) => NewsletterMetadata;
export type NewsletterSocket = ReturnType<typeof makeNewsletterSocket>;
//# sourceMappingURL=newsletter.d.ts.map