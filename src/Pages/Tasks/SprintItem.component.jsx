import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SprintItem = ({ item }) => {
  const { id, desc } = item;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: id,
    data: item,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition: transition,
  };
  return (
    <div className="border border-gray-200 p-4" ref={setNodeRef}>
      <div style={style} {...listeners} {...attributes}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SprintItem;
