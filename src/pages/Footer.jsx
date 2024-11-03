import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="bg-gray-900 text-gray-400 py-10">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-white">Gadget Heaven</h2>
            <p class="text-gray-400">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </div>
          <div class="flex flex-col md:flex-row justify-center gap-10 text-center">
            <div>
              <h3 class="text-lg font-semibold text-white">Services</h3>
              <ul class="mt-2 space-y-1">
                <li>
                  <a href="#" class="hover:text-white">
                    Product Support
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Company</h3>
              <ul class="mt-2 space-y-1">
                <li>
                  <a href="#" class="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Legal</h3>
              <ul class="mt-2 space-y-1">
                <li>
                  <a href="#" class="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
