import { ArrowRight, Check, LockSimple, LockSimpleOpen } from "phosphor-react";

export function RepositoryItem(props) {
  return (
    <li className="mb-5 ml-4 last-of-type:mb-0"> 
      <strong className="text-lg flex items-center text-zinc-100">
        <Check size={16} className="mr-2 text-[#8257e5] font-black" weight="bold" /> {props.repository.name}
        {
          props.repository.visibility == "public"
            ? 
              <LockSimpleOpen size={18} className="ml-2 text-[#8257e5] font-black" />
            :
              <LockSimple size={18} className="ml-2 text-[#8257e5] font-black" />
        }

      </strong>
      <p className="text-xs mt-1 ml-6 text-zinc-100">{props.repository.description}</p>

      <a className="ml-6 decoration-none flex items-center mt-1 text-[#8257e5]" target="_blank" href={props.repository.html_url}>
        <span className="text-xxs tracking-wider uppercase font-semibold">Acessar repositório</span> <ArrowRight size={12} className="ml-1 flex-end text-[#8257e5] font-black" weight="bold"  />
      </a>
    </li>
  );
}