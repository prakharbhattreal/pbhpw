import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex-col gap-2">
      <div className="max-w-3xl text-center space-y-10">
        <h1 className="text-6xl font-semibold">Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus molestias sit fugit est accusamus ducimus quod adipisci reiciendis quasi cumque. Odio dignissimos id ipsa repellat iure a assumenda nesciunt illum doloremque. Nihil minus tenetur culpa iste ab accusantium! Commodi, earum. Magnam maxime quidem non corrupti totam ex quos possimus eligendi!</p>
      </div>
      <Button>Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <ThemeToggle />
    </div>
  );
}
