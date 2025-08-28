export const Button1 = ({ onClick }) => {
  return (
    <div>
      <button
        className="bg-[#3C82F6] rounded-[6px] py-2 px-3"
        onClick={onClick}
      >
        Add
      </button>
    </div>
  );
};
