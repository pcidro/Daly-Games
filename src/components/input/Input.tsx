"use client";

import { useRouter } from "next/navigation";
import { SubmitEventHandler, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (input === "") return;

    router.push(`/game/search/${input}`);
  };

  return (
    <form
      className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
      onSubmit={handleSearch}
    >
      <input
        value={input}
        className="bg-slate-200 outline-none w-11/12"
        type="text"
        onChange={({ target }) => setInput(target.value)}
        placeholder="Procurando algum jogo?"
      />
      <button className="cursor-pointer" type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
