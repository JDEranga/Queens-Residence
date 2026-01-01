"use client";

import { useState } from "react";
import { Bed, Bath, Wifi, Tv, Wind, Coffee, Users, Maximize } from "lucide-react";

const rooms = [
	{
		id: 1,
		name: "Double Room",
		description:
			"Affordable. Clean. Comfortable. Enjoy a pleasant stay with essential comforts at budget-friendly rates.",
		amenities: [
			{ icon: Bed, name: "2 Double Beds" },
			{ icon: Bath, name: "Private Bath" },
			{ icon: Wifi, name: "Free WiFi" },
			{ icon: Wind, name: "AC" },
			
		],
		images: [
			"/doubleroom.jpg",
			"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
			
		],
	},
	{
		id: 2,
		name: "Family Room",
		description:
			"Spacious, clean, and affordable rooms designed for families, with all essential comforts.",
		amenities: [
			{ icon: Bed, name: "Queen Bed" },
			{ icon: Bath, name: "Private Bath" },
			{ icon: Wifi, name: "Free WiFi" },
			{ icon: Wind, name: "AC" },
			
			
		],
		images: [
			"/familyroom1.jpg",
			"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
	
		],
	},
];

export default function Rooms() {

	return (
		<section
			id="rooms"
			className="relative py-16 sm:py-24 bg-gradient-to-b from-black to-zinc-950"
			style={{ scrollMarginTop: '120px' }}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				{/* Section Header */}
				<div className="mb-12 sm:mb-16 text-center">
					<span className="mb-4 inline-block rounded-full border border-gold/30 px-4 py-1 text-xs sm:text-sm text-gold">
						Accommodations
					</span>
					<h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
						<span className="gold-text-gradient">Our Rooms</span>
					</h2>
					<p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-400">
						Choose from our carefully designed rooms, each offering a unique blend
						of comfort and luxury.
					</p>
				</div>

				{/* Rooms Grid */}
				<div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
					{rooms.map((room) => (
						<div
							key={room.id}
							className="group card-hover rounded-2xl border border-gold/20 bg-zinc-900/50 overflow-hidden flex flex-col"
						>
							{/* Room Image */}
							<div className="relative h-48 sm:h-64 overflow-hidden">
								<img
									src={room.images[0]}
									alt={room.name}
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
								<div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-end justify-between">
									<h3 className="text-lg sm:text-2xl font-bold text-white">
										{room.name}
									</h3>
								</div>
							</div>

							{/* Room Details */}
							<div className="p-4 sm:p-6 flex flex-col flex-grow">
								<p className="mb-4 text-sm sm:text-base text-gray-400">
									{room.description}
								</p>

								{/* Amenities */}
								<div className="mb-6 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
									{room.amenities.map((amenity, index) => (
										<div
											key={index}
											className="flex items-center gap-2 rounded-lg bg-black/30 px-2 sm:px-3 py-2 text-xs sm:text-sm"
										>
											<amenity.icon className="h-3 w-3 sm:h-4 sm:w-4 text-gold shrink-0" />
											<span className="text-gray-300 hidden sm:inline">
												{amenity.name}
											</span>
										</div>
									))}
								</div>

								{/* Actions */}
								<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
									<a
										href="tel:+94743524217"
										className="flex-1 rounded-full bg-gold py-2 sm:py-3 text-xs sm:text-sm font-medium text-black transition-all duration-300 hover:bg-gold-light text-center"
									>
										Book Now
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
