// Created by Antonio González, May 2022

function saveEmployee( employee ) {

    validateEmployee( employee );

}

function validateEmployee( employee ) {

    if( !isValidFormInputs( employee ) ) {
        console.log( "Data is required" );
    }
    else{
        console.log("Created", employeeData);
    }

}

function isValidFormInputs( employee ) {

    return isValidText( employee.name ) && isValidEmail( employee.email ) && isValidNumber( employee.age ) &&
    isValidText( employee.role ) && isValidText( employee.countryId ) && isValidText( employee.startDate );

}

function isValidText( value ) {

    if( !value || value == '' )
        return false;
    else 
        return true;

}

function isValidEmail( value ) {

    return value.includes( '@' );

}

function isValidNumber( value ) {
    
    const expression = /$([0-9]{3})/;
    expression.test( value );

}

const employee = {

    age: 25,
    countryId: "ID67843H",
    email: "ada@domain.com",
    startDate: "2022/05/27",
    name: "Ada",
    role: "Developer"

};

saveEmployee( employee );