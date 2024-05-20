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
const FileReader_js_1 = require("./components/FileReader.js");
const LineParser_js_1 = require("./components/LineParser.js");
const Logger_js_1 = require("./components/Logger.js");
const ApiSender_js_1 = require("./components/ApiSender.js");
const FileProcessor_js_1 = require("./components/FileProcessor.js");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileReader = new FileReader_js_1.FileReader();
        const lineParser = new LineParser_js_1.LineParser();
        const logger = new Logger_js_1.Logger();
        const apiSender = new ApiSender_js_1.ApiSender();
        const fileProcessor = new FileProcessor_js_1.FileProcessor(lineParser, logger, apiSender);
        try {
            const files = yield fileReader.readFiles();
            yield fileProcessor.processFiles(files);
        }
        catch (error) {
            logger.log("Помилка обробки файлів");
        }
    });
}
main();
