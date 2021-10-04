import { AbsoluteContainer } from "./comp.components";
import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <AbsoluteContainer>
      <div className='text-center'>
        <h3>Loading...</h3>
        <Spinner size="128" style={{ zIndex: "5" }} color="royalblue" />
      </div>
    </AbsoluteContainer>
  );
};

export default Loading;
