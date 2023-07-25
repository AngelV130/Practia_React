const registerElement = ({register,deleteRegister,updateRegister}) => {
    const {id,email,check,password} = register
    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div className="row">
                    <div className="">
                    <h5 className="">{email}</h5>
                    <p>{password}</p>
                    <div className="d-flex gap-2">
                    <button className="btn btn-outline-warning btn-sm m-1" onClick={()=>updateRegister(id)}>Editar</button>
                    <button className="btn btn-outline-danger btn-sm m-1" onClick={()=>deleteRegister(id)}>Eliminar</button>
                    </div>
                    </div>
                </div>
                {check && <span className="badge rounded-pill bg-success">Terminos Aceptado</span>}
            </div>
        </li>
    )
}
/* */
export default registerElement