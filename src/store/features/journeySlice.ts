import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

/* Types */
type State = {
  destination: {
    to: string;
    date: string;
  };
  start: {
    from: string;
    date: string;
  };
};

export type DestinationActions = {
  to?: string;
  date?: string;
};

export type StartActions = {
  from?: string;
  date?: string;
};

/* Initial State */
const initialState: State = {
  destination: {
    to: '',
    date: '',
  },
  start: {
    from: '',
    date: '',
  },
};

const journeySlice = createSlice({
  name: 'journey',
  initialState,
  reducers: {
    setDestination: (
      state: State,
      { payload }: PayloadAction<DestinationActions>,
    ) => {
      state.destination = { ...state.destination, ...payload };
    },
    setStart: (state: State, { payload }: PayloadAction<StartActions>) => {
      state.start = { ...state.start, ...payload };
    },
  },
});

// ACTIONS
export const { setDestination, setStart } = journeySlice.actions;

// SELECTORS
export const selectDestination = (state: RootState) =>
  state.journey.destination;
export const selectStart = (state: RootState) => state.journey.start;

// REDUCER
export default journeySlice.reducer;
