const addExperience = (payload) => {
  return {
    type: "ADD_EXPERIENCE",
    payload: payload,
  };
};

const removeExperience = (payload) => {
  return {
    type: "REMOVE_EXPERIENCE",
    payload: payload,
  };
};

export { addExperience, removeExperience };