import { LinkedinFilled, UserOutlined, MailFilled } from '@ant-design/icons'

const menu = [
  {
    icon: <LinkedinFilled />,
    link: 'https://www.linkedin.com/in/wojciech-staniszewski-89ba34223',
    external: true,
  },
  {
    icon: <UserOutlined />,
    link: '#about',
  },
  {
    icon: <MailFilled />,
    link: 'mailto: wpstaniszewski@gmail.com',
    external: true,
  },
]

export function NavMenu() {
  return (
    <nav className=" text-light mt-4">
      <ul className="flex justify-center items-center gap-4">
        {menu.map(({ link, icon, external }) => (
          <li
            key={link}
            className="text-light bg-gray-200 h-9 w-9 rounded flex justify-center items-center hover:text-sub transition-all"
          >
            {external ? (
              <a target="_blank" rel="noreferrer" style={{ marginTop: '-6px' }} href={`${link}`}>
                {icon}
              </a>
            ) : (
              <a style={{ marginTop: '-6px' }} href={`${link}`}>
                {icon}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
