import { getSnippetById } from "@/app/snipppet";
import SnippetDelButton from "@/components/snippet-del-button";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // await sleep(3000); // Simulate a delay for loading state
  const snippet = await getSnippetById(id);
  if (!snippet) {
    return notFound();
  }
  return (
    <div className='container mx-auto p-12'>
      {/* 回到首页 */}
      <Link className='text-teal-500 hover:underline' href='/'>
        &larr; Back to Home
      </Link>
      <div className='flex items-center justify-between p-4  '>
        <h1 className='text-lg font-bold'>{snippet?.title}</h1>
        <div className='flex items-center gap-2'>
          <Link
            className='p-2 border border-teal-500 rounded'
            href={`/snippets/${snippet?.id}/edit`}
          >
            Edit
          </Link>
          <SnippetDelButton id={id} />
        </div>
      </div>
      <pre className='mt-4 bg-gray-100 border border-teal-500 p-4 rounded '>
        <code className='text-sm whitespace-pre-wrap'>{snippet?.code}</code>
      </pre>
    </div>
  );
}
