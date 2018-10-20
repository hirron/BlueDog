

app.get("/",
    (request, response) => {
         response.sendFile(path.join(__dirname, '/HTML/index.html'));
     }
);

app.get("/projects",
    (request, response) => {
        var dbresults = []; // TODO: get projects list from mongo-express query to Mongo database

        var projects = {
            data: dbresults
        };

        response.json(projects);
        response.end();
    }
);

app.get("/users",
    (request, response) => {
        var dbresults = []; // TODO: get users list from mongo-express query to Mongo database

        var users = {
            data: dbresults
        };

        response.json(projects);
        response.end();
    }
);

app.get("/user/:id",
    (request, response) => {
        var dbresults = []; // TODO: get user from database according to user id
        var userId, userProjects, userRole; // TODO: instantiate values based on dbresults

        var user = {
            id: userId,
            projects: userProjects,
            role: userRole
        };

        response.json(user);
        response.end();
    }
);

app.get("/project/:id",
    (request, response) => {
        var dbresults = []; // TODO: get project from database according to user id
        var projectId, projectDescription; // TODO: instantiate values based on dbresults

        var project = {
            id: projectId,
            description: projectDescription
        };

        response.json(project);
        response.end();
    }
);
