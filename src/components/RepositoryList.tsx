import { useState, useEffect } from 'react';
import { ListChecks } from 'phosphor-react'
import { RepositoryItem } from './RepositoryItem' 

interface Repository {
  id: number;
  name: string;
  visibility: string;
  description: string;
  html_url: string;
}

export function RepositoryList(){

  const [ repositories, setRepositories ] = useState<Repository[]>([]);

  useEffect(() =>{
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
  }, 
    []
  );  

  return (
    <section className="m-10">
      <div className="flex items-center mb-4"> 
        <ListChecks size={30} className="flex-none mr-2 text-[#8257e5]" />
        <h1 className="flex-1 text-lg items-center"> Lista de repositórios</h1>
      </div>

      <ul className="list-none">
        {
          repositories.map(repository => {
            return <RepositoryItem key={repository.id} repository={repository} />;
          })
        }
          
      </ul>
    </section>
  )
}