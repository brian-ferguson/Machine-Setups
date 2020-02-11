import React, {useContext, useState} from "react";
import {SetupsContext} from "./context";
import SingleInput from "./components/SingleInput";
import Select from "./components/Select";

const controllerOptions = ["Arumatik Mi","FANUC","HAAS","iTNC530","OSP-P300","Siemens S840D"];
const spindleTypeOptions = ["ISO","HSK"];

const emptyMachine =  {"manufacturer": "", "model": "", "controller": "", "spindle_type":"", "spindle_speed":0, "spindle":"", "rotaries":[] };


const SetupForm = (props) => {

  //[addNewSetup] (method to send setup to context) > sets [setup]]
   const {addNewSetup} = useContext(SetupsContext);

   const {setup, setSetupName} = useState({
    setup:String,
    manufacturer:String,
    model:String,
    controller:String,
    spindle_type:String,
    spindle_speed:Number,
    spindle:String,
    options: Array,
   });



   const handleSingleInputChange = e => {
     addNewSetup({
       ...setup,
       [e.target.name]: e.target.value
     });

     /*
     setSetupName({
       ...setup,
       //[e.target.name]: e.target.value
     });*/
   };

  return(
    <div className="setup-form">
      <h4>Setup Form: </h4>

      <SingleInput
              content=""
              name="manufacturer"
              type="text"
              placeholder="Manufacturer"
              controlFunc={handleSingleInputChange}/>





    </div>
  );

};

export default SetupForm;
