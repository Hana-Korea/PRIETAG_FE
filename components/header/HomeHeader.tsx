import React from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function HomeHeader() {
	const pathname = usePathname();
	const underline = 'border-opacity-1 border-b-2 border-b-black';
	const noUnderline = 'border-opacity-0';
	return (
		<div className="relative h-[72px] w-full sm:w-screen">
			<div className="h-[44px] w-full sm:hidden">
				{' '}
				<Image
					src="/img/iphone_notch.svg"
					alt="로고 이미지"
					width={355}
					height={44}
				/>{' '}
			</div>
			<div className="shadow-[0_1px_3px_rgba(0, 0, 0, 0.15)] absolute z-20 flex h-[72px] w-full items-center justify-center bg-[#FFF] shadow">
				<div className="flex h-full w-full items-center justify-between px-[20px] sm:w-[calc(100%-240px)] sm:px-0 xl:w-[calc(100%-80px)]  ">
					<Link href="/">
						<div className=" relative h-[18px] w-[53px] sm:h-[32px] sm:w-[93px] xl:h-[32px] xl:w-[94px]  ">
							{' '}
							<Image src="/img/ezfee.svg" alt="로고 이미지" fill={true} />{' '}
						</div>
					</Link>{' '}
					<div className=" h-[72px] min-w-[240px] shrink-0">
						<nav className="h-full">
							<ul className="flex h-full cursor-pointer  justify-between text-[16px]">
								<Link href="/">
									<div
										className={`hover:border-opacity-1 hidden h-full w-[92px] items-center justify-center  hover:border-b-2 hover:border-b-black sm:flex ${
											pathname === '/' ? underline : noUnderline
										}`}
									>
										{' '}
										<li className=" hover:font-medium">홈</li>
									</div>
								</Link>{' '}
								<Link href="/templateList">
									<div
										className={`hover:border-opacity-1 hidden  h-full w-[92px] items-center justify-center hover:border-b-2 hover:border-b-black xl:mx-[67px]  xl:flex ${
											pathname === '/templateList' ? underline : noUnderline
										}`}
									>
										<li className=" hover:font-medium">템플릿 편집</li>
									</div>
								</Link>
								<Link href="/dashboard">
									<div
										className={`hover:border-opacity-1 hidden h-full w-[92px] items-center justify-center hover:border-b-2 hover:border-b-black sm:flex ${
											pathname === '/dashboard' ? underline : noUnderline
										}`}
									>
										<li className=" hover:font-medium">대시 보드</li>
									</div>{' '}
								</Link>
							</ul>
						</nav>
					</div>
					<button className=" hidden h-[34px] min-w-[135px]  items-center text-[#989898] sm:flex">
						<Image
							src="/img/icon_account.svg"
							alt="유저프로필"
							width={32}
							height={32}
							className="mr-[8px]"
						/>{' '}
						나의 계정 정보
					</button>
					<RxHamburgerMenu className=" absolute right-[20px] top-[calc(50%-18px/2)]  h-[24px] w-[24px] cursor-pointer rounded-[3px] hover:text-[#00A3FF] sm:hidden" />{' '}
				</div>
			</div>
		</div>
	);
}

export default HomeHeader;
