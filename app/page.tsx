"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-2">
      <h1>Home Page</h1>
      <Button onClick={() => toast.info("Hello")}>Click me</Button>
    </div>
  );
}
