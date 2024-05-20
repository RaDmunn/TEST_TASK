"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileProcessor = void 0;
class FileProcessor {
    constructor(lineParser, logger, apiSender) {
        this.lineParser = lineParser;
        this.logger = logger;
        this.apiSender = apiSender;
    }
    processFiles(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [];
            files.forEach((lines, filename) => {
                lines.forEach((line) => {
                    promises.push(this.processLine(filename, line));
                });
            });
            yield Promise.all(promises);
        });
    }
    processLine(filename, line) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const parsed = this.lineParser.parseLine(line);
                this.logger.log(`Обробка рядка: ${line}`);
                yield new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));
                yield this.apiSender.send(filename, parsed);
            }
            catch (error) {
                this.logger.log(`Помилка обробки рядка: ${line}`);
            }
        });
    }
}
exports.FileProcessor = FileProcessor;
