import { v4 } from 'uuid';
import SosConfig from '../models/SosConfig';
import sosRepository from '../models/sos.repository';
import User from '@modules/User/models/user';

export default class SosConfigService {
  getSosConfigFromData(UserUrl: string, id_user: string, description: string): SosConfig {
    const newUserUrl = new SosConfig();
    newUserUrl.id = v4();
    newUserUrl.user_url = UserUrl;
    newUserUrl.description = description;
    newUserUrl.user = new User();
    newUserUrl.user.id = id_user;
    return newUserUrl;
  }

  async uploadFile(id: string, file: any, description: string) {
    try {
      const uploadFile = new SosConfig();
      uploadFile.id = v4();
      uploadFile.user = new User();
      uploadFile.user.id = id;
      uploadFile.user_url = file.path;
      uploadFile.description = description;
      const saveFile = await sosRepository.save(uploadFile);
      return saveFile;
    } catch (err) {
      throw new Error(`Upload error: ${err}`);
    }
  }

  async findFile(id_user: string) {
    const getUserFromDiary = await sosRepository.findBy({ user: { id: id_user } });
    return getUserFromDiary;
  }

  async findFileById(id_user: string, id_file: string) {
    const getFileById = await sosRepository.findOneBy({ id: id_file });

    if (id_user != getFileById?.user.id) {
      throw new Error('User not accessible this File');
    } else {
      return getFileById;
    }
  }

  async deleteFile(id_user: string, id_file: string) {
    const getFileById = await sosRepository.findOneBy({ id: id_file });

    if (id_user != getFileById?.user.id) {
      throw new Error('User not accessible this File');
    } else {
      await sosRepository.delete({ id: id_file });

      return 'File deleted';
    }
  }
}
