import type { ILogger } from '../Utils/logger.js';
import type { WAMediaUploadFunction } from '../Types/index.js';
export type SmgssContentType = 'PAYMENT' | 'PRODUCT' | 'INTERACTIVE_BUTTONS' | 'INTERACTIVE' | 'CAROUSEL' | 'ALBUM' | 'EVENT' | 'POLL_RESULT' | 'GROUP_STORY';
export type SmgssConfig = {
    logger: ILogger;
    linkPreviewImageThumbnailWidth?: number;
    generateHighQualityLinkPreview?: boolean;
    mediaCache?: any;
    options?: RequestInit;
};
export type SmgssSock = {
    authState: {
        creds: {
            me?: {
                id: string;
            };
        };
    };
};
type RelayMessageFn = (jid: string, message: any, opts?: any) => Promise<any>;
export declare class Smgss {
    private waUploadToServer;
    private relayMessage;
    private config;
    private sock;
    constructor(waUploadToServer: WAMediaUploadFunction, relayMessage: RelayMessageFn, config: SmgssConfig, sock: SmgssSock);
    private get meJid();
    detectType(content: any): SmgssContentType | null;
    handle(type: SmgssContentType, content: any, jid: string, quoted?: any): Promise<import("../index.js").WAMessage | {
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
    }>;
    handlePayment(content: any, quoted?: any): Promise<{
        requestPaymentMessage: {
            expiryTimestamp: any;
            amount1000: any;
            currencyCodeIso4217: any;
            requestFrom: any;
            noteMessage: any;
            background: any;
        };
    }>;
    handleProduct(content: any): Promise<{
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
    }>;
    handleInteractive(content: any): Promise<{
        interactiveMessage: any;
    }>;
    handleInteractiveButtons(content: any): Promise<{
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {};
                    deviceListMetadataVersion: number;
                    messageSecret: NonSharedBuffer;
                };
                interactiveMessage: {
                    body: {
                        text: any;
                    };
                    footer: {
                        text: any;
                    };
                    header: any;
                    nativeFlowMessage: {
                        buttons: any;
                    };
                };
            };
        };
    }>;
    handleCarousel(content: any): Promise<{
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
    }>;
    handleAlbum(content: any, jid: string, quoted?: any): Promise<import("../index.js").WAMessage>;
    handleEvent(content: any, jid: string, quoted?: any): Promise<import("../index.js").WAMessage>;
    handlePollResult(content: any, jid: string, quoted?: any): Promise<import("../index.js").WAMessage>;
    handleGroupStory(content: any, jid: string): Promise<{
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
    }>;
}
export {};
//# sourceMappingURL=smgss.d.ts.map