var mymodule =require('./module.js');

mymodule.leerDireccion(process.argv[2],process.argv[3],function callback(err,data){
  if(err){

  }else{
    console.log(data);
  }
})
