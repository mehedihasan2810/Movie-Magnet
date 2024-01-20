import TelegramBot from "node-telegram-bot-api";
import config from "./config";

export default class Bot {
  /**
   * Telegram bot instance
   */
  private config = config;
  public bot: TelegramBot = new TelegramBot(this.config.botToken, {});

  constructor() {}

  public async processIncomingMsg(msg: TelegramBot.Update) {
    this.onMessage(msg.message!);
  }

  /**
   * Handler for messages from Telegram
   *
   * @param msg - object that the bot got from Telegram
   */
  private async onMessage(msg: TelegramBot.Message): Promise<void> {
    const chatId = msg.chat.id;

    // console.log("📥", msg);

    switch (msg.text) {
      case "/start": {
        await this.replyStartMessage(chatId);
        return;
      }
      case "/help": {
        await this.replyHelpMessage(chatId);
        return;
      }
    }

    /**
     * Send message with inline query containing a link to the mini-app
     */
    this.sendAppButton(chatId);
  }

  /**
   * Reply to the /start command
   *
   * @param chatId - chat id to send message to
   */
  private async replyStartMessage(chatId: number): Promise<void> {
    await this.bot.sendMessage(
      chatId,
      "Welcome to Movie Magnex! \n\nA place where you can download any movie or TV/Web series. \n\nOpen the web app by clicking the below button to download your favorite movie or series.",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Open MovieMagnex",
                web_app: {
                  url: this.config.webAppUrl,
                },
              },
            ],
          ],
        },
      },
    );
  }

  /**
   * Reply to the /help command
   *
   * @param chatId - chat id to send message to
   */
  private async replyHelpMessage(chatId: number): Promise<void> {
    await this.bot!.sendMessage(
      chatId,
      "Looking for your favorite movie or series to download? \n\nClick the below button to open a web app where you can download any movie and series.",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Open MovieMagnex",
                web_app: {
                  url: this.config.webAppUrl,
                },
              },
            ],
          ],
        },
      },
    );
  }

  /**
   * Send message with inline query containing a link to the mini-app
   *
   * @param chatId - chat id to send message to
   */
  private async sendAppButton(chatId: number): Promise<void> {
    await this.bot!.sendMessage(
      chatId,
      "Looking for your favorite movie or series to download? \n\nClick the below button to open a web app where you can download any movie and series.",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: `🦄 Open MovieMagnex`,
                web_app: {
                  url: this.config.webAppUrl,
                },
              },
            ],
          ],
        },
      },
    );
  }

  /**
   * To send several messages at once we need to add a small timeout between them
   *
   * @param chatId - chat id to send message to
   * @param messages - array of messages to send
   */
  private async sendMessageQueue(
    chatId: TelegramBot.ChatId,
    messages: { text: string; options?: TelegramBot.SendMessageOptions }[],
  ): Promise<void> {
    messages.forEach((message, index) => {
      setTimeout(async () => {
        await this.bot!.sendMessage(chatId, message.text, message.options);
      }, index * 500);
    });
  }
}
