import { ArrowRight, Check, LockSimple, LockSimpleOpen } from "phosphor-react";

interface RepositoryItemProps {
  repository: {
    id: number;
    name: string;
    visibility: string;
    description: string;
    html_url: string;
  }

}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li className="mb-5 ml-4 last-of-type:mb-0"> 
      <strong className="text-lg flex items-center text-zinc-100">
        <Check size={16} className="mr-2 text-[#8257e5] font-black" weight="bold" /> {repository.name}
        {
          repository.visibility == "public"
            ? 
              <LockSimpleOpen size={18} className="ml-2 text-[#8257e5] font-black" />
            :
              <LockSimple size={18} className="ml-2 text-[#8257e5] font-black" />
        }

      </strong>
      <p className="text-xs mt-1 ml-6 text-zinc-100">{repository.description}</p>

      <a className="ml-6 decoration-none flex items-center mt-1 text-[#8257e5]" target="_blank" href={repository.html_url}>
        <span className="text-xxs tracking-wider uppercase font-semibold">Acessar repositório</span> <ArrowRight size={12} className="ml-1 flex-end text-[#8257e5] font-black" weight="bold"  />
      </a>
    </li>
  );
}