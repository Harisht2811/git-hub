export const fetchRepos = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          "https://api.github.com/orgs/venzo-mdu/repos"
        );
        const data = await response.json();
        console.log(data);

        dispatch({ type: "FETCH_REPOS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_REPOS_REJECTED", payload: err });
      }
    };
  };
  