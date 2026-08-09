import type { BinaryNode } from '../WABinary/index.js';
export declare const executeWMexQuery: <T>(variables: Record<string, unknown>, queryId: string, dataPath: string, query: (node: BinaryNode) => Promise<BinaryNode>, generateMessageTag: () => string) => Promise<T>;
export declare const executeWMexQueryIgnoreResponse: (variables: Record<string, unknown>, queryId: string, query: (node: BinaryNode) => Promise<BinaryNode>, generateMessageTag: () => string) => Promise<void>;
//# sourceMappingURL=mex.d.ts.map