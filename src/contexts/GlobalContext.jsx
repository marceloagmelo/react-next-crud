import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({children}) {
    const [visualizarHabilitado, setVisualizarHabilitado] = useState(false);

    return (
        <GlobalContext.Provider value={{visualizarHabilitado, setVisualizarHabilitado}}>
            <div>{children}</div>
        </GlobalContext.Provider>
    )
}