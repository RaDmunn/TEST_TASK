export interface IApiSender {
  send(
    filename: string,
    data: { message: string; timestamp: Date }
  ): Promise<void>;
}
