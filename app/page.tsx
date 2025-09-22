import { ShoppingCart, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductListingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">E</span>
                </div>
                <span className="text-xl font-bold text-gray-900">E-Comm</span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">
                HOME
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                BAG
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                OUR BRANDS
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                BEST
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                CONTACT
              </a>
            </nav>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
              <span className="text-sm text-gray-600">Items</span>
              <span className="text-sm font-semibold text-gray-900">$0.00</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">Adidas Men Running</h1>
              <h2 className="text-4xl font-bold mb-4">Sneakers</h2>
              <p className="text-lg opacity-90">Performance and style for your active lifestyle</p>
            </div>
            <div className="flex-1 flex justify-end">
              <img
                src="/blue-adidas-running-sneaker.jpg"
                alt="Adidas Running Sneakers"
                className="w-80 h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            {/* Hot Deals */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Hot Deals</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Nike
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 font-medium">
                    Airmax
                  </a>{" "}
                  <span className="text-gray-400 text-sm">(8)</span>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Nike
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Men's
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Women's
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    All Star
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Adidas
                  </a>{" "}
                  <span className="text-gray-400 text-sm">(2)</span>
                </li>
              </ul>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">PRICES</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Range:</span>
                  <span>$13.99 - $25.99</span>
                </div>
                <Slider defaultValue={[13.99, 25.99]} max={100} min={0} step={0.01} className="w-full" />
              </div>
            </div>

            {/* Color Filter */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">COLOR</h3>
              <div className="flex space-x-3">
                <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-300 cursor-pointer"></div>
                <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-300 cursor-pointer"></div>
                <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-gray-300 cursor-pointer"></div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">BRAND</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Nike
                  </a>{" "}
                  <span className="text-gray-400 text-sm">(8)</span>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Puma
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Adidas
                  </a>{" "}
                  <span className="text-gray-400 text-sm">(2)</span>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Converse
                  </a>
                </li>
              </ul>
              <button className="text-blue-600 text-sm mt-3 hover:underline">MORE</button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Filter Bar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <span className="text-gray-600">0 Items</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Sort by</span>
                    <Select defaultValue="name">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="price">Price</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Show</span>
                    <Select defaultValue="12">
                      <SelectTrigger className="w-16">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12</SelectItem>
                        <SelectItem value="24">24</SelectItem>
                        <SelectItem value="48">48</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Product 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src="/nike-air-max-270-react-sneakers.jpg"
                    alt="Nike Air Max 270 React"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Nike Air Max 270 React</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">$534.33</span>
                    <span className="text-sm text-gray-500 line-through">$534.33</span>
                    <span className="text-sm text-red-500">24% Off</span>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src="/nike-air-max-270-react-red-handbag.jpg"
                    alt="Nike Air Max 270 React"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Nike Air Max 270 React</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">$534.33</span>
                    <span className="text-sm text-gray-500 line-through">$534.33</span>
                    <span className="text-sm text-red-500">24% Off</span>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src="/beige-ankle-boots-women.jpg"
                    alt="Nike Air Max 270 React"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Nike Air Max 270 React</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">$534.33</span>
                    <span className="text-sm text-gray-500 line-through">$534.33</span>
                    <span className="text-sm text-red-500">24% Off</span>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src="/nike-air-max-270-react-blue-white-sneakers.jpg"
                    alt="Nike Air Max 270 React"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Nike Air Max 270 React</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">$534.33</span>
                    <span className="text-sm text-gray-500 line-through">$534.33</span>
                    <span className="text-sm text-red-500">24% Off</span>
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src="/nike-air-max-270-react-yellow-black-sneakers.jpg"
                    alt="Nike Air Max 270 React"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Nike Air Max 270 React</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">$534.33</span>
                    <span className="text-sm text-gray-500 line-through">$534.33</span>
                    <span className="text-sm text-red-500">24% Off</span>
                  </div>
                </div>
              </div>

              {/* Product 6 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src="/nike-air-max-270-react-blue-yellow-sneakers.jpg"
                    alt="Nike Air Max 270 React"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Nike Air Max 270 React</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">$534.33</span>
                    <span className="text-sm text-gray-500 line-through">$534.33</span>
                    <span className="text-sm text-red-500">24% Off</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent">
                  1
                </Button>
                <Button variant="default" size="sm" className="w-10 h-10 p-0 bg-blue-500 hover:bg-blue-600">
                  2
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent">
                  3
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent">
                  4
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent">
                  5
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-500 text-sm font-bold">E</span>
                </div>
                <span className="text-xl font-bold">E-Comm</span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <p className="text-blue-100 text-sm mb-4">
                Since the 1500s, when an unknown printer took a galley of type and scrambled.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="text-blue-100 text-sm space-y-2">
                <p>E-Comm: Ecommerce Store</p>
                <p>Address: 1234 Street Adress</p>
                <p>City Address, 1234</p>
                <p>Phone: (00) 1234 5678</p>
                <p>Email: shop@email.com</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Information</h3>
                <ul className="text-blue-100 text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Service</h3>
                <ul className="text-blue-100 text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">My Account</h3>
                <ul className="text-blue-100 text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Our Offers</h3>
                <ul className="text-blue-100 text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-400 mt-8 pt-8 flex justify-center">
            <div className="flex space-x-4">
              <img src="/visa-logo-generic.png" alt="Visa" className="h-6" />
              <img src="/mastercard-logo.png" alt="Mastercard" className="h-6" />
              <img src="/payment/paypal.png" alt="PayPal" className="h-6" />
              <img src="/american-express-payment-logo.jpg" alt="American Express" className="h-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
