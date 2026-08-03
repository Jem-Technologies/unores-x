export interface UnoresXTokens {
  className: string;
  breakpoint: string | null;
  theme: string | null;
  state: string | null;
  isImportant: boolean;
  rest: string;
}

export interface UnoresXResolved {
  rules: string[];
  selector: string;
  mediaQuery: string | null;
}

export interface UnoresXEngine {
  tokenize(className: string): UnoresXTokens | null;
  compile(className: string): string | null;
  add(names: string | string[]): void;
  rescan(): number;
  dump(): string;
  clearCache(): void;
  readonly count: number;
}

declare const UnoresX: UnoresXEngine;

export default UnoresX;
