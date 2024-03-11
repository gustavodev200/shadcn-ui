"use client";

import { Member } from "@/types/members";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamCombobox } from "./team-combobox";

type Props = {
  data: Member;
};

const TeamItem = ({ data }: Props) => {
  const [role, setRole] = useState(data.role);
  return (
    <div className="flex items-center gap-4">
      <div>
        <Avatar>
          <AvatarImage src={data.avatar} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 ">
        <div>{data.name}</div>
        <div className="text-sm text-muted-foreground">{data.email}</div>
      </div>
      <div>
        <TeamCombobox value={role} setValue={setRole} />
      </div>
    </div>
  );
};

export default TeamItem;
