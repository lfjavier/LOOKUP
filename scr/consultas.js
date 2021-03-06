db.alumnos.aggregate([
    {
        $lookup:
        {
            from:'grupos',
            localField:'_idAG',
            foreignField:'_idG',
            as:'grupos'

        }
    },
    {
        $match:
        {
            sexo:"F"
        }
    },
    {
        $project:
        {
            _id:0,
            matricula:1,
            nombreA:1,
            sexo:1,
            grupo:"$grupos.nombreG",
            modulo:"$grupos.modulo"
        }
    }
])