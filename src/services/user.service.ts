import UserRepository from "../repositories/user.repository.js";
import { user } from "@prisma/client";

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async get(id: string): Promise<user | null> {
    return this.userRepository.get(id);
  }

  async getAll(): Promise<user[]> {
    return this.userRepository.getAll();
  }
}

export default UserService;
