import { API_KEY } from "../constants/env";

export default function useApiService() {
  const search = (text: string, page: number) => {
    const url = `https://app.ticketmaster.com/discovery/v2/attractions.json?size=5&page=${page}&apikey=${API_KEY}&keyword=${text}`;

    return fetch(url).then((res) => res.json());
  };

  const get = (id: string) => {
    const url = `https://app.ticketmaster.com/discovery/v2/attractions/${id}.json?apikey=${API_KEY}`;

    return fetch(url).then((res) => res.json());
  }

  const getEvents = (id: string) => {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=${API_KEY}&attractionId=${id}`;

    return fetch(url).then((res) => res.json());
  }

  return {
    search,
    get,
    getEvents,
  };
}
