import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders'

const Navbar = () => {
  const session = {

  }
  return (
    <div>
        <nav className="flexBetween navbar">
            <div className='flex-1 flexStart gap-10'>
                <Link href="/">
                <Image
                    src="./logo.svg"
                    width={115}
                    height={43}
                    alt='projekt-shareme'
                 ></Image>
                </Link>
            </div>
            <ul className='xl:flex hidden text-small gap-7'>
             {NavLinks.map((link) =>(
              <Link href={link.href} key={link.key}> {link.text}</Link>
             ))}
            </ul>

            <div className='flexcenter gaap-4'>
                {session ? (
                  <>
                    UserPhoto:

                  <Link href="/create-project">
                    Share your work
                  </Link>
                  </>
                ) : (
                  <AuthProviders />
                )
                }
        </div>

        </nav>

        <div className='flexcenter gap-4'>
          {session ? (
            <>
              UserPhoto

            <Link href="/create-project">
              Share your work
            </Link>
            </>
          ) : (
            <AuthProviders />
          )
          }

        </div>
      
    </div>
  )
}

export default Navbar
