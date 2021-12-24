import './app-container.scss';

const AppContainer = (props) => {
  return (
    <div className='app-container'>
      <section className='container-content'>{props.children}</section>
    </div>
  );
};

export default AppContainer;
