export let BASE_URL =
  process.env.NODE_ENV === "development" ? `http://localhost:8000/` : "/";

export const headers = {
  "X-CSRFToken":
    "frLl3vbS2A3v5h7qPrVfpuyyVPjHjt9UyKhCPqfxO0jMsSiyFeDfk4AOItMOc1ka",
  accept: "application/json",
};
