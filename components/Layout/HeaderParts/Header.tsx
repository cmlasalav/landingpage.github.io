import Link from "next/link";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import BackButton from "./BackButton";
import LangHeader from "./LangHeader";

export default function Header({ onSignOutClick, userAuthenticated }) {
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  // Scroll to section
  const handleScroll = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: -60,
    });
  };

  return (
    <header className="bg-white p-2 sticky top-0 z-[1000] h-20 w-full shadow-sm">
      <div className="max-w-7xl mx-auto">
        <nav className="max-w-7xl mx-auto flex items-center px-8">
          {!isHomePage && (
            <div className="mr-auto">
              <BackButton />
            </div>
          )}

          <ul className="flex gap-10 ml-auto items-center">
            {isHomePage && (
              <>
                <li>
                  <button
                    className="bg-transparent border-none cursor-pointer text-inherit"
                    onClick={() => handleScroll("Home")}
                  >
                    <FormattedMessage id="header.home" defaultMessage="Home" />
                  </button>
                </li>
                <li>
                  <button
                    className="bg-transparent border-none cursor-pointer text-inherit"
                    onClick={() => handleScroll("AboutUs")}
                  >
                    <FormattedMessage
                      id="header.aboutUs"
                      defaultMessage="About Us"
                    />
                  </button>
                </li>
                <li>
                  <button
                    className="bg-transparent border-none cursor-pointer text-inherit"
                    onClick={() => handleScroll("Services")}
                  >
                    <FormattedMessage
                      id="header.services"
                      defaultMessage="Our Services"
                    />
                  </button>
                </li>
                <li>
                  <button
                    className="bg-transparent border-none cursor-pointer text-inherit"
                    onClick={() => handleScroll("Testimonials")}
                  >
                    <FormattedMessage
                      id="header.testimonials"
                      defaultMessage="Testimonials"
                    />
                  </button>
                </li>
                <li>
                  <button
                    className="bg-transparent border-none cursor-pointer text-inherit"
                    onClick={() => handleScroll("Blog")}
                  >
                    <FormattedMessage
                      id="header.blog"
                      defaultMessage="Blog/News"
                    />
                  </button>
                </li>
                <li>
                  <button
                    className="bg-transparent border-none cursor-pointer text-inherit"
                    onClick={() => handleScroll("Contact")}
                  >
                    <FormattedMessage
                      id="header.contact"
                      defaultMessage="Contact"
                    />
                  </button>
                </li>
              </>
            )}

            {userAuthenticated && isHomePage && (
              <>
                <li>
                  <button
                    onClick={onSignOutClick}
                    className="bg-transparent border-none cursor-pointer text-inherit"
                  >
                    <FormattedMessage
                      id="header.signOut"
                      defaultMessage="Sign Out"
                    />
                  </button>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="bg-transparent border-none cursor-pointer text-inherit"
                  >
                    <FormattedMessage
                      id="header.profile"
                      defaultMessage="Profile"
                    />
                  </Link>
                </li>
              </>
            )}
            {!userAuthenticated && (
              <li>
                <Link
                  href="/auth"
                  className="bg-transparent border-none cursor-pointer text-inherit"
                >
                  <FormattedMessage id="header.login" defaultMessage="Login" />
                </Link>
              </li>
            )}

            <li>
              <LangHeader />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
