import React from "react"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { FiLogOut } from "react-icons/fi";

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const navigate = useNavigate()

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        navigate("/")

    }

    return (
        <>
            <div className="container">
                <nav className="host-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="income"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Income
                    </NavLink>
                    
                    <NavLink
                        to="vans"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Vans
                    </NavLink>

                    <NavLink
                        to="reviews"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Reviews
                    </NavLink>
                    <button className="host-logout-btn" onClick={fakeLogOut}>
                    <FiLogOut />
                    </button>
                </nav>
            </div>
            <Outlet />
        </>
    )
}