export class SendImageDto {
    chatId: string;
    file: any;
    replyTo: string | null;
    caption: string;
    session: string;
}