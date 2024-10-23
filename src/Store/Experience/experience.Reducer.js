const initialState = {
  experience: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPERIENCE":
      return {
        ...state,
        experienceData: [...state.experience, action.payload],
      };

    case "REMOVE_EXPERIENCE":
      return {
        ...state,
        experienceData: state.experienceData.filter(
          (_, index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default experienceReducer;
