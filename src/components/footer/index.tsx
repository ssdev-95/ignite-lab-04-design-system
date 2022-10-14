import { Link } from '../link'

export type FooterProps = any

export function Footer(props: FooterProps) {
  return (
    <footer
      className="w-[400px] max-w-[90vw] flex items-center justify-between"
      {...props}
    >
      <Link href="#">Forgot password?</Link>

      <span className="text-gray-100 text-md font-bold">•</span>

      <Link href="#">Not registered yet?</Link>
    </footer>
  )
}
