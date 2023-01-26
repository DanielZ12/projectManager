module.exports = {
    list : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "Lista de Tareas"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en TASK-LIST"
            })
        }
        
    },
    store : async (req, res) => {
        try {
            return res.status(201).json({
                ok : true,
                mge: "Tarea guardado"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en STORE-TASK"
            })
        }
        
    },
    detail : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "Detalle de la tarea"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en TASK-DETAIL"
            })
        }
        
    },
    update : async (req, res) => {
        try {
            return res.status(201).json({
                ok : true,
                mge: "tarea actualizada"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en TASK-UPDATE"
            })
        }
        
    },
    remove : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "tarea eliminada"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en TASK-REMOVE"
            })
        }
        
    },
    changeState : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true,
                mge: "Tarea completada"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                mge: error.message || "Hubo un error en CHANGE-STATE"
            })
        }
        
    }
}