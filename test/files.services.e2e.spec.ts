import { BadRequestException } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';
import { FilesService } from '../src/files/files.service';

jest.mock('fs');

describe('FilesService', () => {
  let service: FilesService;

  beforeEach(() => {
    service = new FilesService();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debe devolver la ruta cuando el archivo existe', () => {
    (existsSync as jest.Mock).mockReturnValue(true);
    const imageName = 'photo.jpg';
    const mockDirname = join(__dirname, '../src/files');
    const expectedPath = join(mockDirname, '../../static/people', imageName);

    const result = service.getStaticPeopleImage(imageName);

    expect(existsSync).toHaveBeenCalledWith(expectedPath);
    expect(result).toBe(expectedPath);
  });

  it('debe lanzar BadRequestException cuando el archivo no existe', () => {
    (existsSync as jest.Mock).mockReturnValue(false);
    const imageName = 'notfound.jpg';

    expect(() => service.getStaticPeopleImage(imageName)).toThrow(BadRequestException);
  });
});
