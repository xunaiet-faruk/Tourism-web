import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0640C3] text-white px-6 md:px-10 py-12 max-w-[1921px] mx-auto font-[Manrope]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-2 md:px-5">

                <div className="space-y-6 md:space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">tripbooking.ai</h2>
                    </div>
                    <div>
                        <p className="text-[16px] text-gray-200 mb-6 max-w-xs">
                            Dive into local recommendations for a truly authentic experience.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 text-sm mb-1">
                        <FaPhoneAlt />
                        <span>Need help? Call us</span>
                    </div>
                    <p className="text-lg font-bold">1-800-222-8888</p>
                </div>

                <div className="md:pl-4">
                    <h3 className="font-semibold mb-4 text-lg">Company</h3>
                    <ul className="space-y-3 text-sm text-gray-200">
                        <li className="hover:text-white cursor-pointer transition">About Us</li>
                        <li className="hover:text-white cursor-pointer transition">Community Blog</li>
                        <li className="hover:text-white cursor-pointer transition">Jobs & Careers</li>
                        <li className="hover:text-white cursor-pointer transition">Contact Us</li>
                        <li className="hover:text-white cursor-pointer transition">Our Awards</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-lg">Services</h3>
                    <ul className="space-y-3 text-sm text-gray-200">
                        <li className="hover:text-white cursor-pointer transition">Tour Guide</li>
                        <li className="hover:text-white cursor-pointer transition">Tour Booking</li>
                        <li className="hover:text-white cursor-pointer transition">Hotel Booking</li>
                        <li className="hover:text-white cursor-pointer transition">Ticket Booking</li>
                        <li className="hover:text-white cursor-pointer transition">Rental Services</li>
                    </ul>
                </div>

                <div className="w-full">
                    <h3 className="font-semibold mb-4 text-lg">Newsletter</h3>
                    <div className="flex items-center bg-white rounded-full overflow-hidden mb-6 lg:h-[58px] md:h-[22px] w-full max-w-[359px] ">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 text-black outline-none text-sm lg:w-full"
                        />
                        <button className="bg-[#F5A623]  lg:w-[124px] md:w-[70px]  rounded-full h-full text-white px-4 py-2 text-sm font-semibold hover:bg-[#e59512] transition">
                            Subscribe
                        </button>
                    </div>

                    <h4 className="font-semibold mb-3">Payments</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-white text-black px-3 py-1 rounded text-xs font-medium">PayPal</span>
                        <span className="bg-white text-black px-3 py-1 rounded text-xs font-medium">Stripe</span>
                        <span className="bg-white text-black px-3 py-1 rounded text-xs font-medium">Mastercard</span>
                        <span className="bg-white text-black px-3 py-1 rounded text-xs font-medium">Skrill</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-gray-200 text-center md:text-left order-2 md:order-1">
                    © 2024 Travila Inc. All rights reserved.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 order-1 md:order-2">
                    <span className="text-sm">Follow us</span>
                    <div className="flex gap-3">
                        {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map((Icon, index) => (
                            <div key={index} className="w-9 h-9 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-[#0640C3] cursor-pointer transition-all">
                                <Icon size={16} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}