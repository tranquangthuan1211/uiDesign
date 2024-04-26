import logo from '../../log.svg';
import teacher from '../../teacher1.svg';
export default function Login() {
	return (
		<div className='flex flex-col w-full px-[16px] xl:px-[132px]'>
			<div className='flex justify-between items-center py-5'>
				<img src={logo} alt='brand' />
				<div className='flex gap-4'>
					<div className='max-lg:hidden cursor-pointer rounded-[6px] px-[30px] py-[10px] hover:bg-gray-50'>
						<button className='text-[#202227] font-bold text-[14px]'>Trang chủ</button>
					</div>
					<div className='cursor-pointer border border-[##D8DCF0] rounded-[6px] px-[30px] py-[10px] hover:bg-gray-50'>
						<button className='text-[#1E88E5] font-bold text-[14px]'>Đăng ký</button>
					</div>
				</div>
			</div>
			<div className='max-lg:flex-col flex justify-between items-center'>
				<div className='flex flex-col w-full'>
					<span className='font-bold text-[28px] text-[#202227]'>
						CHÀO MỪNG BẠN ĐẾN VỚI SHUB CLASSROOM
					</span>
					<div className='mt-[32px] flex flex-col gap-4'>
						<span className='text-[#1E88E5] text-[16px]'>Chọn vai trò của bạn</span>
						<div>
							<div
								tabindex='0'
								role='button'
								aria-expanded='false'
								aria-haspopup='listbox'
								class='MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-1880b1u'>
								Tôi là học sinh
							</div>
						</div>
						<div className='flex gap-4'>
							<div className='w-full bg-[#1E88E5] rounded-[6px] flex justify-center items-center h-[40px]'>
								<button className='font-bold text-sm text-white'>Tiếp tục</button>
							</div>
						</div>
					</div>
				</div>
				<img src={teacher} alt='teacher' className='px-16' />
			</div>
		</div>
	);
}
