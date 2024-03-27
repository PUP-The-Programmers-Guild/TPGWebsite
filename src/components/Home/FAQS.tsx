import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/base/Accordion";
import { Plus } from "@phosphor-icons/react";
import { IFAQSComponent } from "@/lib/types/faq.interface";

export default function FAQS(props: IFAQSComponent) {
  return (
    <section id="faqs" className="bg-[#052014] py-[4.375rem] text-[#E6F5D6]">
      <div className="mx-auto max-w-[960px] space-y-10">
        <h2 className="font-title text-6xl font-bold leading-[84px]">FAQs</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {props.faqs?.map((question, index) => (
            <AccordionItem
              key={`${question.id}`}
              value={index.toString()}
              className="space-y-7 bg-[#123D16] p-7 [&[data-state=open]]:bg-[linear-gradient(175deg,_#123D16_25.08%,_rgba(153,_212,_78,_0.8)_358.54%)]"
            >
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
