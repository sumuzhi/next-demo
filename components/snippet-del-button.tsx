"use client";
import { deleteSnippet } from "@/actions";

import React, { startTransition } from "react";

export default function SnippetDelButton({ id }: { id: string }) {
  const handleDelete = () => {
    startTransition(async () => {
      await deleteSnippet(id);
    });
  };

  return (
    <button
      className='p-2 border border-teal-500 rounded'
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
