import FormSingIn from "./components/inicioSesion"
import TableRegister from "./components/tableRegisters"
import { useEffect, useState } from "react"

const registersInit = JSON.parse(localStorage.getItem("registers") || "[]")
//const registersInit = [
//    {
//        id: 1,
//        email: "correo@prueba1.com",
//        password: "1234",
//        check : false,
//        password_check: "1234"
//    },
//    {
//        id: 2,
//        email: "correo@prueba3.com",
//        password: "1234",
//        check : false,
//        password_check: "1234"
//    },
//    {
//        id: 3,
//        email: "correo@prueba2.com",
//        password: "1234",
//        check : true,
//        password_check: "1234"
//    }
//]
const App = () => {
    const [registers,setRegisters] = useState(registersInit)
    useEffect(()=>{
        localStorage.setItem("registers",JSON.stringify(registers))
    },[registers])
    const addRegister = (register) => setRegisters([...registers,register])
    const deleteRegister = (id) => setRegisters(registers.filter((el) => el.id != id))
    const updateRegister = (id) => setRegisters(registers.map((el) => {
        el.check = el.id == id ? !el.check : el.check
        return el
    }))
    const orderRegisterForTerminos = (regs) =>{
        return regs.sort((a,b) => {
            if(a.check) return -1
            if(!a.check) return 1
            return 0
        })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <FormSingIn addRegister={addRegister} />
                    </div>
                    <div className="mt-5 col-12 center">
                        <TableRegister register={orderRegisterForTerminos(registers)} deleteRegister={deleteRegister} updateRegister={updateRegister}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App