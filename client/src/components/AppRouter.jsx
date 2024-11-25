import { useContext } from 'react'
import { Route, Routes } from "react-router-dom"
import { AuthContext } from '../context'
import { privateRoutes, publicRoutes } from '../router/router'
import Characters from '../pages/Characters/Characters'
import Login from '../pages/Login/Login'

function AppRouter() {
    const { isAuth } = useContext(AuthContext)
    return (
        <>
            {
                isAuth
                    ?
                    <Routes>
                        {
                            privateRoutes.map(route =>
                                <Route key={route.path} path={route.path} element={route.component} />
                            )
                        }

                        <Route path="*" element={<Characters />} />
                    </Routes>
                    :
                    <Routes>
                        {
                            publicRoutes.map(route =>
                                <Route key={route.path} path={route.path} element={route.component} />
                            )
                        }

                        <Route path="*" element={<Login />} />
                    </Routes>

            }
        </>
    )
}
export default AppRouter