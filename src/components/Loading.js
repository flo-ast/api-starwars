import ReactLoading from 'react-loading';

const Loading = () => (
        <div className="bg-neutral-900 h-screen">
            <ReactLoading type='spin' color='#d97706' className='m-auto'/>
        </div>
);
  
export default Loading;