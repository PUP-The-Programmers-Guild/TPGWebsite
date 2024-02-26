import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/base/Accordion";
import { Minus, Plus } from "@phosphor-icons/react";

const questions = [
  {
    title: "How to join?",
    description:
      "Check out our Facebook Page when the next wave of the membership applications will occur. Usually we have 2, one before or during the first semester and the second is before or during the second semester.",
  },
  {
    title: "What is TPG?",
    description:
      "The PUP Programmers' Guild (PUP-TPG) is a non-academic organization of the Polytechnic University of the Philippines, open to all colleges of the PUP System. We hold various events and activities linked to the fields of programming and development that focuses on competing and enriching students knowledge and abilities when it comes to computer and information technology-related fields.",
  },
  {
    title: "Who can apply for TPG?",
    description:
      "Qualifications is that you must be currently enrolled and a bonifide student at any of the PUP main and branches. Any course or year level can join, as long as you have a passion or interest for programming.",
  },
  {
    title: "For partnerships and sponsorship, who can I contact?",
    description: "Please email us at puptpg.partnership@gmail.com, we'd love to collaborate with you.",
  },
];

export default function FAQS() {
  return (
    <section className="bg-[#7E7272] py-[4.375rem] text-white">
      <div className="mx-auto max-w-[960px] space-y-10">
        <h2 className="font-title text-6xl font-bold leading-[84px]">FAQs</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={index.toString()} className="space-y-7 bg-[#5A5555] p-7">
              <AccordionTrigger className="text-start font-heading text-[36px] font-bold [&[data-state=open]>#plus]:rotate-45">
                <span>{question.title}</span>
                <Plus id="plus" weight="bold" className="transition duration-300" />
              </AccordionTrigger>
              <AccordionContent className="font-body text-xl leading-[24px]">{question.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
