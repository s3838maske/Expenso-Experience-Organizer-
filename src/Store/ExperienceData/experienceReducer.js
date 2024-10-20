const initialState = {
  experienceData: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPERIENCE":
      return {
        ...state,
        experienceData: [...state.experienceData, action.payload],
      };

    case "REMOVE_EXPERIENCE":
      return {
        ...state,
        experienceData: state.experienceData.filter(
          (experience, index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default experienceReducer;
