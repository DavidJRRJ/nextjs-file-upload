"use server";

import { prisma } from "@/db";
import fs from "fs";
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

export async function createUser(formData: FormData) {
  const validatedFields = userSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email } = validatedFields.data;

  const imageFile = formData.get("image") as File;

  const buffer = await imageFile.arrayBuffer();
  const imageBuffer = Buffer.from(buffer);

  const filePath = imageFile.name;

  try {
    await fs.promises.writeFile(`public/${filePath}`, imageBuffer);
    await prisma.user.create({
      data: {
        name,
        email,
        filePath: filePath,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getUsers() {
  const users = await prisma.user.findMany();

  return users;
}
