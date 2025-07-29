"use server";

import { deleteSnippetById, updateSnippetById } from "@/app/snipppet";
import { redirect } from "next/navigation";

export async function deleteSnippet(id: string) {
  await deleteSnippetById(id);
  redirect("/");
}

//update a snippet by id
export async function updateSnippet(
  id: string,
  data: { code: string; title: string }
) {
  const updatedSnippet = await updateSnippetById(id, data);
  redirect(`/snippets/${updatedSnippet.id}`);
}