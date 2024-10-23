const initialState = {
  experience: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPERIENCE":
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };

    case "REMOVE_EXPERIENCE":
      return {
        ...state,
        experience: state.experience.filter(
          (experience, index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default experienceReducer;
