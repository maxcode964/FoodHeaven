function display(){
    var data = Document.forms["contact"]["help"].value
    if(data == ""){
        window.alert("data is not entered");
        return false;
    }
    window.alert("problem is :"+data);

    var name = Document.forms["contact"]["name"].value
    if(name == ""){
        window.alert("data is not entered");
        return false;
    }
    window.alert("name of customer :"+name);

    var phone = document.getElementById["contact"]["phone"].value;
    if (!validatePhoneNumber(phone)) {
       window.alert("number  is not correct")
       return false;
    } else {
      
        alert("validation success")
    }
    var email = document.getElementById["contact"]["email"].value;
    if (!validateemail(email)) {
       window.alert("email is correct")
    } else {
      
        alert("validation success")
    }

     var comment = Document.forms["contact"]["comment"].value
    if(comment == ""){
        window.alert("data is not entered");
        return false;
    }
    window.alert("comment is  :"+comment);
}
function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

    return re.test(input_str);
}
function email(input_str){
    var er = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return er.test(input_str)
}