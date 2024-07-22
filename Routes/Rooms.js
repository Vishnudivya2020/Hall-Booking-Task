import express from 'express';

import {Rooms , Booking} from './local-Variables.js';

const RoomsRouter =express.Router();

//Get all rooms
RoomsRouter.get('/',(req,res)=>{
    res.send({Rooms});
});

//Creata a rooms
RoomsRouter.post('/',(req,res) =>{
       const {body}=req;
    
     Rooms.push({...body});
         res.send({msg:"Create rooms successfully"});
        
    });

    
    

    export default RoomsRouter;