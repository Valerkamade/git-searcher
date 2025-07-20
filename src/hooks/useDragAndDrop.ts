import type { Repo } from "@/components/RepoList/RepoList";
import { useRepo } from "@/hooks/useRepo";
import type { DropResult } from "@hello-pangea/dnd";
import { useState } from "react";

interface UseDragAndDropProps {
  onReorder?: (items: Repo[]) => void;
  onAddItem?: (item: Repo) => void;
  onRemoveItem?: (itemId: number) => void;
}

export const useDragAndDrop = <T extends { id: number }>({
  onReorder,
  onAddItem,
  onRemoveItem,
}: UseDragAndDropProps) => {
  const { repoList } = useRepo();
  const [draggedItem, setDraggedItem] = useState<T | null>(null);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      setDraggedItem(null);
      console.error("Drag cancelled");

      return;
    }

    const [_, itemIdStr] = draggableId.split("-");
    const itemId = parseInt(itemIdStr, 10);

    if (source.droppableId === destination.droppableId && repoList) {
      const newItems = [...repoList];
      const [movedItem] = newItems?.splice(source.index, 1);
      newItems.splice(destination.index, 0, movedItem);

      onReorder?.(newItems);
      return;
    }

    if (
      source.droppableId === "search" &&
      destination.droppableId === "favorites"
    ) {
      const itemToAdd = repoList?.find((item) => item.id === itemId);

      if (!itemToAdd) {
        console.error("Item not found: ", itemId);
        return;
      }
      onAddItem?.(itemToAdd);
      return;
    }

    if (
      source.droppableId === "favorites" &&
      destination.droppableId === "search"
    ) {
      onRemoveItem?.(itemId);
      return;
    }

    setDraggedItem(null);
  };

  return {
    draggedItem,
    setDraggedItem,
    handleDragEnd,
  };
};
