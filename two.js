const fs = require("fs");
const path = require("path");
function usercreate(userName, userAge, userCourse){
    // Verify course id
    if(userCourse==="FS101"||userCourse==="FS102"){
        // Create the new user
        const userData = {
            userName: userName,
            userAge: userAge,
            user_course: userCourse
        }
        // Read json
        let usersJson = fs.readFileSync( path.resolve('./users.json'), 'utf8' );
        usersJson = JSON.parse( usersJson );
        usersJson.push(userData);
        // Write json
        fs.writeFileSync( './users.json', JSON.stringify(usersJson), { encoding: 'utf-8' } );
        // Add user to course
        let coursesJson = fs.readFileSync( path.resolve('./courses.json'), 'utf8' );
        coursesJson = JSON.parse( coursesJson );
        for(let i=0;i<coursesJson.length;i++){
            if(coursesJson[i].CourseID===userCourse){
                coursesJson[i].CourseUsers.push(userData);
            }
        }
        // Write courses json
        fs.writeFileSync( './courses.json', JSON.stringify(coursesJson), { encoding: 'utf-8' } );
        console.log("user created");
    }
    else{
        console.log("user not created");
    }

}

usercreate("max",26,"FS101");