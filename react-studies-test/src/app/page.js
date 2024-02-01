import { ToDoList } from "@/components/ToDoList";
import PrintName from "@/components/PrintName";

export default function Home() {
  return (
    <div>
      <PrintName />
      <h1 className="m-8 font-bold">Todo List</h1>
      <ToDoList />
    </div>
  );
}
