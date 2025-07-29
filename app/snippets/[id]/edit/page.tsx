import { getSnippetById } from "@/app/snipppet";
import { notFound } from "next/navigation";
import React from "react";
import CodeShow from "@/components/code-show";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const snippet = await getSnippetById(id);
  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <CodeShow snippet={snippet} />
    </div>
  );
}
