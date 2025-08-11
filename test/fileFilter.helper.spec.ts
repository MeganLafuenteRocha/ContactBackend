import { fileFilter } from '../src/files/helpers/fileFilter.helper';

describe('fileFilter', () => {
  const mockReq = {} as Express.Request;

  it('debe retornar error si no se envía archivo', () => {
    const callback = jest.fn();
    fileFilter(mockReq, null as any, callback);
    expect(callback).toHaveBeenCalledWith(new Error('File is empty'), false);
  });

  it('debe aceptar un archivo con extensión válida (jpg)', () => {
    const file = { mimetype: 'image/jpg' } as Express.Multer.File;
    const callback = jest.fn();
    fileFilter(mockReq, file, callback);
    expect(callback).toHaveBeenCalledWith(null, true);
  });

  it('debe aceptar un archivo con extensión válida (png)', () => {
    const file = { mimetype: 'image/png' } as Express.Multer.File;
    const callback = jest.fn();
    fileFilter(mockReq, file, callback);
    expect(callback).toHaveBeenCalledWith(null, true);
  });

  it('debe rechazar un archivo con extensión inválida (pdf)', () => {
    const file = { mimetype: 'application/pdf' } as Express.Multer.File;
    const callback = jest.fn();
    fileFilter(mockReq, file, callback);
    expect(callback).toHaveBeenCalledWith(null, false);
  });
});
