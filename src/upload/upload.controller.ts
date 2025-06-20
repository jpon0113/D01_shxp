import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  @Get()
  @Render('default/upload')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  index() {}

  @Post('doAdd')
  @UseInterceptors(FileInterceptor('pic'))
  doAdd(@Body() body, @UploadedFile() file) {
    console.log(body);
    // 上傳圖片的訊息, form屬性enctype="multipart/form-data"
    console.log(file);
    // console.log(__dirname);

    const writeStream = createWriteStream(
      join(
        __dirname,
        '../../public/upload',
        `${Date.now()}-${file.originalname}`,
      ),
    );

    writeStream.write(file.buffer);

    return '上傳圖片成功';
  }
}
