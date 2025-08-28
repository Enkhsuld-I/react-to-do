export const Input = ({ onChange, value }) => {
  return (
    <div className="flex gap-[6px]">
      <input
        value={value}
        onChange={onChange}
        type=""
        text=""
        className="bg-white rounded-[6px] border-[1px] w-[280px] h-[38px] text-black border-[#E4E4E7]"
      />
    </div>
  );
};
