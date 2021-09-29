function Footer() {
  const currentYear = new Date().getFullYear().toString();

  return (
    <div className="hidden md:block md:fixed md:bottom-0 md:left-2/4 md:p-2 font-thin text-xs">
      <p>Copyright &#169; {currentYear} E-Corp</p>
    </div>
  );
}

export default Footer;
