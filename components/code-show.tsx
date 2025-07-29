"use client";
import { Editor } from "@monaco-editor/react";
import React from "react";
import { Snippet } from "@prisma/client";
import { updateSnippet } from "@/actions";
import Link from "next/link";

export default function CodeShow({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = React.useState(snippet?.code);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
  };

  return (
    <div className='container mx-auto p-12'>
      <div className='flex items-center justify-between p-4'>
        <h1 className='text-lg font-bold'>{snippet?.title}</h1>
      </div>
      <Editor
        height={200}
        language='javascript'
        theme='vs-dark'
        options={{
          minimap: { enabled: false },
          fontSize: 14,
        }}
        defaultValue={snippet?.code}
        onChange={handleEditorChange}
      />
      <button
        className='mt-2 border border-teal-500 p-2 rounded'
        onClick={() => updateSnippet(snippet.id, { ...snippet, code })}
      >
        save
      </button>{" "}
      <Link
        href={`/snippets/${snippet.id}`}
        className='mt-2 border border-teal-500 p-2 rounded'
      >
        cancel
      </Link>
    </div>
  );
}
