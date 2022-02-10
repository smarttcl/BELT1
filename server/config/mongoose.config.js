const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/EXAMEN',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('¡La conexión con la base de datos se ha establecido con exito!'))
    .catch(err=>console.log('Algo salió mal cuando se conectó a la base de datos, beep boop bop la conexión db fue un fracaso', err))
