import { requestInstance } from "@/utils/request";

export async function httpTest(url, data = {}) {
  return requestInstance({
    url,
    data,
    method: "GET",
  });
}
