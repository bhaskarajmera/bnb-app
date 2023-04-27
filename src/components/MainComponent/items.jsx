import React, { useState } from 'react'
import ItemCard from './itemCard';

const Items = () => {

	const [img] = useState([
		'https://a0.muscache.com/im/pictures/miso/Hosting-46651958/original/ae60e9f7-5d52-454a-be04-4e608a7e3e21.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-548990536794454148/original/1677026f-f97c-47cd-a12f-80c592fddf2f.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-730429566143720492/original/71a1a3fa-9f0f-413c-be59-9e32179120a2.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/f1a038ce-3a3c-4ef8-8f6f-f91d4ba72de4.jpg?im_w=720',
		'https://a0.muscache.com/im/pictures/a64a22fa-6262-4f36-8a40-bb0300a6bba3.jpg?im_w=720',
		'https://a0.muscache.com/im/pictures/030995fc-fa98-49e2-a098-4e88f50a7cc6.jpg?im_w=720',
		'https://a0.muscache.com/im/pictures/a92e89c3-b08b-4dae-a125-060af4888183.jpg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-730429566143720492/original/71a1a3fa-9f0f-413c-be59-9e32179120a2.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-730429566143720492/original/71a1a3fa-9f0f-413c-be59-9e32179120a2.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-730429566143720492/original/71a1a3fa-9f0f-413c-be59-9e32179120a2.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-730429566143720492/original/71a1a3fa-9f0f-413c-be59-9e32179120a2.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-730429566143720492/original/71a1a3fa-9f0f-413c-be59-9e32179120a2.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-730429566143720492/original/71a1a3fa-9f0f-413c-be59-9e32179120a2.jpeg?im_w=720',
		'https://a0.muscache.com/im/pictures/miso/Hosting-730429566143720492/original/71a1a3fa-9f0f-413c-be59-9e32179120a2.jpeg?im_w=720',
	]);

	return (
		<>
			<div className="flex-1 overflow-y-auto">
				<div className="grid grid-cols-4 px-5" id="tab-contents">
					<ItemCard className="itemCard" img={img} />
				</div>
			</div>
		</>
	)
}

export default Items