import PropTypes from "prop-types";
function Section({ title, children }) {
  return (
    <section title={title}>
      {title === "Залиште, будь ласка, свій feedback" ? (
        <h1>{title}</h1>
      ) : (
        <h2>{title}</h2>
      )}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Section;
