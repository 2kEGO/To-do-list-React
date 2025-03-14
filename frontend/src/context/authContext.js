import { createContext } from "react";


const AuthContext = createContext({
  profile: false,
  setProfile: () => {},
});

export default AuthContext;
