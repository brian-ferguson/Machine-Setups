import React, {createContext, useState, useEffect} from "react";
import PropTypes from "prop-types";
import axios from "axios";
//context
export const Context = createContext({});

//provider
export const Provider = props => {
  const {
    manufacturer: initialManufacturer,
    models: initialModels,
    model: initialModel,
    setups: initialSetups,
    setup: intialSetupName,
    children
  } = props;

  const [manufacturer, setManufacturer] = useState(initialManufacturer);
  const [models, setModels] = useState(initialModels);
  const [model, setModel] = useState(initialModel);
  const [setups, setSetups] = useState(initialSetups);
  const [setup, setSetupName] = useState(intialSetupName);

  //get the machines from the rest api
  useEffect(() => {

    axios
      .get("http://localhost:3001/api/getData")
      .then(result => console.log("API Pull Result: ", result.data.data));


  }, []);

  //add the machine the the database
  const addNewSetup = (setup) => {
    const newSetup = {
      setup:setup.setup,
      manufacturer:setup.manufacturer,
      model:setup.model,
      controller:setup.controller,
      spindle_type:setup.spindle_type,
      spindle_speed:setup.spindle_speed,
      spindle:setup.spindle,
      options:setups.options
    };

    {/*
    axios.post("http://localhost:3001/api/putData", newSetup)
      .then((result) => {
        console.log("newly added machine setup: ", newSetup);
      });*/}
  };

  const setupsContext = {
    manufacturer,
    setManufacturer,
    models,
    setModels,
    model,
    setModel,
    setups,
    setSetups,
    setup,
    setSetupName,
    addNewSetup,
  };

  return <Context.Provider value={setupsContext}>{children}</Context.Provider>;

};

//consumer
export const {Consumer} = Context;

//proptype validation
Provider.propTypes = {
  manufacturer: PropTypes.string,
  models: PropTypes.array,
  model: PropTypes.string,
  setups: PropTypes.array,
};

Provider.defaultProps = {
  manufacturer: "",
  models: [],
  model:"",
  setups: [],
};
