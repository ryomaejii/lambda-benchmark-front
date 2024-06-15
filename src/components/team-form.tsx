"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function TeamForm() {
  const team = localStorage.getItem("team") ?? "";
  const [alreadyTeamSet, setAlreadyTeamSet] = useState(team !== "");
  const [teamInput, setTeamInput] = useState(team);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (alreadyTeamSet) {
      setAlreadyTeamSet(false);
    } else {
      localStorage.setItem("team", teamInput);
      setAlreadyTeamSet(true);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Team Setting</h2>
      <form onSubmit={onSubmit} className="flex gap-x-4">
        <Input
          value={teamInput}
          onChange={onChange}
          placeholder="Team Name"
          disabled={alreadyTeamSet}
        />
        {alreadyTeamSet ? (
          <Button variant="outline">Edit</Button>
        ) : (
          <Button>Save</Button>
        )}
      </form>
    </div>
  );
}
