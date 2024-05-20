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
exports.FileReader = void 0;
class FileReader {
    readFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            // Симуляція читання файлів з API
            return new Map([
                ["file1.txt", ["Hello world! : 2024-02-22 14:35:30 UTC"]],
                ["file2.txt", ["Goodbye world! : 2024-02-22 16:35:30 UTC"]],
                ["file3.txt", ["Hello? : 2024-02-22 08:35:30 UTC"]],
                ["file4.txt", ["Hi : 2024-02-22 12:35:30 UTC"]],
            ]);
        });
    }
}
exports.FileReader = FileReader;
