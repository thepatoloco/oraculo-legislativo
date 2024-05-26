// Function excecution
export type FunctionResult<T> =
  | {
      success: true;
      result: T;
    }
  | {
      success: false;
      error: any;
    };

// Blockchain
export type BlockInfo = {
  file_hash: string;
  date: Date;
  previous_block_hash: string;
} & (
  | {
      type: "initiative";
      file_url: string;
    }
  | {
      type: "votes";
      content: string;
      content_hash: string;
    }
);
