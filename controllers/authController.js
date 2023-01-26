module.exports = {
    register : async (req, res) => {
        try {
            return res.status(201).json({
                ok : true,
                mge: "usuario registrado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en REGISTER"
            })
        }
        
    },
    login : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "usuario logeado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en LOGIN"
            })
        }
        
    },
    checked : async (req, res) => {
        try {
            return res.status(201).json({
                ok : true,
                mge: "usuario checkeado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en CHECKED"
            })
        }
        
    },
    sendToken : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "token enviado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en SEND-TOKEN"
            })
        }
        
    },
    verifyToken : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "token verifucado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en VERIFY-TOKEN"
            })
        }
        
    },
    changePassword : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "Password actualizado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en CHANGE-PASSWORD"
            })
        }
        
    }
}