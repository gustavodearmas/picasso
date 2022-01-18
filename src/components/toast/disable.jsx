import AvatarImage from "../../images/no-avatar.png";
const DisableRecord = ({ title, photo, message, onClick }) => {
  return (
    <div className="max-w-md w-full pointer-events-auto flex">
      <div className="flex-1 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img className="h-10 w-10 rounded-full" src={AvatarImage} alt="" />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={onClick}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-500 hover:text-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default DisableRecord;
