import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { verbs } from "@/configs";

type PropName = "past_simple" | "past_participle" | "translation";

const order = {
  past_simple: 0,
  past_participle: 1,
  translation: 2,
};

export const VerbsAccordion = () => {
  const [showList, setShowList] = useState<Array<PropName>>(["translation"]);
  return (
    <>
      <h1 className="text-2xl mb-5">Irregular verbs</h1>
      <ToggleGroup
        type="multiple"
        className="mb-3"
        value={showList}
        onValueChange={(values: PropName[]) => {
          if (values.length < 1) return;
          setShowList(
            values.sort((a, b) => (order[a] > order[b] ? 1 : -1)) as any
          );
        }}
      >
        <ToggleGroupItem value="past_simple">Past Simple</ToggleGroupItem>
        <ToggleGroupItem value="past_participle">
          Past Participle
        </ToggleGroupItem>
        <ToggleGroupItem value="translation">Translation</ToggleGroupItem>
      </ToggleGroup>
      <Accordion type="single" collapsible className="w-full md:w-1/2">
        {verbs.map(({ base_form, ...verbForms }) => (
          <AccordionItem key={base_form} value={base_form}>
            <AccordionTrigger>{base_form}</AccordionTrigger>
            <AccordionContent className="text-lg">
              {showList.map((prop) => verbForms[prop]).join(" / ")}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
