const Header = () => {
  return (
    <>
      <header className="bg-primary-900 h-[60px] flex items-center justify-end sm:px-10 px-3 sm:gap-3 gap-2 font-semibold sm:text-base text-sm text-white">
        <h1>Besoin d’aide ?</h1>
        <a
          className="phone"
          href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER}`}
        >
          {process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER}
        </a>
      </header>
    </>
  );
};

export default Header;
