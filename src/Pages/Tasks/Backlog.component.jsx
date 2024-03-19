import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Backlog = () => {
  return (
    <div className="container my-auto flex justify-center py-8 mx-auto bg-gray-50">
      <div className="w-full  bg-white rounded-lg shadow-md sm:max-w-2xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Backlog</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.<br/>Yes. It adheres to the WAI-ARIA design pattern</AccordionContent>
            
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Backlog;
