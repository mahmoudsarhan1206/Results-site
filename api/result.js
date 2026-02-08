export default async function handler(req, res) {

try{

let seat=req.query.seat;

if(!seat){
return res.json({success:false});
}

/*
هنا مكان جلب البيانات الحقيقي
دلوقتي عاملين مثال فقط
*/

let fakeDatabase={
"12345":"ناجح - جيد جدا",
"11111":"ناجح - جيد",
"22222":"راسب"
};

let result=fakeDatabase[seat];

if(result){
res.json({
success:true,
result:result
});
}else{
res.json({success:false});
}

}catch(e){
res.json({success:false});
}

}
