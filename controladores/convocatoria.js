const mconvocatoria = require('../modelos/convocatoria');

module.exports = {
    listar: (req, res) => {
        mconvocatoria.listar((err,results)=> {
            if(err) {
                console(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    }
}