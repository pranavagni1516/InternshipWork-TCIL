import { BsSend } from "react-icons/bs";

const MessageInput = () => {
	return (
		<form className='px-4 my-3'>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
				/>
				<button type='submit' className='btn btn-sm absolute  inset-y-1  end-1 flex items-center'>
					<BsSend />
				</button>
			</div>
		</form>
	);
};
export default MessageInput;