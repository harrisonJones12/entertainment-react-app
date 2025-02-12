// A mock function to mimic making an async request for data
export const fetchUser = (user = "John") => {
  return new Promise<{ data: string }>((resolve) =>
    setTimeout(() => resolve({ data: `${user} is logged in` }), 500)
  );
};
