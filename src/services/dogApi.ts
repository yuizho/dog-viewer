import axios from "axios";

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: "https://dog.ceo",
  timeout: 7000,
};

export const fetchDogsFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);

  const fetchDogs = async (type: string) => {
    try {
      const response = await instance.get(
        `/api/breed/${type.replace("-", "/")}/images/random/10`
      );

      if (response.status !== 200) {
        throw new Error("Server Error");
      }
      const dogs: string[] = response.data.message;

      return dogs;
    } catch (err) {
      throw err;
    }
  };

  return fetchDogs;
};
