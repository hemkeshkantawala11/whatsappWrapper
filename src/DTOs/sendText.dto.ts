export class SendTextDto {
    chatId: string;
    text: string;
    session: string;
    replyTo: string | null;
}