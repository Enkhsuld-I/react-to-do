export const Button2 = ({ backgroundColor, title, color }) => {
  return (
    <div>
      <button
        className="py-1 px-3 rounded-md  "
        style={{ backgroundColor, color }}
      >
        {title}
      </button>
      ;
    </div>
  );
};
