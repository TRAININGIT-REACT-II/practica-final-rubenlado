import { useContext, createContext, useState, useEffect} from "react";
import { useStore} from 'react-redux';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)
    return(
        <AuthContext.Provider value={{token, setToken}}>
            {children}
       </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)

export const  useGetDefaultNote =  (noteId, authData) => {
   
    const DEFAULT_STATE = {
        title: "",
        body: "",
      };

    const [defaultFormValue, setDefaultFormValue]  = useState(DEFAULT_STATE);
        // Cargamos los valores por defecto
   
             fetch("/api/notes/" + noteId, {
                method: "GET",
                headers: {
                  apitoken: authData.auth.token,
                  "Content-Type": "application/json",
                },
              })
                .then((res) => res.json())
                .then((formValues) => {
                  console.log(formValues)
                   setDefaultFormValue(formValues);
                });


          console.log(defaultFormValue)

          return defaultFormValue;

}

export const useModal = () => {
     // store which has been selected
  const [selected, setSelected] = useState('');
  const [isShowing, setIsShowing] = useState(false);

  const open = (id) => {
    setSelected(id);
    setIsShowing(true);
  };

  const close = () => {
    setSelected(null);
    setIsShowing(false);
  };

  return {
    isShowing,
    open,
    close,
    selected
  };
  

}