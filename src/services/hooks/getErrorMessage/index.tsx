export const getErrorMessage = (error: any) => {
  let errorMessage = "";

  if (error.response) {
    switch (error.response.status) {
      case 500:
        errorMessage = "Server is not available now";
        break;
      case 400:
        errorMessage =
          "Server hasn't found what you search, please adjust your solicitation";
        break;
      case 404:
        errorMessage = "The page is not available";
        break;
      default:
        errorMessage = "Service unavailable";
        break;
    }
  } else if (error.request) {
    errorMessage = "error.";
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    errorMessage = error.message;
  }
};
