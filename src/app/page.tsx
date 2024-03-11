import CardMembers from "@/components/card-members";
import ErrorMessage from "@/components/error-message";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
      <CardMembers />
      <ThemeToggle />
    </div>
  );
}
