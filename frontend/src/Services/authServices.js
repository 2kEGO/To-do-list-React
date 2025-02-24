import Cookie from 'js-cookie';

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

export const LoginUser = async(user, pwd) => {
    try {
        const res = await fetch('http://localhost:8000/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user, pwd}),
        });

        const data = await res.json();

        if(!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        console.log(data);
        return true
    }
    catch{
        console.error('Failed to fetch data from the API')
        return false
    }    
}