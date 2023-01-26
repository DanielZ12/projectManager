module.exports = {
    profile : async(req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "Perfin de usuario"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en PERFIl"
            })
        }
    }
}