import CardMembers from "@/components/team/team-area";
import ErrorMessage from "@/components/error-message";
import { ThemeToggle } from "@/components/theme-toggle";
import TeamArea from "@/components/team/team-area";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
      <TeamArea />
      <ThemeToggle />
    </div>
  );
}
