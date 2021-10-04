import { Image2, Wrapper1 } from "./comp.components";

const Photos = ({ photo }) => {
  return (
    <Wrapper1 to={`/posts/${photo._id}`}>
      <Image2 width="100%" src={photo?.image?.url ?? null} />
    </Wrapper1>
  );
};

export default Photos;
