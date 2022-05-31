// Created by Antonio González, May 2022

const fs   = require( "fs" );
const path = require( "path" );

function inscribeUserToCourse( name, age, courseId ) {

    if( !isValidCourse( courseId ) ) {
        return;
    }

    const user = createUserObject( name, age, courseId );

    const usersPath   = "./users_clean.json";
    const coursesPath = "./courses_clean.json";

    let users   = readJsonFromFile( usersPath );
    let courses = readJsonFromFile( coursesPath );

    users.push( user );

    courses = addUserToCourse( user, courses, courseId );

    writeJsonFile( usersPath, users );
    writeJsonFile( coursesPath, courses );

    console.log("User has been subscribed");

}

function isValidCourse( courseId ) {

    if( courseId ==="FS101" || courseId === "FS102" )
        return true;
    else 
        return false;

}

function createUserObject( name, age, courseId ) {

    return {
        id: Date.now(),
        age: age,
        courseId: courseId,
        name: name,
    }

}

function readJsonFromFile( jsonPath ) {

    let json = fs.readFileSync( path.resolve( jsonPath ), "utf8" );

    return JSON.parse( json );

}

function addUserToCourse( user, courses, courseId ) {

    for( let i in courses ){

        if( courses[ i ].id === courseId )
            courses[ i ].users.push( user );

    }

    return courses;

}

function writeJsonFile( jsonPath, json ) {

    json = JSON.stringify( json );

    fs.writeFileSync( path.resolve( jsonPath ), json, { encoding: "utf-8" } );

}

inscribeUserToCourse( "Max", 28, "FS101" );