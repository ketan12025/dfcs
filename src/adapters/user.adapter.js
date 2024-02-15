export const getUsersApi = async () => {
  let user = await fetch(
    "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098"
  );
  return await user.json();
};
