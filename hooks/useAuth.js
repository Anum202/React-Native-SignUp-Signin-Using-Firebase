import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from '../config/firebaseAuth';

const useAuth = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            if(user){
                console.log('Users got: ', user);
                setUser(user);
            }
            else{
                setUser(null);
            }
        });
        return unsub;
    },[])

    return { user };
}
export default useAuth;
