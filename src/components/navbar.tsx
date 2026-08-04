import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-end">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
