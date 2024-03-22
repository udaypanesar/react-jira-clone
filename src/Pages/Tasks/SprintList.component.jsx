import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SprintItem from "./SprintItem.component";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

const SprintList = ({ id, name, tasks }) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div className="rounded-md pb-20 pl-2 border border-blue-500" ref={setNodeRef}>
      <SortableContext strategy={verticalListSortingStrategy} items={tasks}>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1" className="border-0">
            <div className="flex w-full items-center justify-between text-sm ">
              <AccordionTrigger>{name}</AccordionTrigger>
            </div>
            <AccordionContent>
              {tasks.map((item) => (
                <SprintItem key={item.id} item={item} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SortableContext>
    </div>
  );
};

export default SprintList;
