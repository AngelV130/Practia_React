import Swal from 'sweetalert2'
import { useState } from "react"
import "../styles/signIn.css"

const formSingIn = ({addRegister}) => {
    const [signIn,setSingIn] = useState({
        email: "angel@gmail.com",
        password: "1234",
        check : false,
        password_check: "1234"
    })
    const [error,setError] = useState(false)
    //Obtener Data
    const {email,password,password_check,check} =  signIn
    const chnageForm = (e) => {
        setSingIn({...signIn,[e.target.name]:(e.target.type == 'checkbox') ? e.target.checked : e.target.value})
        if(email.trim() && password_check.trim() && password.trim())
            setError(false)
    }
    
    const eventSubmit = (e) =>{
        e.preventDefault()
        //Validar Data
        if(!email.trim() || !password_check.trim() || !password.trim())
            return Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Algunos campos estan vacios Rellene todos los campos',
            })
        if(password_check != password)
            return Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Las contraseñas son diferentes...',
            })
        setError(false)
        //Enviar Data
        addRegister({
            id:Date.now(),
            ...signIn
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro Incertado',
            showConfirmButton: false,
            timer: 1500
        })
    }
        return (
        <>
            <div className="register-photo">
                <div className="form-container">
                    <div className="image-holder"></div>
                    <form method="post" onSubmit={eventSubmit}>
                        <h2 className="text-center">
                            <strong>Create</strong> 
                            <p>an account.</p>
                        </h2>
                        <div className="form-group">
                            <input className="form-control" onChange={chnageForm} value={email} type="email" name="email" placeholder="Email"/></div>
                        <div className="form-group">
                            <input className="form-control" onChange={chnageForm} value={password} type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" onChange={chnageForm} value={password_check} type="password" name="password_check" placeholder="Password (repeat)"/>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name="check"
                                    onChange={chnageForm} checked={check}/>
                                    I agree to the license terms.
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
                        </div>
                        <a href="#" className="already">You already have an account? Login here.</a>
                        <p>{error && "Rellene todos los campos"}</p>
                        </form>
                </div>
            </div>
        </>
    )
}

export default formSingIn