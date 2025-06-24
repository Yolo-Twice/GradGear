export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-3">GradGear</h2>
          <p className="text-sm mb-4">
            Get a starter kit recommendation for commencing your college life according to your budget and get best buy links too. <br /> More features coming soon!
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter text-xl"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube text-xl"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github text-xl"></i></a>
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">Major Specific Kits</a></li>
            <li><a href="#">Budget Setter</a></li>
            <li><a href="#">Compare Products</a></li>
            <li><a href="#">Best Buy Links</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-300">
            <i className="far fa-envelope mr-2"></i> support@gradgear.app
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p className="mb-2 md:mb-0">© 2025 GradGear. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
