var fs=require('fs');
var path=require('path');
//console.log(process.argv);
var extension=process.argv[3];
fs.readdir(process.argv[2],function callback(err,list){
  if(err){
    console.log('Error');
  }else{
    //console.log('Bien!');
    //console.log("Lista:",list);
    for(var i=0;i<list.length;i++){
      if(path.extname(list[i])==('.'+extension)){
        console.log(list[i]);
      }
    }
  }
});
