import { IFileReader } from "../interfaces/IFileReader";

export class FileReader implements IFileReader {
  async readFiles(): Promise<Map<string, string[]>> {
    // Симуляція читання файлів з API
    return new Map([
      ["file1.txt", ["Hello world! : 2024-02-22 14:35:30 UTC"]],
      ["file2.txt", ["Goodbye world! : 2024-02-22 16:35:30 UTC"]],
      ["file3.txt", ["Hello? : 2024-02-22 08:35:30 UTC"]],
      ["file4.txt", ["Hi : 2024-02-22 12:35:30 UTC"]],
    ]);
  }
}
