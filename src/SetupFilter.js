import React, {useContext} from "react";
import clsx from "clsx";

import Select from "./components/Select";
import {SetupsContext} from "./context";


const manufacturers = ["Bostomatic","Brother","DMG"];
var manufacturer_models = require('./setups_test');
const models_by_mfg = [
  {
      "manufacturer": "Bostomatic",
      "models": [ "505", "505X", "605" ]
  },
  {
      "manufacturer": "Brother",
      "models": [ "M200X3", "M300X3", "MX140X2", "R650X1", "S700X1" ]
  },
  {
      "manufacturer": "DMG",
      "models": [ "CMX 70 U", "DMC 1035 eVo", "DMC 125", "DMU 100", "DMU 40 eVo", "DMU 50 3rd Gen", "DMU 50 eVo", "DMU 60 eVo", "DMU 65 monoBLOCK", "DMU 75 monoBLOCK", "HSC 55", "HSC 20", "MillTap 700", "DMU 80" ]
  }
   ]

const SetupSelection = (props) => {
  const handleRefresh = e => {
    setManufacturer(e.target.value);
    var mfg_models = models_by_mfg.find((element) => {return element.manufacturer === e.target.value;})
    setModels(mfg_models.models);
    console.log(setups);

  }

  const modelSelection = e => {
    setModel(e.target.value);

    //find all the setups that match the manufacturer and model
    var model_setups = manufacturer_models.filter(obj => obj.manufacturer === manufacturer && obj.model === e.target.value)
    console.log("heyyy", setups);
    setSetups(model_setups)


  }


const {manufacturer, setManufacturer, models, setModels, model, setModel, setups, setSetups} = useContext(SetupsContext);


  return(
    <div className="setup-selection">

      <h4>Setup Selection: </h4>

      <Select
        options={manufacturers}
        selectedOption="Arumatik Mi"
        name="manufacturer"
        placeholder="Select a manufacturer: "
        controlFunc={handleRefresh}/>

      <Select
        options={models}
        selectedOption="Arumatik Mi"
        name="model"
        placeholder="Select a model: "
        controlFunc={modelSelection}/>


        <h1>{model}</h1>


        {setups.map(setup => {
          return(
            <div
              className={setup.setup}
              key={setup.setup}>
                {setup.setup}
                {setup.manufacturer}
                {setup.model}
            </div>
          );
        })}


    </div>
  );

};

export default SetupSelection;
