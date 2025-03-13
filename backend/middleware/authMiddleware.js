import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({msg: 'Token not found'});
        }

        try {
            const decode = jwt.verify(token, process.env.VITE_SECRET_KEY);
            req.user = decode;
            console.log(req.user);
            next();
            
        } catch (error) {
            console.error('Error fetching user info:', error);
            res.status(500).json({msg: "Token is not valid"});
        }
    } 
}

export default verifyToken;