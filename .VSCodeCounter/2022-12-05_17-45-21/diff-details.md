# Diff Details

Date : 2022-12-05 17:45:21

Directory /Users/dominickfounds/Desktop/JS/LabRats

Total : 178 files,  827 codes, 8 comments, 62 blanks, all 897 lines

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [README.md](/README.md) | Markdown | 42 | 0 | 15 | 57 |
| [backend/config/db.js](/backend/config/db.js) | JavaScript | 11 | 0 | 2 | 13 |
| [backend/controllers/addUserController.js](/backend/controllers/addUserController.js) | JavaScript | 11 | 0 | 1 | 12 |
| [backend/controllers/labController.js](/backend/controllers/labController.js) | JavaScript | 126 | 10 | 25 | 161 |
| [backend/controllers/projectController.js](/backend/controllers/projectController.js) | JavaScript | 89 | 1 | 21 | 111 |
| [backend/controllers/taskController.js](/backend/controllers/taskController.js) | JavaScript | 75 | 0 | 16 | 91 |
| [backend/controllers/userController.js](/backend/controllers/userController.js) | JavaScript | 92 | 6 | 26 | 124 |
| [backend/middleware/authMiddleware.js](/backend/middleware/authMiddleware.js) | JavaScript | 42 | 2 | 18 | 62 |
| [backend/middleware/errorMiddleware.js](/backend/middleware/errorMiddleware.js) | JavaScript | 11 | 2 | 1 | 14 |
| [backend/models/labModel.js](/backend/models/labModel.js) | JavaScript | 72 | 0 | 3 | 75 |
| [backend/models/projectModel.js](/backend/models/projectModel.js) | JavaScript | 24 | 12 | 4 | 40 |
| [backend/models/taskModel.js](/backend/models/taskModel.js) | JavaScript | 18 | 0 | 2 | 20 |
| [backend/models/userModel.js](/backend/models/userModel.js) | JavaScript | 25 | 0 | 2 | 27 |
| [backend/routes/labRoute.js](/backend/routes/labRoute.js) | JavaScript | 16 | 0 | 1 | 17 |
| [backend/routes/projectRoute.js](/backend/routes/projectRoute.js) | JavaScript | 13 | 0 | 2 | 15 |
| [backend/routes/taskRoute.js](/backend/routes/taskRoute.js) | JavaScript | 11 | 0 | 2 | 13 |
| [backend/routes/userRoutes.js](/backend/routes/userRoutes.js) | JavaScript | 15 | 2 | 2 | 19 |
| [backend/server.js](/backend/server.js) | JavaScript | 25 | 2 | 4 | 31 |
| [client/README.md](/client/README.md) | Markdown | 38 | 0 | 33 | 71 |
| [client/__mocks__/styleMock.js](/client/__mocks__/styleMock.js) | JavaScript | 1 | 0 | 0 | 1 |
| [client/package-lock.json](/client/package-lock.json) | JSON | 31,406 | 0 | 1 | 31,407 |
| [client/package.json](/client/package.json) | JSON | 68 | 0 | 1 | 69 |
| [client/public/index.html](/client/public/index.html) | HTML | 20 | 23 | 1 | 44 |
| [client/public/manifest.json](/client/public/manifest.json) | JSON | 25 | 0 | 1 | 26 |
| [client/src/App.css](/client/src/App.css) | CSS | 0 | 0 | 1 | 1 |
| [client/src/App.js](/client/src/App.js) | JavaScript | 71 | 8 | 15 | 94 |
| [client/src/app/localStorage.js](/client/src/app/localStorage.js) | JavaScript | 19 | 0 | 1 | 20 |
| [client/src/app/store.js](/client/src/app/store.js) | JavaScript | 25 | 0 | 5 | 30 |
| [client/src/components/Layout.js](/client/src/components/Layout.js) | JavaScript | 11 | 0 | 2 | 13 |
| [client/src/components/auth/LoginUser.jsx](/client/src/components/auth/LoginUser.jsx) | JavaScript React | 83 | 6 | 17 | 106 |
| [client/src/components/auth/register.jsx](/client/src/components/auth/register.jsx) | JavaScript React | 111 | 7 | 18 | 136 |
| [client/src/components/button/MyButton.css](/client/src/components/button/MyButton.css) | CSS | 91 | 0 | 4 | 95 |
| [client/src/components/button/MyButton.js](/client/src/components/button/MyButton.js) | JavaScript | 13 | 0 | 2 | 15 |
| [client/src/components/dashboard/Dashboard.css](/client/src/components/dashboard/Dashboard.css) | CSS | 95 | 3 | 20 | 118 |
| [client/src/components/dashboard/Dashboard.jsx](/client/src/components/dashboard/Dashboard.jsx) | JavaScript React | 95 | 0 | 22 | 117 |
| [client/src/components/dashboard/Dashboard.test.js](/client/src/components/dashboard/Dashboard.test.js) | JavaScript | 44 | 8 | 10 | 62 |
| [client/src/components/lab/CreateLab.jsx](/client/src/components/lab/CreateLab.jsx) | JavaScript React | 110 | 7 | 16 | 133 |
| [client/src/components/lab/EditLab.jsx](/client/src/components/lab/EditLab.jsx) | JavaScript React | 7 | 0 | 2 | 9 |
| [client/src/components/lab/GetLab.jsx](/client/src/components/lab/GetLab.jsx) | JavaScript React | 128 | 1 | 19 | 148 |
| [client/src/components/lab/JoinLab.jsx](/client/src/components/lab/JoinLab.jsx) | JavaScript React | 89 | 3 | 14 | 106 |
| [client/src/components/lab/Lab.jsx](/client/src/components/lab/Lab.jsx) | JavaScript React | 35 | 0 | 16 | 51 |
| [client/src/components/lab/ModalAddLab.js](/client/src/components/lab/ModalAddLab.js) | JavaScript | 101 | 8 | 15 | 124 |
| [client/src/components/lab/ModalJoinLab.js](/client/src/components/lab/ModalJoinLab.js) | JavaScript | 68 | 0 | 8 | 76 |
| [client/src/components/loading/dots.css](/client/src/components/loading/dots.css) | CSS | 44 | 0 | 8 | 52 |
| [client/src/components/loading/dots.jsx](/client/src/components/loading/dots.jsx) | JavaScript React | 14 | 0 | 3 | 17 |
| [client/src/components/nav/Directory.jsx](/client/src/components/nav/Directory.jsx) | JavaScript React | 29 | 0 | 9 | 38 |
| [client/src/components/nav/Nav.css](/client/src/components/nav/Nav.css) | CSS | 77 | 0 | 10 | 87 |
| [client/src/components/nav/Nav.jsx](/client/src/components/nav/Nav.jsx) | JavaScript React | 48 | 0 | 9 | 57 |
| [client/src/components/nav/landingNav.jsx](/client/src/components/nav/landingNav.jsx) | JavaScript React | 45 | 3 | 7 | 55 |
| [client/src/components/projects/AddProject.js](/client/src/components/projects/AddProject.js) | JavaScript | 67 | 2 | 19 | 88 |
| [client/src/components/projects/AddTask.js](/client/src/components/projects/AddTask.js) | JavaScript | 79 | 3 | 13 | 95 |
| [client/src/components/projects/Project.js](/client/src/components/projects/Project.js) | JavaScript | 110 | 1 | 23 | 134 |
| [client/src/components/projects/Projects.js](/client/src/components/projects/Projects.js) | JavaScript | 104 | 7 | 19 | 130 |
| [client/src/components/projects/Task.js](/client/src/components/projects/Task.js) | JavaScript | 145 | 0 | 12 | 157 |
| [client/src/components/projects/testData.js](/client/src/components/projects/testData.js) | JavaScript | 227 | 0 | 2 | 229 |
| [client/src/components/settings/labSettings.jsx](/client/src/components/settings/labSettings.jsx) | JavaScript React | 42 | 22 | 12 | 76 |
| [client/src/components/settings/subjectData.js](/client/src/components/settings/subjectData.js) | JavaScript | 56 | 0 | 0 | 56 |
| [client/src/components/settings/userSettings.jsx](/client/src/components/settings/userSettings.jsx) | JavaScript React | 63 | 0 | 12 | 75 |
| [client/src/features/auth/authService.js](/client/src/features/auth/authService.js) | JavaScript | 39 | 3 | 12 | 54 |
| [client/src/features/auth/authSlice.js](/client/src/features/auth/authSlice.js) | JavaScript | 100 | 3 | 12 | 115 |
| [client/src/features/lab/labService.js](/client/src/features/lab/labService.js) | JavaScript | 47 | 6 | 15 | 68 |
| [client/src/features/lab/labSlice.js](/client/src/features/lab/labSlice.js) | JavaScript | 299 | 20 | 23 | 342 |
| [client/src/features/lab/projectService.js](/client/src/features/lab/projectService.js) | JavaScript | 25 | 0 | 15 | 40 |
| [client/src/features/lab/taskService.js](/client/src/features/lab/taskService.js) | JavaScript | 26 | 0 | 11 | 37 |
| [client/src/features/project/projectSlice.js](/client/src/features/project/projectSlice.js) | JavaScript | 3 | 1 | 2 | 6 |
| [client/src/img/labPicture.svg](/client/src/img/labPicture.svg) | XML | 157 | 0 | 1 | 158 |
| [client/src/img/projectPicture.svg](/client/src/img/projectPicture.svg) | XML | 348 | 0 | 1 | 349 |
| [client/src/index.css](/client/src/index.css) | CSS | 14 | 0 | 3 | 17 |
| [client/src/index.js](/client/src/index.js) | JavaScript | 19 | 3 | 4 | 26 |
| [client/src/logo.svg](/client/src/logo.svg) | XML | 1 | 0 | 0 | 1 |
| [client/src/pages/Dashboard.jsx](/client/src/pages/Dashboard.jsx) | JavaScript React | 11 | 0 | 2 | 13 |
| [client/src/pages/Landing.jsx](/client/src/pages/Landing.jsx) | JavaScript React | 68 | 0 | 7 | 75 |
| [client/src/pages/Landing.test.js](/client/src/pages/Landing.test.js) | JavaScript | 8 | 0 | 5 | 13 |
| [client/src/pages/Login.jsx](/client/src/pages/Login.jsx) | JavaScript React | 9 | 0 | 2 | 11 |
| [client/src/pages/Register.jsx](/client/src/pages/Register.jsx) | JavaScript React | 9 | 0 | 2 | 11 |
| [client/src/pages/UserSettings.jsx](/client/src/pages/UserSettings.jsx) | JavaScript React | 41 | 1 | 7 | 49 |
| [client/src/pages/data.js](/client/src/pages/data.js) | JavaScript | 19 | 0 | 1 | 20 |
| [client/src/reportWebVitals.js](/client/src/reportWebVitals.js) | JavaScript | 12 | 0 | 2 | 14 |
| [client/src/setupTests.js](/client/src/setupTests.js) | JavaScript | 1 | 4 | 1 | 6 |
| [client/src/styles/Dashboard.css](/client/src/styles/Dashboard.css) | CSS | 0 | 0 | 1 | 1 |
| [client/src/styles/Lab.css](/client/src/styles/Lab.css) | CSS | 15 | 0 | 4 | 19 |
| [client/src/styles/Landing.css](/client/src/styles/Landing.css) | CSS | 74 | 2 | 4 | 80 |
| [client/src/styles/Login.css](/client/src/styles/Login.css) | CSS | 0 | 0 | 1 | 1 |
| [client/src/styles/Projects.css](/client/src/styles/Projects.css) | CSS | 129 | 3 | 20 | 152 |
| [client/src/styles/Register.css](/client/src/styles/Register.css) | CSS | 37 | 0 | 3 | 40 |
| [client/src/styles/Task.css](/client/src/styles/Task.css) | CSS | 166 | 0 | 11 | 177 |
| [client/src/styles/UserSettings.css](/client/src/styles/UserSettings.css) | CSS | 61 | 5 | 14 | 80 |
| [client/src/util/colors.js](/client/src/util/colors.js) | JavaScript | 5 | 0 | 0 | 5 |
| [client/src/util/test-utils.jsx](/client/src/util/test-utils.jsx) | JavaScript React | 17 | 0 | 3 | 20 |
| [package-lock.json](/package-lock.json) | JSON | 4,965 | 0 | 1 | 4,966 |
| [package.json](/package.json) | JSON | 37 | 0 | 1 | 38 |
| [c:/Users/domfo/Desktop/JS/LabRats/README.md](/c:/Users/domfo/Desktop/JS/LabRats/README.md) | Markdown | -36 | 0 | -15 | -51 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/config/db.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/config/db.js) | JavaScript | -11 | 0 | -2 | -13 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/controllers/addUserController.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/controllers/addUserController.js) | JavaScript | -11 | 0 | -1 | -12 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/controllers/labController.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/controllers/labController.js) | JavaScript | -126 | -10 | -25 | -161 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/controllers/projectController.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/controllers/projectController.js) | JavaScript | -86 | -1 | -21 | -108 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/controllers/taskController.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/controllers/taskController.js) | JavaScript | -75 | 0 | -16 | -91 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/controllers/userController.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/controllers/userController.js) | JavaScript | -92 | -6 | -26 | -124 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/middleware/authMiddleware.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/middleware/authMiddleware.js) | JavaScript | -42 | -2 | -18 | -62 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/middleware/errorMiddleware.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/middleware/errorMiddleware.js) | JavaScript | -11 | -2 | -1 | -14 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/models/labModel.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/models/labModel.js) | JavaScript | -71 | 0 | -3 | -74 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/models/projectModel.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/models/projectModel.js) | JavaScript | -24 | -12 | -4 | -40 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/models/taskModel.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/models/taskModel.js) | JavaScript | -18 | 0 | -2 | -20 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/models/userModel.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/models/userModel.js) | JavaScript | -25 | 0 | -2 | -27 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/routes/labRoute.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/routes/labRoute.js) | JavaScript | -16 | 0 | -1 | -17 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/routes/projectRoute.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/routes/projectRoute.js) | JavaScript | -13 | 0 | -2 | -15 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/routes/taskRoute.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/routes/taskRoute.js) | JavaScript | -11 | 0 | -2 | -13 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/routes/userRoutes.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/routes/userRoutes.js) | JavaScript | -15 | -2 | -2 | -19 |
| [c:/Users/domfo/Desktop/JS/LabRats/backend/server.js](/c:/Users/domfo/Desktop/JS/LabRats/backend/server.js) | JavaScript | -18 | 0 | -4 | -22 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/README.md](/c:/Users/domfo/Desktop/JS/LabRats/client/README.md) | Markdown | -38 | 0 | -33 | -71 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/__mocks__/styleMock.js](/c:/Users/domfo/Desktop/JS/LabRats/client/__mocks__/styleMock.js) | JavaScript | -1 | 0 | 0 | -1 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/package-lock.json](/c:/Users/domfo/Desktop/JS/LabRats/client/package-lock.json) | JSON | -31,406 | 0 | -1 | -31,407 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/package.json](/c:/Users/domfo/Desktop/JS/LabRats/client/package.json) | JSON | -64 | 0 | -1 | -65 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/public/index.html](/c:/Users/domfo/Desktop/JS/LabRats/client/public/index.html) | HTML | -20 | -23 | -1 | -44 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/public/manifest.json](/c:/Users/domfo/Desktop/JS/LabRats/client/public/manifest.json) | JSON | -25 | 0 | -1 | -26 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/App.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/App.css) | CSS | 0 | 0 | -1 | -1 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/App.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/App.js) | JavaScript | -71 | -8 | -15 | -94 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/app/localStorage.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/app/localStorage.js) | JavaScript | -19 | 0 | -1 | -20 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/app/store.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/app/store.js) | JavaScript | -25 | 0 | -5 | -30 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/Layout.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/Layout.js) | JavaScript | -11 | 0 | -2 | -13 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/auth/LoginUser.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/auth/LoginUser.jsx) | JavaScript React | -83 | -6 | -17 | -106 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/auth/register.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/auth/register.jsx) | JavaScript React | -111 | -13 | -18 | -142 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/button/MyButton.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/button/MyButton.css) | CSS | -91 | 0 | -4 | -95 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/button/MyButton.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/button/MyButton.js) | JavaScript | -13 | 0 | -2 | -15 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/dashboard/Dashboard.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/dashboard/Dashboard.css) | CSS | -62 | 0 | -14 | -76 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/dashboard/Dashboard.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/dashboard/Dashboard.jsx) | JavaScript React | -77 | -1 | -19 | -97 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/dashboard/Dashboard.test.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/dashboard/Dashboard.test.js) | JavaScript | -44 | -8 | -10 | -62 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/CreateLab.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/CreateLab.jsx) | JavaScript React | -110 | -7 | -16 | -133 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/EditLab.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/EditLab.jsx) | JavaScript React | -7 | 0 | -2 | -9 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/GetLab.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/GetLab.jsx) | JavaScript React | -145 | -1 | -21 | -167 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/JoinLab.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/JoinLab.jsx) | JavaScript React | -84 | -3 | -13 | -100 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/Lab.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/Lab.jsx) | JavaScript React | -35 | 0 | -16 | -51 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/ModalAddLab.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/ModalAddLab.js) | JavaScript | -105 | -7 | -15 | -127 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/ModalJoinLab.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/lab/ModalJoinLab.js) | JavaScript | -63 | 0 | -8 | -71 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/loading/dots.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/loading/dots.css) | CSS | -44 | 0 | -8 | -52 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/loading/dots.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/loading/dots.jsx) | JavaScript React | -14 | 0 | -3 | -17 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/nav/Nav.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/nav/Nav.css) | CSS | -77 | 0 | -10 | -87 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/nav/Nav.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/nav/Nav.jsx) | JavaScript React | -47 | 0 | -9 | -56 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/nav/landingNav.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/nav/landingNav.jsx) | JavaScript React | -45 | -3 | -7 | -55 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/projects/AddProject.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/projects/AddProject.js) | JavaScript | -68 | 0 | -17 | -85 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/projects/AddTask.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/projects/AddTask.js) | JavaScript | -86 | -2 | -13 | -101 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/projects/Project.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/projects/Project.js) | JavaScript | -134 | -5 | -21 | -160 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/projects/Projects.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/projects/Projects.js) | JavaScript | -85 | 0 | -13 | -98 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/projects/testData.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/projects/testData.js) | JavaScript | -227 | 0 | -2 | -229 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/settings/labSettings.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/settings/labSettings.jsx) | JavaScript React | -42 | -22 | -12 | -76 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/settings/subjectData.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/settings/subjectData.js) | JavaScript | -56 | 0 | 0 | -56 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/components/settings/userSettings.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/components/settings/userSettings.jsx) | JavaScript React | -97 | 0 | -13 | -110 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/features/auth/authService.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/features/auth/authService.js) | JavaScript | -39 | -3 | -12 | -54 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/features/auth/authSlice.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/features/auth/authSlice.js) | JavaScript | -100 | -3 | -12 | -115 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/features/lab/labService.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/features/lab/labService.js) | JavaScript | -43 | -6 | -14 | -63 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/features/lab/labSlice.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/features/lab/labSlice.js) | JavaScript | -292 | -20 | -22 | -334 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/features/lab/projectService.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/features/lab/projectService.js) | JavaScript | -25 | 0 | -15 | -40 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/features/lab/taskService.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/features/lab/taskService.js) | JavaScript | -26 | 0 | -11 | -37 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/features/project/projectSlice.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/features/project/projectSlice.js) | JavaScript | -3 | -1 | -2 | -6 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/index.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/index.css) | CSS | -14 | 0 | -3 | -17 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/index.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/index.js) | JavaScript | -19 | -3 | -4 | -26 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/logo.svg](/c:/Users/domfo/Desktop/JS/LabRats/client/src/logo.svg) | XML | -1 | 0 | 0 | -1 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/Dashboard.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/Dashboard.jsx) | JavaScript React | -11 | 0 | -2 | -13 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/Landing.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/Landing.jsx) | JavaScript React | -68 | 0 | -7 | -75 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/Landing.test.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/Landing.test.js) | JavaScript | -8 | 0 | -5 | -13 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/Login.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/Login.jsx) | JavaScript React | -9 | 0 | -2 | -11 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/Register.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/Register.jsx) | JavaScript React | -9 | 0 | -2 | -11 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/UserSettings.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/UserSettings.jsx) | JavaScript React | -39 | -1 | -7 | -47 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/data.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/pages/data.js) | JavaScript | -19 | 0 | -1 | -20 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/reportWebVitals.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/reportWebVitals.js) | JavaScript | -12 | 0 | -2 | -14 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/setupTests.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/setupTests.js) | JavaScript | -1 | -4 | -1 | -6 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Dashboard.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Dashboard.css) | CSS | 0 | 0 | -1 | -1 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Lab.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Lab.css) | CSS | -5 | 0 | -1 | -6 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Landing.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Landing.css) | CSS | -74 | -2 | -4 | -80 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Login.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Login.css) | CSS | 0 | 0 | -1 | -1 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Projects.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Projects.css) | CSS | -99 | 0 | -11 | -110 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Register.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Register.css) | CSS | -37 | 0 | -3 | -40 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Task.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/Task.css) | CSS | -113 | 0 | -9 | -122 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/UserSettings.css](/c:/Users/domfo/Desktop/JS/LabRats/client/src/styles/UserSettings.css) | CSS | -39 | -5 | -8 | -52 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/util/colors.js](/c:/Users/domfo/Desktop/JS/LabRats/client/src/util/colors.js) | JavaScript | -5 | 0 | 0 | -5 |
| [c:/Users/domfo/Desktop/JS/LabRats/client/src/util/test-utils.jsx](/c:/Users/domfo/Desktop/JS/LabRats/client/src/util/test-utils.jsx) | JavaScript React | -17 | 0 | -3 | -20 |
| [c:/Users/domfo/Desktop/JS/LabRats/package-lock.json](/c:/Users/domfo/Desktop/JS/LabRats/package-lock.json) | JSON | -4,965 | 0 | -1 | -4,966 |
| [c:/Users/domfo/Desktop/JS/LabRats/package.json](/c:/Users/domfo/Desktop/JS/LabRats/package.json) | JSON | -32 | 0 | -1 | -33 |

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details