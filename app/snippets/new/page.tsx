import { seed } from "@/app/snipppet";
import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const snippet = await seed({ title, code });
    console.log(snippet);
    redirect("/");
  }

  return (
    <div className='container mx-auto p-12'>
      <form action={createSnippet}>
        <h3 className='font-bold m-3 text-center'>create a snippet</h3>
        <div className='flex flex-col gap-4'>
          <div className='flex   gap-4'>
            <label className='w-12' htmlFor='title'>
              Title
            </label>
            <input
              className='border w-full border-teal-500 p-2 rounded'
              type='text'
              name='title'
              id='title'
            />
          </div>
          <div className='flex   gap-4'>
            <label className='w-12' htmlFor='code'>
              Code
            </label>
            <textarea
              className='border w-full border-teal-500 p-2 rounded'
              name='code'
              id='code'
            />
          </div>
          <button className='rounded bg-teal-500 text-white p-2' type='submit'>
            create
          </button>
        </div>
      </form>
    </div>
  );
}
