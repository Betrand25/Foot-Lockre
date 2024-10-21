function validateForm(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var country = document.getElementById("country").value
    var checkbox = document.getElementById("checkbox").checked
    
    //Validasi (Name)
    if(name == ""){
        alert("Name cannot be empty")
    }

    //Validasi manual Email -> akhirnya(@gmail.com)
    else if(email == ""){
        alert("Email cannot be empty")
    }

    else if(!email.endsWith("@gmail.com")){
    alert("Email must end with @gmaill.com")
    }

    //Validasi nomer telepon harus dimulai dari 0
    else if(phone == ""){
        alert("Phone Number cannot be empty")
    }

    else if(phone.charAt(0) != 0  && phone.length < 10){
    alert("Phone number must start with '0' and must longer than 10 digits  ")
    }

    //Validasi Kosong (Country)
    else if(country == ""){
    alert("Country cannot be empty")
    }

    //Validasi checkbox
    else if(!checkbox){
        alert("Terms and conditions mus be agred to")
    }
    else{
        alert("Form Submitted Successfully")
    }
}
