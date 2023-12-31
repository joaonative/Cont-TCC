import { AppDataSource } from '@shared/data-source';
import User from './user';

const userRepository = AppDataSource.getRepository(User);

export default userRepository;
