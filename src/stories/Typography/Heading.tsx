const comn = {
  margin: 0,
  padding: 0,
};

type heading = {
  fontSize?: string;
  children: string;
  color?: string;
  ml?: string;
  mb?: string;
  mt?: string;
};

const H1 = ({ children }: heading) => {
  return <h1 style={comn}>{children}</h1>;
};
const H2 = ({ children }: heading) => {
  return <h2 style={comn}>{children}</h2>;
};
const H3 = ({ children, fontSize, mb = "0px" }: heading) => {
  return <h3 style={{ ...comn, fontSize, marginBottom: mb }}>{children}</h3>;
};

const P = ({
  children,
  fontSize,
  color = "#8995a6",
  ml = "0px",
  mb = "0px",
  mt = "0px",
}: heading) => {
  return (
    <p
      style={{
        ...comn,
        fontSize,
        color,
        marginLeft: ml,
        marginBottom: mb,
        marginTop: mt,
      }}
    >
      {children}
    </p>
  );
};

export const Heading = {
  H1,
  H2,
  H3,
  P,
};
