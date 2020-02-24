function akanBirth(){

    let year = document.getElementById("birthyear").value;
    let CCentury = parseInt(year.slice(0,2));
    let YYear = parseInt(year.slice(2,4));
    let MMonth = parseInt(document.getElementById("birthmonth").value) ;
    let DDay = parseInt(document.getElementById("birthdate").value);

    if (DDay <= 0 || DDay>31){
        document.getElementById('birthddate').value = '';
        alert("invalid input.Dates must be between 1 and 31 ");
        return;   
    }
    if (MMonth <= 0 || MMonth>12){
        document.getElementById('birthmonth').value = '';
        alert("invalid month,Months must be between 1 and 12 ");
        return;   
    }
    if(MMonth === ""||DDay===""||year===""){
        alert("make sure to fill in all the blank spaces.");
        return;
    }

    let gender = document.getElementById("gender").value;
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    let dayOfTheWeek=parseInt((( ( (CCentury/4) -2*CCentury-1) + ((5*YYear/4) ) + ((26*(MMonth+1)/10)) + DDay )%7));
    if (gender === "female"){

        document.getElementById("dayborn").innerHTML=("Your birth day is "+days[dayOfTheWeek].toUpperCase());
        document.getElementById("name").innerHTML=("Your Akan name is "+ female[dayOfTheWeek]+" ");

    }
    else{
        document.getElementById("dayborn").innerHTML=("Your birth day is "+days[dayOfTheWeek].toUpperCase());
        document.getElementById("name").innerHTML=( " Your Akan name is "+ male[dayOfTheWeek]+" ");
    }
    document.getElementById("myForm").reset();


}