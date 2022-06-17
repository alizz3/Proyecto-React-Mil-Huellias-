import React from 'react';
import { Link } from 'react-router-dom';
import './FormularioLogin.css';
import logo from '../header/img/logo.png';
import { Formik } from 'formik';

function FormularioLogin() {
    return (
        <>
            <body className='html-login'>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2 className="active underlineHover">Sign In </h2>

                        <div className="fadeIn first">
                            <Link to="/home">
                                <img src={logo} id="icon" alt="logo mil huellitas" />
                            </Link>
                        </div>

                        <Formik
                            initialValues={{
                                correo: '',
                                password: '',
                            }}
                            validate={(valores) => {
                                let errores = {}

                                if (!valores.correo) {
                                    errores.correo = 'por favor ingresa tu dirección de correo '
                                    console.log('erro amix')
                                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                                    errores.correo = 'Por favor ingrese un correo Valido ejemplo@ejemplo.com'
                                }


                                if (!valores.password) {
                                    errores.password = 'por favor ingresa la contraseña'
                                    console.log('erro amix')
                                } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.password)) {
                                    errores.password = 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula'
                                }

                                if (valores.correo === "milhuellitas@gmail.com" && valores.password === "Milhuellitas3.") {
                                    window.location = "home";
                                }
                                else {
                                    errores.submit = 'usuario no registrado'
                                }



                                return errores;
                            }}

                            onSubmit={(valores) => {

                                if (valores.correo == "milhuellitas@gmail.com" && valores.password === "Milhuellitas3.") {
                                    window.location = "home";
                                }

                            }}
                        >
                            {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => (
                                <form className='formLogin' onSubmit={handleSubmit}>
                                    <label htmlFor='correo' />
                                    <input type="email"
                                        id="correo"
                                        className="fadeIn second"
                                        name="correo"
                                        placeholder="email"
                                        value={values.correo}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}


                                    <label htmlFor='password' />
                                    <input type="password"
                                        id="password"
                                        className="fadeIn third"
                                        name="password"
                                        placeholder="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {touched.password && errors.password && <div className="error">{errors.password}</div>}


                                    {touched.submit && errors.submit && <div className="error">{errors.submit}</div>}

                                    <input type="submit"
                                        id='submit'
                                        name='submit'
                                        className="fadeIn fourth"
                                        value="Log In"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />

                                </form>
                            )}

                        </Formik>

                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>

                    </div>
                    <h5>Login de uso exclusivo para administradores</h5>
                </div>
            </body>
        </>
    )
}

export default FormularioLogin