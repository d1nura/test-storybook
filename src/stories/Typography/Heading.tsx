const comn = {
  margin: 0,
  padding: 0,
};

const H1 = ({ children }: { children: string }) => {
  return <h1 style={comn}>{children}</h1>;
};
const H2 = ({ children }: { children: string }) => {
  return <h2 style={comn}>{children}</h2>;
};
const H3 = ({ children }: { children: string }) => {
  return <h3 style={comn}>{children}</h3>;
};

const P = ({ children }: { children: string }) => {
  return <p style={{ ...comn, color: "#B7BEC8" }}>{children}</p>;
};

export const Heading = {
  H1,
  H2,
  H3,
  P,
};
