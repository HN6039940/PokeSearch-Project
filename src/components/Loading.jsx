import { LoadingWrapper } from "../assets/styles/Loading_Wrapper";

const Loading = () => {
  return (
    <LoadingWrapper>
      <div className="loading">
        <div className="loading-square"></div>
        <div className="loading-square"></div>
        <div className="loading-square"></div>
        <div className="loading-square"></div>
      </div>
    </LoadingWrapper>
  );
};

export default Loading;
