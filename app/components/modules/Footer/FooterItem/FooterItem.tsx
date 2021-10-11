type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

const FooterItem = ({ icon, title, value }: Props) => (
  <div>
    <h2>{icon}</h2>

    <h6 style={{ textAlign: "center" }}>{title}</h6>
    <h5>{value}</h5>
  </div>
);

export default FooterItem;
