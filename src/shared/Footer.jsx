import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0640C3] text-white px-10 py-12 max-w-[1921px] mx-auto font-[Manrope]">
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 px-5">

                {/* Left Section */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">tripbooking.ai</h2>
                       
                    </div>
                    <div>
                        <p className="text-[16px] text-gray-200 mb-6">
                            Dive into local recommendations for a truly authentic experience.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 text-sm mb-2">
                        <FaPhoneAlt />
                        <span>Need help? Call us</span>
                    </div>
                    <p className="text-lg font-bold">1-800-222-8888</p>
                </div>

                {/* Company */}
                <div className="">
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-3 text-sm text-gray-200">
                        <li>About Us</li>
                        <li>Community Blog</li>
                        <li>Jobs & Careers</li>
                        <li>Contact Us</li>
                        <li>Our Awards</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-4">Services</h3>
                    <ul className="space-y-3 text-sm text-gray-200">
                        <li>Tour Guide</li>
                        <li>Tour Booking</li>
                        <li>Hotel Booking</li>
                        <li>Ticket Booking</li>
                        <li>Rental Services</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold mb-4">Newsletter</h3>
                    <div className="flex items-center bg-white rounded-full overflow-hidden mb-6 h-[58px] w-[359px]" >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 text-black outline-none text-sm"
                        />
                        <button className="bg-[#F5A623] w-[124px] rounded-full h-[60px] text-white px-5 py-2 text-sm font-semibold">
                            Subscribe
                        </button>
                    </div>

                    <h4 className="font-semibold mb-3">Payments</h4>
                    <div className="flex gap-2">
                        <span className="bg-white text-black px-3 py-1 rounded text-xs">PayPal</span>
                        <span className="bg-white text-black px-3 py-1 rounded text-xs">Stripe</span>
                        <span className="bg-white text-black px-3 py-1 rounded text-xs">Mastercard</span>
                        <span className="bg-white text-black px-3 py-1 rounded text-xs">Skrill</span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-200">
                    © 2024 Travila Inc. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <span className="text-sm">Follow us</span>
                    <div className="flex gap-3">
                        <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full">
                            <FaInstagram size={14} />
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full">
                            <FaFacebookF size={14} />
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full">
                            <FaTwitter size={14} />
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center border border-white rounded-full">
                            <FaYoutube size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
