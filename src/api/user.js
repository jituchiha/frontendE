export const register = async (email,phone,firstname,lastname,password) =>{

    const user ={email,phone,firstname,lastname,password};

    try{
        const res =await fetch(`${process.env.REACT_APP_API_URL}/register`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        return await res.json();

    } catch(err) {

        throw new Error(`Cannot register at this time. ${err}`);

    }

};

export const login = async (email,password) =>{

    const user ={email,password};
    
    try{
        const res =await fetch(`${process.env.REACT_APP_API_URL}/login`,{
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });

        return await res.json();

    } catch(err) {

        throw new Error(`Cannot login at this time. ${err}`);

    }

};

export const verified = async (email, password) => {
    const loggedin = await login(email, password);
    console.log(loggedin)
    if (loggedin.message == 'Login Successful') {
        return true
     }
     else {
        return false
     }    

}


export const logout = async () =>{
    try {
        const res = await fetch (`${process.env.REACT_APP_API_URL}/logout`,{
            method:"GET",
            credentials: "include",
        });

        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

export const getUser = async () =>{
    try {
        const res = await fetch (`${process.env.REACT_APP_API_URL}/user`,{
            method:"GET",
            credentials: "include",
        });

        return await res.json();
    } catch (err) {
        throw new Error("Please login to continue");
    }
};