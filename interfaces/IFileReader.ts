export interface IFileReader {
  readFiles(): Promise<Map<string, string[]>>;
}
