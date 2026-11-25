import { PrismaClient, user } from "@prisma/client";

const prisma = new PrismaClient();

class UserRepository {
  async create() {}
  async get(userId: string) :Promise<user | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  }
  async getAll() :Promise<user []> {
    const users = await prisma.user.findMany();
    return users;
  }

  async delete() {}
  async update() {}
}

export default UserRepository;
