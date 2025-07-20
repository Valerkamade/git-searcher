import { useRepo } from "@/hooks/useRepo";
import type { DropResult } from "@hello-pangea/dnd";
import { useState } from "react";

interface UseDragAndDropProps<T> {
  onReorder?: (items: T[]) => void;
  onAddItem?: (item: T) => void;
  onRemoveItem?: (itemId: number) => void;
  itemList: T[];
}

export const useDragAndDrop = <T extends { id: number }>({
  onReorder,
  onAddItem,
  onRemoveItem,
  itemList,
}: UseDragAndDropProps<T>) => {
  const [items, setItems] = useState<T[]>(itemList);
  const { repoList, filteredList, setFilteredList } = useRepo();
  const [draggedItem, setDraggedItem] = useState<T | null>(null);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      setDraggedItem(null);
      return;
    }

    const [_, itemIdStr] = draggableId.split("-");
    const itemId = parseInt(itemIdStr, 10);

    if (
      source.droppableId === destination.droppableId &&
      source.droppableId === "favorites"
    ) {
      const newItems = [...items];
      const [movedItem] = newItems?.splice(source.index, 1);

      if (!movedItem) {
        console.error("Item not found at index", source.index);
        return;
      }

      newItems.splice(destination.index, 0, movedItem);
      setItems(newItems);
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

      const updatedFilteredList = filteredList?.filter(
        (item) => item.id !== itemId,
      );

      // @ts-ignore
      setItems((prev) => [...prev, itemToAdd]);

      // @ts-ignore
      onAddItem?.(itemToAdd);
      setFilteredList(updatedFilteredList ?? []);
      return;
    }

    if (
      source.droppableId === "favorites" &&
      destination.droppableId === "search"
    ) {
      const itemToRemove = repoList?.find((item) => item.id === itemId);

      if (!itemToRemove) {
        console.error("Item not found in favorites:", itemId);
        return;
      }

      setItems((prev) => prev?.filter((item) => item.id !== itemId));
      onRemoveItem?.(itemId);
      setFilteredList([...(filteredList || []), itemToRemove]);
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
