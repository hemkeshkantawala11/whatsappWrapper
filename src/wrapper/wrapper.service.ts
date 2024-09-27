import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WrapperService {
    private readonly wahaApiBaseUrl = 'https://wp.gokapturehub.com/';

    async sendText(chatId: string, text: string, session: string, replyTo: string | null) {
        const requestBody = {
            chatId,
            text,
            session,
            reply_to: replyTo,
        };
        const response = await axios.post(`${this.wahaApiBaseUrl}/api/sendText`, requestBody);
        return response.data;
    }

    async sendFile(chatId: string, file: any, replyTo: string | null, caption: string, session: string) {
        const requestBody = {
            chatId,
            file,
            reply_to: replyTo,
            caption,
            session,
        };
        const response = await axios.post(`${this.wahaApiBaseUrl}/api/sendFile`, requestBody);
        return response.data;
    }

    async sendVideo(chatId: string, file: any, replyTo: string | null, caption: string, session: string) {
        const requestBody = {
            chatId,
            file,
            reply_to: replyTo,
            caption,
            session,
        };
        const response = await axios.post(`${this.wahaApiBaseUrl}/api/sendVideo`, requestBody);
        return response.data;
    }


    async sendVoice(chatId: string, file: any, replyTo: string | null, session: string) {
        const requestBody = {
            chatId,
            file,
            reply_to: replyTo,
            session,
        };
        const response = await axios.post(`${this.wahaApiBaseUrl}/api/sendVoice`, requestBody);
        return response.data;
    }


    async sendImage(chatId: string, file: any, replyTo: string | null,caption:string, session: string) {
        const requestBody = {
            chatId,
            file,
            reply_to: replyTo,
            caption,
            session,
        };
        const response = await axios.post(`${this.wahaApiBaseUrl}/api/sendImage`, requestBody);
        return response.data;
    }
}
