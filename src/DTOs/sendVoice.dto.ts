export class SendVoiceDto {
    chatId: string;
    file: any;
    replyTo: string | null;
    session: string;
}