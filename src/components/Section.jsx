function Section({ title, children, ...stylingProps }) {
  return (
    // Forwarding Props. - Useful for building WRAPPER components
    <section {...stylingProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
