import { scroller } from "react-scroll";
import { FormattedMessage } from "react-intl";
import BackButton from "./BackButton";
import LangHeader from "./LangHeader";

export default function Header({
  isBlogIdView,
  isNewpostView,
  isProfileView,
  onBack,
  onLoginClick,
  onSignOutClick,
  onProfileClick,
  userAuthenticated,
}) {
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
        <nav className="max-w-7xl mx-auto flex justify-end items-center px-8">
          <ul className="flex gap-10">
            {/*Header in different views*/}
            {isNewpostView ? (
              <>
                <BackButton onBack={onBack} />
                <LangHeader />
              </>
            ) : isBlogIdView ? (
              <>
                <BackButton onBack={onBack} />
                <LangHeader />
              </>
            ) : isProfileView ? (
              <>
                <BackButton onBack={onBack} />
                <LangHeader />
              </>
            ) : (
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
                    onClick={() => handleScroll("GeneraBlog")}
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
                    onClick={() => handleScroll("GeneraContact")}
                  >
                    <FormattedMessage
                      id="header.contact"
                      defaultMessage="Contact"
                    />
                  </button>
                </li>
                {userAuthenticated ? (
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
                      <button
                        onClick={onProfileClick}
                        className="bg-transparent border-none cursor-pointer text-inherit"
                      >
                        <FormattedMessage
                          id="header.profile"
                          defaultMessage="Profile"
                        />
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <button
                      onClick={onLoginClick}
                      className="bg-transparent border-none cursor-pointer text-inherit"
                    >
                      <FormattedMessage
                        id="header.login"
                        defaultMessage="Login"
                      />
                    </button>
                  </li>
                )}
                <LangHeader />
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
