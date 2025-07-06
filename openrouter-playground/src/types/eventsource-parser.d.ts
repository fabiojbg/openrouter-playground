declare module "eventsource-parser" {
  export interface ParsedEvent {
    type: string;
    id: string;
    retry?: number;
    data: string;
    event?: string;
  }

  export interface ReconnectInterval {
    type: "reconnect-interval";
    value: number;
  }

  export function createParser(
    onParse: (event: ParsedEvent | ReconnectInterval) => void
  ): {
    feed: (chunk: string) => void;
    reset: () => void;
  };
}
