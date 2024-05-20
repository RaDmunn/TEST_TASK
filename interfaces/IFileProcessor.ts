export interface IFileProcessor {
  processFiles(files: Map<string, string[]>): Promise<void>;
}
