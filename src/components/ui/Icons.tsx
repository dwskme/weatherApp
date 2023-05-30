
type Props = {
  imageName: string;
  heightValue:string;
  widthValue:string;
};
const Icons = (props: Props) => {
  const imagePath = '/' + props.imageName;
  return <img src={imagePath} alt={props.imageName} height={props.heightValue} width={props.widthValue} />;
};
export default Icons;
