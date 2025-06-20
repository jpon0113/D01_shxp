import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Controller('uploadmany')
export class UploadmanyController {
  @Get()
  @Render('default/uploadmany')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  index() {}

  @Post('doAdd')
  @UseInterceptors(AnyFilesInterceptor())
  doAdd(@Body() body, @UploadedFiles() files) {
    console.log(body);
    console.log(files);
    for (const file of files) {
      const writeImage = createWriteStream(
        join(
          __dirname,
          '../../',
          'public/upload',
          `${Date.now()}-${file.originalname}`,
        ),
      );
      writeImage.write(file.buffer);
    }
    return '上傳圖片成功';
  }
}
