import { Todo_tasks } from "./Todo_tasks";

export const Input = ({ onChange, value, onKeyDown }) => {
  return (
    <div className="flex gap-[6px]">
      <input
        onKeyDown={onKeyDown}
        value={value}
        onChange={onChange}
        type=""
        text=""
        className="bg-white rounded-[6px] border-[1px] w-[280px] h-[38px] text-black border-[#E4E4E7]"
      />
    </div>
  );
};
