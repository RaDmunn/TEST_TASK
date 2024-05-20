import { ILineParser } from "../interfaces/ILineParser";

export class LineParser implements ILineParser {
  parseLine(line: string): { message: string; timestamp: Date } {
    const [message, dateStr] = line.split(" : ");
    return { message, timestamp: new Date(dateStr) };
  }
}
