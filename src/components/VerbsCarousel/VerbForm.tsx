import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const VerbForm = ({ correctValue }: { correctValue: string }) => {
  const [value, setValue] = useState("");
  const [msg, setMsg] = useState("");

  const handleClick = () => {
    setMsg(
      value.trim().toLowerCase() === correctValue.toLowerCase()
        ? "Correct 🎉"
        : "🔄 Please try again!"
    );
  };

  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2 mb-2">
        <Input
          type="text"
          placeholder="Translation"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" onClick={handleClick}>
          Test
        </Button>
      </div>
      {msg}
    </>
  );
};
