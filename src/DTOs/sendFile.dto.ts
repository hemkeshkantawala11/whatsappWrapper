export class SendFileDto {
    chatId: string;
    file: any;
    replyTo: string | null;
    caption: string;
    session: string;
}