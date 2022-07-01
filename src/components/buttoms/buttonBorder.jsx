const ButtonBorder = ({text, icon, cssAdd, type,  onclick=()=>{}}) => {
  return (
    <button className={`flex rounded-md text-md ${cssAdd}`} onClick={onclick} type={type}>
      <div className="flex flex-row justify-center items-center ">
        <i className={icon}></i>
        <span>{text}</span>
      </div>
    </button>
  );
};

export default ButtonBorder;
