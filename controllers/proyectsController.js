module.exports = {
    list : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "Lista de Proyectos"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en PROJECTS-LIST"
            })
        }
        
    },
    store : async (req, res) => {
        try {
            return res.status(201).json({
                ok : true,
                mge: "Proyecto guardado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en STORE"
            })
        }
        
    },
    detail : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "Detalle del proyecto"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en PROJECT-DETAIL"
            })
        }
        
    },
    update : async (req, res) => {
        try {
            return res.status(201).json({
                ok : true,
                mge: "PRoyecto actualizado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en PROJECT-UPDATE"
            })
        }
        
    },
    remove : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "Proyecto eliminado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en PROJECT-REMOVE"
            })
        }
        
    },
    addCollaborator : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "Colaborador agregado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en COLLABORATOR-ADD"
            })
        }
        
    },
    removeCollaborator : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "Colaborador eliminadp"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en COLLABORATOR-REMOVE"
            })
        }
        
    }
}