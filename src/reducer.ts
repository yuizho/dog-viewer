import { Reducer } from "redux";
import { AxiosError } from "axios";

import { DogCeoAction } from "./actions/dogCeo";
import * as ActionType from "./actions/dogCeoConstants";

export interface DogCeoState {
  images: string[];
  isLoading: boolean;
  type: string;
  error?: AxiosError | null;
}

export const initialState: DogCeoState = {
  images: [],
  type: "",
  isLoading: false,
};

const dogCeoReducer: Reducer<DogCeoState, DogCeoAction> = (
  state: DogCeoState = initialState,
  action: DogCeoAction
): DogCeoState => {
  switch (action.type) {
    case ActionType.GET_DOGS_START:
      return {
        ...state,
        images: [],
        isLoading: true,
      };
    case ActionType.GET_DOGS_SUCCEED:
      return {
        ...state,
        images: action.payload.dogImageUrls,
        isLoading: false,
      };
    case ActionType.GET_DOGS_FAIL:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
  }
};

export default dogCeoReducer;
