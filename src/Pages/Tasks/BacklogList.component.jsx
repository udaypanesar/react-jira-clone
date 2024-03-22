import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CreateTask from "./CreateTask.component";
//import { useSelector } from "react-redux";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import BacklogItem from "./BacklogItem.component";
//import { ChevronsUp } from "lucide-react";

const BacklogList = ({ tasks }) => {
  //const taskList = useSelector((state) => state.Task.data);
  //console.log("tasks are:", tasks);
  const { setNodeRef } = useDroppable({
    id: 0,
  });

  return (
    <div className="rounded-md pb-20 pl-2" ref={setNodeRef}>
      <SortableContext strategy={verticalListSortingStrategy} items={tasks}>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1" className="border-0">
            <div className="flex w-full items-center justify-between text-sm ">
              <AccordionTrigger>Backlog</AccordionTrigger>
              <div className="flex items-center gap-x-2 py-2">
                {/* <span className="flex h-4 w-fit items-center justify-center rounded-full px-2 text-xs font-semibold text-black">3</span> */}
                <CreateTask />
              </div>
            </div>
            <AccordionContent>
              {tasks.map((item) => {
                return <BacklogItem key={item.id} item={item} />;
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SortableContext>
    </div>
  );
};

export default BacklogList;
