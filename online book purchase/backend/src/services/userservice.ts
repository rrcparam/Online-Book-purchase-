import { prisma } from "../prisma";

export const userService = {
  async getOrCreateByClerkId(clerkId: string) {
    return prisma.user.upsert({
      where: { clerkId },
      update: {},
      create: { clerkId },
    });
  },
};