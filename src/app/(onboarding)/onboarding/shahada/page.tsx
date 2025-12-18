export default function ShahadaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Islamic Oath - Shahada</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6 text-center">
          <p className="text-xl mb-4 arabic-text">أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ</p>
          <p className="text-gray-700 italic">
            "I bear witness that there is no deity but Allah, and I bear witness that Muhammad is the messenger of Allah."
          </p>
        </div>
        <div className="mt-8">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5" />
            <span>I confirm that I am a practicing Muslim and agree to the Islamic principles of this platform.</span>
          </label>
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Continue
        </button>
      </div>
    </div>
  );
}
