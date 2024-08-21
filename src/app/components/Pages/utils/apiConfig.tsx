"use server";
import { axiosClient } from "../hooks/config";

export async function getData(URL: string) {
  try {
    const { data } = await axiosClient().get(URL);
    return Promise.resolve({ error: null, result: data });
  } catch (err: any) {
    return Promise.resolve({ error: err, result: null });
  }
}

export async function postData(URL: string, payload: object) {
  try {
    const { data } = await axiosClient().post(URL, payload);
    return Promise.resolve({ error: undefined, result: data });
  } catch (err: any) {
    return Promise.resolve({ error: err, result: undefined });
  }
}

export async function putData(URL: string, payload: object) {
  try {
    const { data } = await axiosClient().put(URL, payload);
    return Promise.resolve({ error: undefined, result: data });
  } catch (err: any) {
    return Promise.resolve({ error: err, result: undefined });
  }
}

export async function deleteData(URL: string) {
  try {
    const { data } = await axiosClient().delete(URL);
    return Promise.resolve({ error: undefined, result: data });
  } catch (err: any) {
    return Promise.resolve({ error: err, result: undefined });
  }
}
