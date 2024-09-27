import {Body, Controller, Post} from "@nestjs/common";
import {WrapperService} from "./wrapper.service";
import {SendTextDto} from "../DTOs/sendText.dto";
import {SendFileDto} from "../DTOs/sendFile.dto";
import {SendVideoDto} from "../DTOs/sendVideo.dto";
import {SendVoiceDto} from "../DTOs/sendVoice.dto";
import {SendImageDto} from "../DTOs/sendImage.dto";

@Controller('waha')
export class WrapperController{
    constructor(private readonly wrapperService: WrapperService) {}

    @Post('sendText')
    async sendText(@Body() sendTextDto: SendTextDto) {
        const { chatId, text, session, replyTo } = sendTextDto;
        return this.wrapperService.sendText(chatId, text, session, replyTo);
    }

    @Post('sendFile')
    async sendFile(@Body() sendFileDto: SendFileDto) {
        const { chatId, file, replyTo, caption, session } = sendFileDto;
          return this.wrapperService.sendFile(chatId, file, replyTo, caption, session);
    }

    @Post('sendVideo')
    async sendVideo(@Body() sendVideoDto: SendVideoDto) {
        const { chatId, file, replyTo, caption, session } = sendVideoDto;

        return this.wrapperService.sendVideo(chatId, file, replyTo, caption, session);
    }

    @Post('sendVoice')
    async sendVoice(@Body() sendVoiceDto: SendVoiceDto) {
        const { chatId, file, replyTo, session } = sendVoiceDto;
        return this.wrapperService.sendVoice(chatId, file, replyTo, session);
    }

    @Post('sendImage')
    async sendImage(@Body() sendImageDto: SendImageDto) {
        const { chatId, file, replyTo, caption, session } = sendImageDto;
        return this.wrapperService.sendImage(chatId, file, replyTo, caption, session);
    }
}