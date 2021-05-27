const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe:'Es la base de la tabla de mutiplicar'
                })
                .option('l',{
                    alias:'list',
                    type:'boolean',
                    demandOption:false,
                    describe: 'muestra la tabla en consola'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    demandOption:false,
                    describe: 'pone limite a la tabla'
                })
                .check( (argv,options)=>{
                    if(isNaN(argv.b ) ){
                        throw 'la base tiene que ser un numero'
                    }
                    return true
                })
                .argv

module.exports=argv;