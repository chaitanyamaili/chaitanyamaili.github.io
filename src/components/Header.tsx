import SectionTitle from "./SectionTitle"

const Header = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Welcome" subtitle="Here's who I am & what I do" className="hide-for-print" />
    </section>
  );
}
export default Header;
