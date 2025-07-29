import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seed(data: { code: string; title: string }) {
  return prisma.snippet.create({ data });
}

// find all snippets
export async function getSnippets() {
  return prisma.snippet.findMany();
}

// find a snippet by id
export async function getSnippetById(id: string) {
  return prisma.snippet.findUnique({ where: { id } });
}

//delete a snippet by id
export async function deleteSnippetById(id: string) {
  return prisma.snippet.delete({ where: { id } });
}

//update a snippet by id
export async function updateSnippetById(
  id: string,
  data: { code: string; title: string }
) {
  return prisma.snippet.update({
    where: { id },
    data,
  });
}
