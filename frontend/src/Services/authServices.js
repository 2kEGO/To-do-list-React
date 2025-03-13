import Cookies from 'js-cookie';

export const RegisterUser = async(user, pwd, setAccountCreated) => {
    try {
        const res = await fetch('http://localhost:8000/api/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: user, password: pwd}),
        });


        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if(!data){
            console.log('No data from server');
            return;
        }

        console.log(data);
        setAccountCreated(true);

    } catch (error) {
        console.error(error)
    }
}

export const LoginUser = async(user, pwd, setAuth) => {
    try {
        const res = await fetch('http://localhost:8000/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: user, password: pwd}),
        });

        if(!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (!data){
            console.log('No data from server');
            return;
        }
        
        const token = data.token;
        setAuth(true);

        //Store values in cookies
        Cookies.set('token', token, { expires: 7 });
        Cookies.set('username', user, { expires: 7 });
        
        return true;
    
    }
    catch(err){
        console.error('Failed to fetch data from the API', err);
        return false;
    }    
}

export const UpdateUserInfo = async(token, username, password, email) => {

    try {
        const res = await fetch('http://localhost:8000/api/update-user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({username: username, password: password, email: email}),
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (!data){
            console.log('No data from server');
            return null;
        }

        console.log(data)
        return true;


    } catch (error) {
        console.error('Failed to fetch data from the API', error)
    }
}