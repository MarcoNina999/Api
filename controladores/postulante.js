const mpostulante = require('../modelos/postulante');

module.exports = {
    agregar: (req, res) => {
        const datos = req.body;
        const myfile = req.files.file;
        console.log(myfile);
        var ff = new Date();
        var d = ff.getDate();
        var m = ff.getMonth();
        var a = ff.getFullYear();
        var h = ff.getHours();
        var i = ff.getMinutes();
        var s = ff.getSeconds();
        myfile.name = "foto"+a+m+d+h+i+s+ myfile.name.substr(-4);
        datos.foto = myfile.name;
        myfile.mv(`${process.env.DIR_FOTOS}${myfile.name}`, function(err) {
            if(err) {
                console.log(err);
                return res.status(500).send({msg:"Error en envio de archivo"})
            }
        })
        mpostulante.agregar(datos,(err, result) => {
            if(err) {
                console.log(err);
                return err;
            }
            return res.json({
                success: 1,
                data: result
            })
        })
    }
}