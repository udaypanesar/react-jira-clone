import { DndContext, closestCorners } from "@dnd-kit/core";
import BacklogList from "./BacklogList.component";
import SprintList from "./SprintList.component";
import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

const Backlog = () => {
  const getPosition = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    console.log("Active is", active);
    console.log("Over is", over);

    //CASE 0 :- When card is moved to same place
    if (active.id === over.id) return;

    if (active.id !== over.id) {
      //Need to move task to empty bucket
      if (over.data.current === undefined) {
        console.log("Inside case1 :- Empty bucket");
        setTask(
          tasks.map((item) => {
            return item.id === active.id ? { ...item, sprintId: over.id } : item;
          })
        );
      }
      //Need to move task to new bucket
      else if (active.data?.current?.sprintId !== over.data?.current?.sprintId) {
        console.log("Inside case2 :- New bucket");
        setTask(
          tasks.map((item) => {
            return item.id === active.id ? { ...item, sprintId: over.data?.current?.sprintId } : item;
          })
        );
      }
      //Need to sort task in same bucket
      else if (active.data?.current?.sprintId === over.data?.current?.sprintId) {
        console.log("Inside Case3 :- Sort");
        setTask((tasks) => {
          const oldPos = getPosition(active.id);
          const newPos = getPosition(over.id);
          console.log("old/new position", oldPos, newPos);
          return arrayMove(tasks, oldPos, newPos);
        });
      }

      console.log("Tasks", tasks);
    }
  };

  const task = [
    {
      id: 1,
      desc: "This is item1",
      sprintId: 0,
    },
    {
      id: 2,
      desc: "This is item2",
      sprintId: 10,
    },
    {
      id: 3,
      desc: "This is item3",
      sprintId: 10,
    },
    {
      id: 4,
      desc: "This is item4",
      sprintId: 20,
    },
    {
      id: 5,
      desc: "This is item5",
      sprintId: 20,
    },
    {
      id: 6,
      desc: "This is item6",
      sprintId: 0,
    },
  ];

  const sprint = [
    {
      id: 10,
      name: "sprint-1",
      issues: [],
    },
    {
      id: 20,
      name: "sprint-2",
      issues: [],
    },
  ];

  const [tasks, setTask] = useState(task);
  const [sprints] = useState(sprint);

  return (
    <>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        {sprints.map((item) => (
          <SprintList key={item.id} name={item.name} id={item.id} tasks={tasks.filter((task) => task.sprintId === item.id)} />
        ))}
        <BacklogList tasks={tasks.filter((item) => item.sprintId == 0)} />
      </DndContext>
    </>
  );
};

export default Backlog;
