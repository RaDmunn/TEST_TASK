export interface ILineParser {
  parseLine(line: string): { message: string; timestamp: Date };
}
