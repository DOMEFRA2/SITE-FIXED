
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">NearHome Smart Suites</h1>
      </header>

      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl mb-4">Camere / Rooms</h2>
        <ul className="space-y-2">
          <li><strong>Matrimoniale Piccola</strong> / Small Double Room</li>
          <li><strong>Matrimoniale Standard</strong> / Standard Double Room</li>
          <li><strong>Junior Suite Familiare</strong> / Family Junior Suite</li>
          <li><strong>Matrimoniale Deluxe</strong> / Deluxe Double Room</li>
        </ul>
       
      </section>

      <section className="p-10">
        <h2 className="text-3xl mb-4">Servizi / Amenities</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Wi-Fi gratuito / Free Wi-Fi</li>
          <li>Aria condizionata / Air Conditioning</li>
          <li>Smart TV</li>
          <li>Bagno privato / Private Bathroom</li>
          <li>Set cortesia / Toiletries</li>
        </ul>
      </section>

      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl mb-4">Chi siamo / About Us</h2>
        <p>NearHome Smart Suites è una guesthouse moderna nel cuore di Roma. Offriamo sistemazioni eleganti per viaggiatori in cerca di comfort e stile.<br />
        <span className="italic">NearHome Smart Suites is a modern guesthouse in the heart of Rome. We offer stylish accommodations for travelers seeking comfort and style.</span></p>
      </section>

      <section className="p-10">
        <h2 className="text-3xl mb-4">Dove siamo / Where We Are</h2>
        <p>Via Sicilia 153, 00187 Roma<br />
        <span className="italic">Via Sicilia 153, 00187 Rome</span></p>
        <iframe className="w-full h-64 mt-4 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.040271664739!2d12.496365375908493!3d41.9027822636877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f619c1c9e4431%3A0x12ddfbe3a46f95d!2sVia%20Sicilia%20153%2C%2000187%20Roma!5e0!3m2!1sit!2sit!4v1686234567890!5m2!1sit!2sit" allowFullScreen="" loading="lazy"></iframe>
      </section>

      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl mb-4">Contatti / Contact</h2>
        <p>Email: nearhome.reservation@gmail.com<br />
        Telefono: +39 334 9014913</p>
      </section>

      <footer className="bg-blue-900 text-white text-center p-4 mt-6">
        &copy; {new Date().getFullYear()} NearHome Smart Suites
      </footer>
    </main>
  );
}
