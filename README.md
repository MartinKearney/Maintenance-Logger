# Maintenance Logger

This application can be viewed live at https://flannel-parliament-04846.herokuapp.com

To run in development mode:

1. Clone or download the project to your machine
2. At a terminal prompt, in the root of the project, enter `npm install`
3. Create a blank `.env` file in the root
4. In this file set `Mongo_URI = <your MongoDB connection string>`
5. Finally, at the terminal, enter `npm run dev`

<p>This application enables a user to create, view, edit or delete details relating to the
maintenance tasks required within a setting of their choosing.  Each job that is registered
has an employee associated with it and also a job history, which can be viewed when the job
is selected on the main screen.  Each job can have one of three statuses and these are reflected
in the job title's colour and the text in brackets next to it.  The details of a job's most recent
update are shown on the main screen and all previous updates are held in the job's history.  Additionally,
it is possible to view, create and delete employees.</p>

**Technologies Used:**

- React
- Redux
- Node/Express
- MongoDB

**Dependencies:**

- mongoose
- express
- dotenv
- materialize-css
- tippyjs
- axios
- redux
- redux-thunk

**Development Dependencies:**

- nodemon
- concurrently
