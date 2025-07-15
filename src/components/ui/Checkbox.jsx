export default function Checkbox({ onChange, className = "", type = "checkbox", name, id = "checkbox", title, checked }) {
  return (
    <>
      <style jsx={'true'}>{`
        .custom-checkbox input:checked~span .hidden {
              display: block;
          }
      `}</style>
      
      <label htmlFor={id} className={`custom-checkbox flex items-center gap-1 w-max cursor-pointer select-none relative ${className}`}>
        <input type={type} className='hidden peer' id={id} defaultChecked={checked} name={name || id} onChange={onChange} />
        <span className={`size-4.5 relative flex items-center justify-center ${type != 'radio' ? 'peer-checked:bg-primary peer-checked:border-primary' : ''} ${type === "checkbox" ? 'rounded-sm' : 'rounded-full'} border-[1px] border-solid flex-[0_0_auto] border-[#D6D6D6]`}>
          <svg className="hidden" width="10" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3327 0.75L4.37435 6.70833L1.66602 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {type === 'radio' &&
          <span className="size-1.5 bg-[#1B1E28] rounded-full absolute top-[7px] left-1 hidden peer-checked:block" />
        }
        {title &&
          <span className={`select-none font-inter font-medium text-sm ${type === "checkbox" ? 'text-heading/70' : 'text-[#454850]/95 pl-1'} peer-checked:text-heading`}>{title || 'Title'}</span>
        }
      </label>
    </>
  )
}
