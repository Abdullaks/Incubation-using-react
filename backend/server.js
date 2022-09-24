const express=require('express');
const colors=require('colors')
const dotenv=require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleware')
const connectDB=require('./config/db')
const port= process.env.PORT || 5000
const {viewAppDetails,allApplication,registeredApplication,newApplication,pendingApplication,blockedApplication,changingStatus} = require('./controllers/adminController')
const {getBookingSlots, getApplications,slotUpdate,slotDuplicate}=require('./controllers/slotController')

                                                      

const app=express()

app.use(express.json())     // middleware to print json data
app.use(express.urlencoded({extended:false}))
                                 
app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/admin',require('./routes/adminRoutes'))
app.use('/api/incubation',require('./routes/incubationRoutes'))


app.get('/newApplication',newApplication)
app.get('/pendingApplication',pendingApplication)
app.get('/registeredApplication',registeredApplication)
app.get('/blockedApplication',blockedApplication)
app.get('/allApplication',allApplication)
app.get('/allApps',allApplication)
app.post('/changingStatus',changingStatus)
app.get('/viewApplication/:id',viewAppDetails)
                                                             

app.get("/getBookingSlots", getBookingSlots);
app.get("/getApplications", getApplications);
app.post("/slotUpdate", slotUpdate);
app.patch("/slotDuplicate", slotDuplicate);
   
app.use(errorHandler)

app.listen(port,()=>console.log(`server started on port ${port}`))



















 

