import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/base/Accordion";
import { Minus, Plus } from "@phosphor-icons/react";

const questions = [
  {
    title: "Can I join TPG?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Question",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Question",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }
];

export default function FAQS() {
  return (
    <section className="bg-[#7E7272] py-[4.375rem] text-white">
      <div className="mx-auto max-w-[960px] space-y-10">
        <h2 className="font-title text-6xl font-bold">FAQs</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={index.toString()} className="space-y-7 bg-[#5A5555] p-7">
              <AccordionTrigger className="font-heading text-[2.16506rem] font-bold [&[data-state=open]>#minus]:block [&[data-state=open]>#plus]:hidden">
                {question.title}
                <Plus id="plus" weight="bold" />
                <Minus id="minus" weight="bold" className="hidden" />
              </AccordionTrigger>
              <AccordionContent className="font-body text-xl">{question.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
