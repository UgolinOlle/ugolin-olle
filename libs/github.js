import React, { createContext, useEffect, useState } from 'react';
import $api from './api';

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [$github, setGithub] = useState();
  const [$commits, setCommits] = useState();
  const [$repos, setRepos] = useState();

  useEffect(() => {
    $api.get('/users/UgolinOlle').then((res) => setGithub(res.data));
  }, []);

  useEffect(() => {
    let numCommits = 0;

    $api.get('/users/UgolinOlle/repos').then((res) => {
      res.data.map((item) => {
        let commitUrl = item.commits_url.replace('{/sha}', '');
        console.log('repos', res.data);
        setRepos(res.data.length);

        $api.get(commitUrl).then((res) => {
          numCommits += res.data.length;
          console.log('commits', res.data);
          setCommits(numCommits);
        });
      });
    });
  }, []);

  return (
    <GithubContext.Provider value={{ $github, $commits, $repos }}>
      {children}
    </GithubContext.Provider>
  );
};
