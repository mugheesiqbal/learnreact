import { createContext,useContext } from "react";
export const ThemeContext =createContext({
    ThemeMode:"dark",
    darkThem:()=>{},
    lighTheme:()=>{}
})
export const ThemeProvider=ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}