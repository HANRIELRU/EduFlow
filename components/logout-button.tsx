"use client"
import { signOut } from "next-auth/react"
import { DropdownMenuItem, DropdownMenuShortcut } from "./ui/dropdown-menu";

export default function LogoutButton() {
  return (
    <DropdownMenuItem onClick={() => signOut()}>
      Выход
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  );
}