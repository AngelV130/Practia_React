import RegisterElement from "./registerElement"
const tableRegisters = ({register,deleteRegister,updateRegister}) => {
    return (
        <>
        <div className="mt-5">
        <h5 className="text-center">Lista de Registros</h5>
            <ul className="list-group">
                {
                    register.map((el)=>{
                        return <RegisterElement updateRegister={updateRegister} key={el.id} register={el} deleteRegister={deleteRegister}/>
                    })
                }
                {register.length == 0 && <li className="list-group-item text-center">No hay Registros Actualmente</li>}
            </ul>
        </div>
        </>
    )
}
export default tableRegisters