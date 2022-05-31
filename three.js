function createEmployee(name,age,role,country_id,date){
    const employeeData = {
        name: name,
        age: age,
        role: role,
        country_id: country_id,
        date: date
    };
    if((name === "" || !name) || (email.includes('@')) || (!age) || (!role||role==="") || (!country_id || country_id==="")||(!date)) {
        console.log( "Data is required" );
    }
    else{
        // Data base
        console.log("Created", employeeData);
    }
}

createEmployee( "Max",30,"Developer","ID67384","2022/05/27");