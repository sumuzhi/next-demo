export const dynamic = "force-dynamic";
import Link from "next/link";
import React from "react";
import { getSnippets } from "./snipppet";
export default async function Page() {
  const snippets = await getSnippets();

  return (
    <div className='container mx-auto p-12'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-lg'>Snippets</h1>
        <Link
          className='p-2 border border-teal-500 rounded'
          href='/snippets/new'
        >
          Create a new snippet
        </Link>
      </div>
      <div className='flex flex-col gap-2 mt-4'>
        {/* Render the snippets here */}
        {snippets.map((snippet) => (
          <Link
            key={snippet.id}
            href={`/snippets/${snippet.id}`}
            className='flex items-center justify-between border border-teal-500 p-2 rounded'
          >
            <span>{snippet.title}</span>
            <span>view</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
