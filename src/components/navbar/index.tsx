import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  return (
    <div className="flex flex-row gap-4 m-3 items-center">
      <div className="text-center w-25">
        <Link href="/">
            <h1 className="font-mono font-bold text-lg">Matthew Dumas</h1>
        </Link>
      </div>
      <div>
        <Button asChild variant='link'>
            <Link href="/resume">Resumé</Link>
        </Button>
        <Button asChild variant='link'>
            <Link href="/contact">Contact</Link>
        </Button>
        <Button asChild variant='link'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <h2>Projects</h2>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Link href="/products/lead-manager">Lead Manager</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/products/dashboard">Dashboard</Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </Button>
      </div>
    </div>
  );
}