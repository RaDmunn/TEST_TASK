import { IApiSender } from "../interfaces/IApiSender";

export class ApiSender implements IApiSender {
  async send(
    filename: string,
    data: { message: string; timestamp: Date }
  ): Promise<void> {
    // Симуляція відправки даних в API
    console.log(`Відправлено до ${filename}:`, data);
  }
}
