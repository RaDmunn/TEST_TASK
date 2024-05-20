import { IApiSender } from "../interfaces/IApiSender";
import { IFileProcessor } from "../interfaces/IFileProcessor";
import { ILineParser } from "../interfaces/ILineParser";
import { ILogger } from "../interfaces/ILogger";

export class FileProcessor implements IFileProcessor {
  constructor(
    private lineParser: ILineParser,
    private logger: ILogger,
    private apiSender: IApiSender
  ) {}

  async processFiles(files: Map<string, string[]>): Promise<void> {
    const promises: Promise<void>[] = [];

    files.forEach((lines, filename) => {
      lines.forEach((line) => {
        promises.push(this.processLine(filename, line));
      });
    });

    await Promise.all(promises);
  }

  private async processLine(filename: string, line: string): Promise<void> {
    try {
      const parsed = this.lineParser.parseLine(line);
      this.logger.log(`Обробка рядка: ${line}`);
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));
      await this.apiSender.send(filename, parsed);
    } catch (error) {
      this.logger.log(`Помилка обробки рядка: ${line}`);
    }
  }
}
