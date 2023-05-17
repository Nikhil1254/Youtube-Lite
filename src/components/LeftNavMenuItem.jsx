/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const LeftNavMenuItem = ({ text, icon, action, className }) => {
  return (
    <div
      className={
        className +
        " text-white h-10 text-sm cursor-pointer flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]"
      }

      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
