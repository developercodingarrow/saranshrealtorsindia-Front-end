export const formatDate = (dateString) => {
  console.log(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
};
