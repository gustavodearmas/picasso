import ModalSmall from "../modal/modalSmall";
import ButtomBig from "../buttoms/buttomBig";

const DisableRecord = ({mutation, id, setDisable, refetch }) => {
  const disable = () => {
    mutation({ variables: {_id: id }});
    refetch();
    setDisable(false);
  };
  
  return (
    <ModalSmall>
      <span className="flex w-60 text-center mt-4">¿Estás seguro de eliminar este registro?</span>
      <div className="flex justify-center my-4">
        <ButtomBig text="Eliminar" bg="bg-red-400" onclick={()=>{disable()}} type="submit"/>
        <ButtomBig text="Cancelar" onclick={()=>{setDisable(false)}} type="button"/>
      </div>
    </ModalSmall>
  );
};

export default DisableRecord;
