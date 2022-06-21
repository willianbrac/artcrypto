import { BadRequestException } from '@nestjs/common';

const whitelist = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

export default (_, file, cb) => {
  if (!whitelist.includes(file.mimetype)) {
    return cb(new BadRequestException('File type not allowed.'));
  }

  cb(null, true);
};
