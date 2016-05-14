var exports = module.exports = {

leerDireccion: function(data,ext) {
  var fs=require('fs');
  var path=require('path');
  //console.log(process.argv);
  var extension=ext;
  console.log(data);
  console.log(extension);
  var arrayResult;
  fs.readdir(data,function callback(err,list){
    if(err){
      console.log('Error');
    }else{
      //console.log('Bien!');
      //console.log("Lista:",list);
    arrayResult=list.filter(function evenNumbers(ob){

            return path.extname(ob)===('.'+extension);
          });
          //console.log(result);
    }
});

      console.log(arrayResult);
      return arrayResult;


}
};
