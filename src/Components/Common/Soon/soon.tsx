import soon from '../../../assets/imgs/soon.png'

const CommingSoon = () => {
    return ( 
        <div className='w-full h-full flex items-center justify-center'>
            <img src={soon} alt='Coming Soon' className='min-w-[400px] max-w-[800px] max-h-[500px] object-cover m-auto' />
            {/* <p className='text-center text-xl text-white font-bold'>Coming Soon</p>
            <p className='text-center text-sm text-gray-500'>This page will be available soon.</p> */}
        </div>
    );
}

export default CommingSoon;