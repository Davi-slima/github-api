import { useContext } from 'react';
import { GithubContext } from "../providers/githubProvider";

const useGithub = () => {
  const { githubState } = useContext(
    GithubContext
  );

  return { githubState };
};

export default useGithub;