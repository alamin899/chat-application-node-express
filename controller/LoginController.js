function loginForm(req,res,next){
    res.render("login",{
        title:"Login Chat Application"
    });
}


module.exports ={
    loginForm,
}