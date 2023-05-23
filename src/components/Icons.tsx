
type Props = {
  imageName: string;
};
const Icons = (props: Props) => {
  const imagePath = '/' + props.imageName;
  return <img src={imagePath} alt={props.imageName} height="50px" width="50px" />;
};
export default Icons;
