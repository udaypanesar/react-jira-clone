import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CreateTask from "./CreateTask.layout";
import { useSelector } from "react-redux";
import { ChevronsUp } from "lucide-react";

const Backlog = () => {
  const taskList = useSelector((state) => state.Task.data);
  return (
    <>
    <div className="rounded-md pb-20 pl-2">
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-0">
        <div className="flex w-full items-center justify-between text-sm ">
          <AccordionTrigger>Sprint-1</AccordionTrigger>
        </div>
        <AccordionContent>
          <div className="border">
            <p>This is item1</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>



    <div className="rounded-md pb-20 pl-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-0">
          <div className="flex w-full items-center justify-between text-sm ">
            <AccordionTrigger>Backlog</AccordionTrigger>
            <div className="flex items-center gap-x-2 py-2">
              {/* <span className="flex h-4 w-fit items-center justify-center rounded-full px-2 text-xs font-semibold text-black">3</span> */}
              <CreateTask />
            </div>
          </div>
          <AccordionContent>
            {Array.isArray(taskList) &&
              taskList.map((item) => {
                return (
                  <>
                    <div className="border-[0.3px] divide-y">
                      <div className="bg-white group flex  max-w-full items-center justify-between  px-3 py-1.5 text-sm hover:bg-gray-50">
                        <div className="flex w-fit items-center gap-x-2">
                          <div className="rounded-sm  p-0.5 text-sm text-white h-fit bg-bug">
                            <ChevronsUp color="red" />
                            <span>{item.uType}</span>
                          </div>
                          <div className="w-full overflow-x-hidden">
                            <p className="truncate py-1.5 hover:cursor-pointer hover:underline">{item.uSummary}</p>
                          </div>
                        </div>
                        <div className="relative ml-2 flex min-w-fit items-center justify-end gap-x-2">
                          <span>{item.uTeamMember}</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    </>
  );
};

export default Backlog;
