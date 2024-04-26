import React from 'react';
import logo from '../../log.svg';
import { IoIosCloudUpload, IoIosLink } from 'react-icons/io';
import { HiDesktopComputer } from 'react-icons/hi';
import { GoFileDirectory } from 'react-icons/go';
import { AiFillWindows } from 'react-icons/ai';
import { IoLogoAndroid } from 'react-icons/io';
import { SiMacos } from 'react-icons/si';
import image from '../../untitled.jpg';
import { FaSortDown } from 'react-icons/fa';
import './style.css';

export default function Home() {
	return (
		<div>
			{/* sizeBar */}
			<div className='header_home'>
				<div>
					<a className='focus' style={{ margin: '0 6px' }} href='#intro'>
						Giới thiệu
					</a>
					<a style={{ margin: '0 6px' }} href='#fu'>
						Tính năng
					</a>
					<a style={{ margin: '0 6px' }} href='#partner'>
						Đối Tác
					</a>
					<a style={{ margin: '0 6px' }} href='contact'>
						Liên hệ
					</a>
				</div>
				<img src={logo} alt='anh' />
				<div style={{ display: 'flex' }} className='content_button'>
					<button className='button'>Đăng nhập</button>
					<button className='button'>Đăng Kí</button>
				</div>
			</div>
			{/* Intro */}
			<div
				style={{
					marginTop: '80px',
					width: '100%',
					backgroundColor: 'rgb(255,255,255)',
					display: 'flex',
					justifyContent: 'space-around'
				}}>
				<div style={{ width: '40%', float: 'left' }}>
					<div style={{ boxSizing: 'border-box', margin: '0', padding: '0' }}>
						<div style={{ display: 'flex', marginTop: '40px', alignItems: 'center' }}>
							<img
								src='https://shub.edu.vn/images/landing/ver3/hero-section/logo-shub-circle.svg'
								alt='anh'
							/>
							<p style={{ fontWeight: '600', color: '#1e88e5', marginLeft: '12px' }}>
								SHub Classroom
							</p>
						</div>
						<div style={{ minWidth: '400px', margin: '8px 0' }}>
							<h1
								style={{
									fontSize: '38px',
									lineHeight: '56px',
									fontWeight: '700',
									letterSpacing: '1px'
								}}>
								Một cách hiệu quả để
							</h1>
							<h1> quản lý lớp học</h1>
						</div>
						<button className='button_join'>Tham gia ngay</button>
					</div>
					<div style={{ width: '100%' }}>
						<div>
							<button
								style={{
									padding: '12px 16px',
									borderRadius: '100px',
									background: 'rgba(239, 239, 245, 0.9)',
									width: 'fit-content',
									margin: '8px 8px 0 0',
									display: 'flex',
									alignItems: 'center',
									fontWeight: '600'
								}}>
								<IoIosCloudUpload style={{ color: '#1E88E5', margin: '0 4px' }} />
								Cung cấp tài nguyên cho học sinh
							</button>
						</div>
						<div style={{ display: 'flex' }}>
							<button
								style={{
									padding: '12px 16px',
									borderRadius: '100px',
									background: 'rgba(239, 239, 245, 0.9)',
									width: 'fit-content',
									margin: '8px 8px 0 0',
									display: 'flex',
									alignItems: 'center',
									fontWeight: '600'
								}}>
								<HiDesktopComputer style={{ color: '#e71313', margin: '0 4px' }} /> Khai thác học
								liệu
							</button>
							<button
								style={{
									padding: '12px 16px',
									borderRadius: '100px',
									background: 'rgba(239, 239, 245, 0.9)',
									width: 'fit-content',
									margin: '8px 8px 0 0',
									display: 'flex',
									alignItems: 'center',
									fontWeight: '600'
								}}>
								<IoIosLink style={{ color: '#007aff', margin: '0 4px' }} /> Giao bài tập
							</button>
							<button
								style={{
									padding: '12px 16px',
									borderRadius: '100px',
									background: 'rgba(239, 239, 245, 0.9)',
									width: 'fit-content',
									margin: '8px 8px 0 0',
									display: 'flex',
									alignItems: 'center',
									fontWeight: '600'
								}}>
								<GoFileDirectory style={{ color: 'orange', margin: '0 4px' }} /> Thi trực tuyến
							</button>
						</div>
						<div style={{ display: 'flex' }}>
							<button
								style={{
									padding: '12px 16px',
									borderRadius: '100px',
									background: 'rgba(239, 239, 245, 0.9)',
									width: 'fit-content',
									margin: '8px 8px 0 0',
									display: 'flex',
									alignItems: 'center',
									fontWeight: '600'
								}}>
								Tổ chức lớp học trực tuyến
							</button>
							<button
								style={{
									padding: '12px 16px',
									borderRadius: '100px',
									background: 'rgba(239, 239, 245, 0.9)',
									width: 'fit-content',
									margin: '8px 8px 0 0',
									display: 'flex',
									alignItems: 'center',
									fontWeight: '600'
								}}>
								Tạo nhiệm vụ học tập
							</button>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								fontWeight: '600',
								marginTop: '14px',
								height: '48px',
								width: 'fit-content',
								padding: '12px 24px ',
								borderRadius: '30px',
								background: 'rgb(43, 44, 52)',
								color: '#fff'
							}}>
							Khả dụng trên mọi nền tảng
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<SiMacos style={{ margin: '0 3px' }} />
								<AiFillWindows style={{ margin: '0 3px' }} />
								<IoLogoAndroid style={{ margin: '0 3px' }} />
							</div>
						</div>
					</div>
				</div>
				<div style={{ width: '50%', position: 'relative' }}>
					<img style={{ width: '100%' }} src={image} alt='anh' />
					<img
						style={{ width: '100%', position: 'absolute', top: '10px', left: '9px' }}
						src='https://shub.edu.vn/_next/image?url=%2Fimages%2Flanding%2Fver3%2Fhero-section%2Fhero-image-teacher.png&w=2048&q=75'
						alt='anh'
					/>
				</div>
			</div>

			{/* featur */}
			<section id='feature'>
				<div>
					<div style={{ width: '100%', maxHeight: '80px', textAlign: 'center' }}>
						<FaSortDown style={{ width: '30px', height: '30px', color: '' }} />
					</div>
					<div>
						<p>SHub Classroom mang đến cho bạn</p>
						<h1>Tất cả công cụ dạy học hiện đại</h1>
					</div>
					<div>
						<div>
							<iframe
								src='https://www.youtube.com/watch?v=xNRJwmlRBNU&t=320s'
								title='your video'></iframe>
							<div>
								<h2>Tạo và quản lý bài tập, kiểm tra bằng AI</h2>
								<p>
									Không cần soạn thảo các công thức phức tạp, mọi thứ được nhận diện hoàn toàn tự
									động với SHub Classroom. Bên cạnh đó, bạn còn được cung cấp đa dạng các tùy chỉnh
									chuyên sâu theo từng nhu cầu sử dụng.
								</p>
							</div>
						</div>
						<div>
							<div>
								<h2>Tạo và quản lý bài tập, kiểm tra bằng AI</h2>
								<p>
									Không cần soạn thảo các công thức phức tạp, mọi thứ được nhận diện hoàn toàn tự
									động với SHub Classroom. Bên cạnh đó, bạn còn được cung cấp đa dạng các tùy chỉnh
									chuyên sâu theo từng nhu cầu sử dụng.
								</p>
							</div>
							<iframe
								src='https://www.youtube.com/watch?v=xNRJwmlRBNU&t=320s'
								title='your video'></iframe>
						</div>
						<div>
							<iframe src='https://www.youtube.com/embed/hDycyHnkOAc' title='your video'></iframe>
							<div>
								<h2>Tạo và quản lý bài tập, kiểm tra bằng AI</h2>
								<p>
									Không cần soạn thảo các công thức phức tạp, mọi thứ được nhận diện hoàn toàn tự
									động với SHub Classroom. Bên cạnh đó, bạn còn được cung cấp đa dạng các tùy chỉnh
									chuyên sâu theo từng nhu cầu sử dụng.
								</p>
							</div>
						</div>
						<div>
							<div>
								<h2>Tạo và quản lý bài tập, kiểm tra bằng AI</h2>
								<p>
									Không cần soạn thảo các công thức phức tạp, mọi thứ được nhận diện hoàn toàn tự
									động với SHub Classroom. Bên cạnh đó, bạn còn được cung cấp đa dạng các tùy chỉnh
									chuyên sâu theo từng nhu cầu sử dụng.
								</p>
							</div>
							<iframe src='https://www.youtube.com/embed/w3iWc_6qSuw' title='your video'></iframe>
						</div>
					</div>
				</div>
			</section>
			{/* partner */}

			{/* contact */}
		</div>
	);
}
