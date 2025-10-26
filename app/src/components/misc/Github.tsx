import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

type Props = {};

export default function Github({}: Props) {
  return (
    <Link
      className="flex flex-row items-center border-white/10 py-2 px-2 ml-2 text-primary/80 transition-colors hover:text-primary"
      href="https://github.com/fabiojbg/openrouter-playground"
    >
      <BsGithub className="text-3xl" />
      <span className="text-center text-primary/80 text-sm mt-0 ml-2">
          Customized by Fabio Botelho
        </span>
    </Link>
  );
}
