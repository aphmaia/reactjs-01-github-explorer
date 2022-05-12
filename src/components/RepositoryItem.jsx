import { ArrowRight, Check, LockSimple, LockSimpleOpen } from "phosphor-react";

export function RepositoryItem(props) {
  return (
    <li className="mb-5 ml-4 last-of-type:mb-0"> 
      <strong className="text-lg flex items-center text-zinc-900">
        <Check size={16} className="mr-2 text-[#848fe6] font-black" /> {props.repository.name}
        {
          props.repository.visibility == "public"
            ? 
              <LockSimpleOpen size={18} className="ml-2 text-[#848fe6] font-black" />
            :
              <LockSimple size={18} className="ml-2 text-[#848fe6] font-black" />
        }

      </strong>
      <p className="text-sm mt-1 ml-6 text-zinc-900">{props.repository.description}</p>

      <a className="text-xs ml-6 decoration-none flex items-center mt-1 text-[#848fe6]" target="_blank" href={props.repository.html_url}>
        Acessar repositório <ArrowRight size={12} className="ml-1 flex-end text-[#848fe6] font-black" />
      </a>
    </li>
  );
}