module.exports = {
    randomToken: (length) => {
            let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let token = "";
            let charLength = characters.length;
            for(let i = 0; i < length; i++){
                token += characters.charAt(Math.floor(Math.random() * charLength));
            }
            return token;
    }
}