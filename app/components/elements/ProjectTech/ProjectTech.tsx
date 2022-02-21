import styles from "./ProjectTech.module.css";

type Props = {
  img: string;
  name: string;
};

const ProjectTech = ({ img, name }: Props) => (
  <li className={styles.tech}>
    <div className="flex-center">
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
      {name}
    </div>
  </li>
);

export default ProjectTech;
