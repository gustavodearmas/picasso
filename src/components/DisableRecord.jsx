import ModalSmall from "./modal/modalSmall";
import ButtomBig from "./buttoms/buttomBig";

const DisableRecord = ({mutation, id, setDisable }) => {
  const disable = () => {
    mutation({ variables: {_id: id }});
    setDisable(false);
  };
  
  return (
    <ModalSmall>
      <span className="flex w-60 text-center mt-4">¿Estás seguro de eliminar este registro?</span>
      <div className="flex justify-center my-4">
        <ButtomBig text="Eliminar" bg="bg-red-400" onclick={()=>{disable()}}/>
        <ButtomBig text="Cancelar" onclick={()=>{setDisable(false)}}/>
      </div>
    </ModalSmall>
  );
};

export default DisableRecord;
