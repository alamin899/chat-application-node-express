function loginForm(req,res,next){
    res.render("index",{ //index is view file name
        title:"Login Chat Application"
    });
}


module.exports ={
    loginForm,
}