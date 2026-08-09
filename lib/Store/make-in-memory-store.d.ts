import { proto } from '../../WAProto/index.js';
import type { Chat, PresenceData } from '../Types/Chat.js';
import type { Contact } from '../Types/Contact.js';
import type { BaileysEventEmitter } from '../Types/Events.js';
import type { GroupMetadata } from '../Types/GroupMetadata.js';
import type { Label } from '../Types/Label.js';
import { type LabelAssociation } from '../Types/LabelAssociation.js';
import type { WAMessage, WAMessageKey } from '../Types/Message.js';
import type { ILogger } from '../Utils/logger.js';
import { type OrderedDictionary } from './make-ordered-dictionary.js';
import { ObjectRepository } from './object-repository.js';
type Comparable<T, K> = {
    key: (v: T) => K;
    compare: (a: K, b: K) => number;
};
type KeyedDBType<T, K> = {
    length: number;
    first: T;
    last: T;
    toJSON(): T[];
    insert(...values: T[]): void;
    upsert(...values: T[]): T[];
    insertIfAbsent(...values: T[]): T[];
    deleteById(id: string, assertPresent?: boolean): T;
    delete(value: T): T;
    slice(start?: number, end?: number): KeyedDBType<T, K>;
    clear(): void;
    get(id: string): T;
    all(): T[];
    update(id: string, update: (value: T) => void): 1 | 2;
    filter(predicate: (value: T, index: number) => boolean): KeyedDBType<T, K>;
    paginatedByValue(value: T | null, limit: number, predicate?: (value: T, index: number) => boolean, mode?: 'before' | 'after'): T[];
    paginated(cursor: K | null, limit: number, predicate?: (value: T, index: number) => boolean, mode?: 'before' | 'after'): T[];
};
export type MinimalStoreSocket = {
    profilePictureUrl: (jid: string, type?: 'preview' | 'image', timeoutMs?: number) => Promise<string | undefined>;
    groupMetadata: (jid: string) => Promise<GroupMetadata>;
};
export declare const waChatKey: (pin: boolean) => Comparable<Chat, string>;
export declare const waMessageID: (m: WAMessage) => string;
export declare const waLabelAssociationKey: Comparable<LabelAssociation, string>;
export type InMemoryStoreConfig = {
    chatKey?: Comparable<Chat, string>;
    labelAssociationKey?: Comparable<LabelAssociation, string>;
    logger?: ILogger;
    socket?: MinimalStoreSocket;
};
export declare const makeInMemoryStore: (config?: InMemoryStoreConfig) => {
    chats: KeyedDBType<Chat, string>;
    contacts: {
        [jid: string]: Contact;
    };
    messages: {
        [jid: string]: OrderedDictionary<WAMessage>;
    };
    groupMetadata: {
        [jid: string]: GroupMetadata;
    };
    state: {
        connection: string;
    };
    presences: {
        [jid: string]: {
            [participant: string]: PresenceData;
        };
    };
    labels: ObjectRepository<Label>;
    labelAssociations: KeyedDBType<LabelAssociation, string>;
    bind: (ev: BaileysEventEmitter) => void;
    /** loads messages from the store, if not found -- uses the legacy connection */
    loadMessages: (jid: string, count: number, cursor: {
        before: WAMessageKey | undefined;
    } | {
        after: WAMessageKey | undefined;
    } | undefined) => Promise<WAMessage[]>;
    /**
     * Get all available labels for profile
     *
     * Keep in mind that the list is formed from predefined tags and tags
     * that were "caught" during their editing.
     */
    getLabels: () => ObjectRepository<Label>;
    /**
     * Get labels for chat
     *
     * @returns Label IDs
     **/
    getChatLabels: (chatId: string) => LabelAssociation[];
    /**
     * Get labels for message
     *
     * @returns Label IDs
     **/
    getMessageLabels: (messageId: string) => string[];
    loadMessage: (jid: string, id: string) => Promise<WAMessage | undefined>;
    mostRecentMessage: (jid: string) => Promise<WAMessage | undefined>;
    fetchImageUrl: (jid: string, sock?: MinimalStoreSocket) => Promise<string | null | undefined>;
    fetchGroupMetadata: (jid: string, sock?: MinimalStoreSocket) => Promise<GroupMetadata | undefined>;
    fetchMessageReceipts: ({ remoteJid, id }: {
        remoteJid: string;
        id: string;
    }) => Promise<proto.IUserReceipt[] | null | undefined>;
    toJSON: () => {
        chats: KeyedDBType<Chat, string>;
        contacts: {
            [jid: string]: Contact;
        };
        messages: {
            [jid: string]: OrderedDictionary<WAMessage>;
        };
        labels: ObjectRepository<Label>;
        labelAssociations: KeyedDBType<LabelAssociation, string>;
    };
    fromJSON: (json: {
        chats: Chat[];
        contacts: {
            [jid: string]: Contact;
        };
        messages: {
            [jid: string]: WAMessage[];
        };
        labels?: {
            [id: string]: Label;
        };
        labelAssociations?: LabelAssociation[];
    }) => void;
    writeToFile: (path: string) => void;
    readFromFile: (path: string) => void;
};
export type InMemoryStore = ReturnType<typeof makeInMemoryStore>;
export {};
//# sourceMappingURL=make-in-memory-store.d.ts.map