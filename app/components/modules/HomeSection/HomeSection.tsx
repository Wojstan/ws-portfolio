import Separator from "@element/Separator/Separator";

type Props = {
  id: string;
  children: React.ReactNode;
  style: string;
  title: string;
  about: string;
};

const HomeSection = ({ id, children, style, title, about }: Props) => (
  <section id={id} className={style}>
    <article>
      <h2>{title}</h2>

      <p>{about}</p>
      <Separator width="300px" />
    </article>
    {children}
  </section>
);

export default HomeSection;
