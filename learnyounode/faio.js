var fs=require('fs');
fs.readFile(process.argv[2],'utf8',function callback(err,data){
  if(err){
    //console.log('Error');
  }else{
    //console.log('Bien!');
    console.log((data.toString().split('\n').length)-1);
  }
});
