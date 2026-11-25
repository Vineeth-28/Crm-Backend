import type { CreateUserDto } from "../dtos/user.dto.js";
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

  async create(userDetails: CreateUserDto): Promise<user> {
    return this.userRepository.create(userDetails);
  }
}

export default UserService;
