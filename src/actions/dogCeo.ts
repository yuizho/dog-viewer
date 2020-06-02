import { AxiosError } from "axios";

import * as ActionType from "./dogCeoConstants";

export const fetchDogs = {
  start: (dogType: string) => ({
    type: ActionType.GET_DOGS_START as typeof ActionType.GET_DOGS_START,
    payload: dogType,
  }),

  succeed: (dogType: string, dogImageUrls: string[]) => ({
    type: ActionType.GET_DOGS_SUCCEED as typeof ActionType.GET_DOGS_SUCCEED,
    payload: { dogType, dogImageUrls },
  }),

  fail: (dogType: string, error: AxiosError) => ({
    type: ActionType.GET_DOGS_FAIL as typeof ActionType.GET_DOGS_FAIL,
    payload: { dogType, error },
    error: true,
  }),
};

export type DogCeoAction =
  | ReturnType<typeof fetchDogs.start>
  | ReturnType<typeof fetchDogs.succeed>
  | ReturnType<typeof fetchDogs.fail>;
