"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineParser = void 0;
class LineParser {
    parseLine(line) {
        const [message, dateStr] = line.split(" : ");
        return { message, timestamp: new Date(dateStr) };
    }
}
exports.LineParser = LineParser;
