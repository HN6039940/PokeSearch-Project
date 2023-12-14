import { useRouteError, Link } from "react-router-dom";
// components
import Button from "../../components/btn/Button";
// styles
import { ErrorPageWrapper } from "../../assets/styles/ErrorPage_Wrapper";
// images
import NotFound from "../../assets/img/NotResult.svg";

const ErrorPage = () => {
  const { status } = useRouteError();
  return (
    <ErrorPageWrapper>
      <h2>{status ? `${status} Error !! ` : "Error !!"}</h2>
      <img src={NotFound} alt="not found" />
      <Link to="/">
        <Button text={"戻る"}></Button>
      </Link>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
