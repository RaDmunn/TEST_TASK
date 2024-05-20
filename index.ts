import { FileReader } from "./components/FileReader.js";
import { LineParser } from "./components/LineParser.js";
import { Logger } from "./components/Logger.js";
import { ApiSender } from "./components/ApiSender.js";
import { FileProcessor } from "./components/FileProcessor.js";

async function main() {
  const fileReader = new FileReader();
  const lineParser = new LineParser();
  const logger = new Logger();
  const apiSender = new ApiSender();
  const fileProcessor = new FileProcessor(lineParser, logger, apiSender);

  try {
    const files = await fileReader.readFiles();
    await fileProcessor.processFiles(files);
  } catch (error) {
    logger.log("Помилка обробки файлів");
  }
}

main();
