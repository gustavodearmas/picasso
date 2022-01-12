const ButtonBorder = ({text, icon, cssAdd, type,  onclick=()=>{}}) => {
  return (
    <button className={`border border-gray-200 rounded text-xxs ${cssAdd}`} onClick={onclick} type={type}>
      <div className="flex flex-row px-2 py-1 items-center ">
        <i className={icon}></i>
        <span>{text}</span>
      </div>
    </button>
  );
};

export default ButtonBorder;
