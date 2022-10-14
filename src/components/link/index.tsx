import { AnchorHTMLAttributes } from 'react'
export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function Link(props: LinkProps) {
  return (
    <a
      className="text-md text-green-400 hover:text-green-300 font-semibold underline"
      target="_blank"
      {...props}
    />
  )
}
