import "./_fullPageLoader.scss";

const FullPageLoader = ({ message }) => (
  <div className="fp_loader">
    <h1>Please Wait</h1>
    <h2>{message}</h2>
  </div>
);

export default FullPageLoader;
