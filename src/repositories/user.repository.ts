import { PrismaClient, user } from "@prisma/client";
import type { CreateUserDto } from "../dtos/user.dto.js";
const prisma = new PrismaClient();

class UserRepository {
  async create(userDetails: CreateUserDto): Promise<user> {
    return prisma.user.create({
      data: {
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password,
      },
    });
  }
  async get(userId: string): Promise<user | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  }
  async getAll(): Promise<user[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  async delete() {}
  async update() {}
}

export default UserRepository;
