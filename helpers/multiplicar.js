const fs =require('fs');

const crearArchivo = async (base, listar,limite)=>{
    
    try {
        let salida = '';
            for(let i = 0; i<=limite; i++){
                salida += `${base} x ${i} = ${base * i}\n`             
            }
            if(listar){
                console.log(salida)
            }
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
        
    } catch (err) {
        throw err;
    }

        

}



module.exports = {
    crearArchivo
}