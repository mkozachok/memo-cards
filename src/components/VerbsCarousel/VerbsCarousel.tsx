import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { verbs } from "@/configs";
import { VerbForm } from "./VerbForm";

export function VerbsCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {verbs.map(({ base_form, translation }) => (
          <CarouselItem key={base_form}>
            <div className="p-1">
              <Card>
                <CardContent className="aspect-square items-center justify-center p-6">
                  <div className="text-2xl font-semibold mb-2">{base_form}</div>
                  <VerbForm correctValue={translation} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
