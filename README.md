# Lab Rats

LabRats is a management system for research laboratories at institutions. No longer will Research Labs have to communicate through email each time a task needs to completed, or assigned. With LabRats you can simply create/join a lab that contains a list of Projects, with tasks inside each project. This way, Research teams can simply log on and view their required tasks.

# How to Use it

### Building and Running

From website:
If you don't want to go through the trouble of making sure your node environments are the same ones, just head over to https://labrats.herokuapp.com/ and sign up to start organizing your lab!

From src:
If you want to build the app from the source code, either download or clone the github repository. Once in the root directory, run npm install. Be sure to specify your .env file to connect to your mongodb database, set your port, and set your jwt secret. Then, (if all node dependencies are installed) run 'npm run dev' and a development version of the app will start running!.

### Regsitering
When registering (accessible by clicking 'Get Started Now !!' on the landing page), you will need to provide your Name, Email, Password, Password Confirmation, and your Role. After registering, you will be directed to the dashboard. 

### Logging In
Upon logging in, you will be directed to a dashboard. Logically, the dashboard should be empty as you do not have any labs registered or joined.
Because LabRats is Role-based, you need to have selected Principle Investigator (PI) upon registering in order to Create a lab. If you seleced Graduate Research Assistant or Undergraduate Research Assistant, you will only have the ability to Join a lab. 

### Logging Out
Upon registering an account, or logging in, you will be redirected to a dashboard.
Logically, the dashboard should be empty as you do not have any labs registered or joined.
If you click the down arrow next to your name on the top left of the navigation panel, you will see a button with the option to log out. Pressing it will remove your user info from your browsers local storage. If you do not log out, LabRats will remember you user info, saving you time by allowing you to skip logging in each time you visit the website.

### Creating a Lab
If you have PI priviledges, you can create a lab by clicking the down arrow next to your username. Then, click User Info. If you select the Lab tab to the left of settings and under the User tab, you will have the ability to create a lab. You can specify the Lab Name, Institution, and Field of Study, as well as set a password for others to join.

You will then see a list of your labs once you have created one, alongside an ID for each lab. You can then provide this ID to any one of your Research Assistants alongside the password, and your Research Assistants will be able to access the Lab with its Projects and Tasks.

### Joining a Lab
If you are a Research Assistant, you can join a lab by clicking the down arrow next to your username. Then, click User Info. If you select the Lab tab to the left of settings, and under the User tab, you will have the ability to create a lab. You can then press the Join Lab button to join a Lab. You will then be able to provide the Lab ID and the password to join the lab. After pressing 'Submit' you should see a list of Labs you enrolled in, alongside the lab name, institution, PI, and ID.

### Dashboard
Once you have Created/Joined a lab, you will see a list of labs you are enrolled in under the dashboard. If you click the lab, you will be directed to that labs page which will include a list of projects.

### Projects
Each lab has a projects section! Here, you can create or delete a project where you can store those project specific tasks.

### Tasks
Each project has a section for tasks. Here, you can upload a task with a task name, notes, and assign the task to a member in your lab. You can also edit each task, complete each task, and filter tasks by completion status. If you want to delete a project, you need to complete it first by checking the check mark!

## Test Login Info

Here is some test login info if you do not want to create accounts for a full lab.

- ### Group 1
  - PI: Name: John, Email: test@mail.com, Password: password123, Role: PI
  - Labs: 
    - Name: Brain Lab 2, ID: hd7ilyP1R75ZQujW4TIUZ, Password: password123
    - Name: Coding Lab, ID: 8IA9dqRxAJwYHkiMQXfmf, Password: password123
    - Name: Web Dev Lab, ID: gkvzSv7r8RK_FgyGcepzB, Password: password123
    - Name: SWE Lab, ID: GUi8HWv_tdX6iczLZZdjs, Password: Password123
  - Lab Users:
    - Name: Biggest Mac, Email: big@mail.com, Password: password123, Role: Undergraduate Research Assistant (URA)
- ### Group 2
  - PI: Name: Mike, Email: mike@mail.com, Password: password123, Role: PI
  - Labs: 
    - Name: Bone Lab, ID: TEf8C0mn7G9b4AmOG6Pa3, Password: password123
    - Name: Archeology Lab, ID: wtmPvyCnRnsT32JbEE-8G, Password: password123
  - Lab Users:
    - Name: Alice, email: alice@mail.com, Password: password123, Role: GRA
    - Name: Sandra, email: sandra@mail.com, Password: password123, Role: URA
