import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TeamItem from "./team-item";
import { members } from "@/api/members";

const TeamArea = () => {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {members.map((item) => (
          <TeamItem key={item.id} data={item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamArea;
